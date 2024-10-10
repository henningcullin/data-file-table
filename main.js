import DataTable from "./Table.js";

// Example usage
const header = ["id", "first_name", "last_name", "age"];
const data = [
  [0, "john", "smith", 40],
  [1, "dan", "wild", 33],
  [2, "oliver", "reason", 28],
  [3, "scarlett", "andersson", 46],
];

const tableElement = document.querySelector("data-table");

tableElement.header = header;
tableElement.data = data;
