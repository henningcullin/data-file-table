const fs = require("fs");
const path = require("path");

// Directory containing text files
const dirPath = path.join(__dirname, "datafiles");

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

  // Output the final constructed string
  console.log(output);
});
