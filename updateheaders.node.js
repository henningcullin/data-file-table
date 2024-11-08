const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

// Directory containing text files
const dirPath = path.join(
  `C:\\Users\\Henning\\Programmering\\PHP\\avrap\\data\\table`
);

// Object to store headers from each file
const headers = {};

// Read the directory and process each text file
fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Filter to only process .txt files
  const textFiles = files.filter((file) => path.extname(file) === ".txt");

  textFiles.forEach((file) => {
    const filePath = path.join(dirPath, file);

    // Read each file synchronously (since we only need the first line)
    const fileContent = fs.readFileSync(filePath, "utf8");
    const firstLine = fileContent.split("\n")[0];

    // Check if the first line contains "|$$|" before adding to headers
    if (firstLine.includes("|$$|")) {
      // Extract filename without extension
      const filenameWithoutExt = path.basename(file, ".txt");

      // Add to headers object
      headers[filenameWithoutExt] = {
        file: filenameWithoutExt,
        header: firstLine.trim(),
      };
    }
  });

  // Manually construct the JavaScript object string with backticks for header values
  let output = "export const headers = {\n";
  for (const [key, { file, header }] of Object.entries(headers)) {
    output += `  ${key}: {\n`;
    output += `    file: '${file}',\n`;
    output += `    header: \`${header}\`,\n`;
    output += `  },\n`;
  }
  output += "};";

  // Path for the temporary text file
  const tempFilePath = path.join(__dirname, "output.txt");

  // Write output to a temporary text file
  fs.writeFileSync(tempFilePath, output, "utf8");

  // Open the temporary file in Notepad
  exec(`notepad.exe ${tempFilePath}`, (err) => {
    if (err) {
      console.error("Failed to open Notepad:", err);
    } else {
      console.log("File opened in Notepad.");
      fs.unlinkSync(tempFilePath);
    }
  });
});
