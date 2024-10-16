import DataTable from "./Table.js";

// Example usage
const header = ["id", "first_name", "last_name", "age"];
const data = [];

// Sample first names and last names
const firstNames = [
  "john", "dan", "oliver", "scarlett", "lily", "chris", "nina", "mike", "emily", "james", "amelia", 
  "sophia", "jacob", "mason", "isabella", "ethan", "logan", "mia", "charlotte", "harper", "ella", 
  "benjamin", "alexander", "elijah", "abigail", "zoe", "avery", "lucas", "daniel", "gabriel", "jackson", 
  "leo", "liam", "grace", "victoria", "hannah", "samuel", "carter", "layla", "aubrey", "ella", "nathan", 
  "olivia", "noah", "riley", "ava", "william", "evan", "sophie", "sebastian", "grayson", "caleb", 
  "madison", "chloe", "zoey", "savannah", "ella", "grace", "caroline", "amelie", "clara", "elise", 
  "lucia", "julian", "mateo", "roman", "henry", "aria", "alex", "evie", "max", "charlie", "mia", 
  "stella", "penelope", "dylan", "amelie", "rachel", "morgan", "lucas", "joseph", "ella", "isla", 
  "jack", "zachary", "brody", "madeline", "freya", "ryan", "victor", "tristan", "nathaniel", "ella", 
  "adrian", "maya", "mila", "sarah", "evan", "oscar", "adam", "isabelle", "phoebe", "hailey", "hugo"
];

const lastNames = [
  "smith", "wild", "reason", "andersson", "brown", "johnson", "williams", "jones", "davis", "miller", 
  "garcia", "wilson", "moore", "taylor", "martin", "lee", "perez", "white", "thomas", "clark", 
  "walker", "young", "harris", "hall", "allen", "king", "wright", "lopez", "hill", "scott", 
  "green", "adams", "baker", "nelson", "carter", "mitchell", "roberts", "campbell", "parker", 
  "edwards", "collins", "stewart", "sanders", "morris", "rogers", "reed", "cook", "morgan", "bell", 
  "murphy", "bailey", "cooper", "richardson", "cox", "howard", "ward", "torres", "peterson", 
  "gray", "ramirez", "wood", "brooks", "kelly", "diaz", "price", "reed", "bennett", "barnes", 
  "ross", "henderson", "coleman", "james", "russell", "powell", "griffin", "foster", "butler", 
  "washington", "jenkins", "mason", "watkins", "fisher", "hendricks", "gonzales", "richards", 
  "walsh", "holland", "gibbs", "bishop", "hicks", "newman", "grant", "mccarthy", "miles", 
  "phillips", "holt", "singleton", "rice", "horton", "bryant", "ellis", "pearson", "keller"
];

// Function to generate random people and add them to the data array
function addRandomPeople(count) {
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const getRandomAge = () => Math.floor(Math.random() * (65 - 18 + 1)) + 18;

  let currentId = data.length;

  for (let i = 0; i < count; i++) {
    const firstName = getRandomElement(firstNames);
    const lastName = getRandomElement(lastNames);
    const age = getRandomAge();
    data.push([currentId++, firstName, lastName, age]);
  }
}

addRandomPeople(81053);

// function parseHeader(rawHeader) {
//   return rawHeader.split("|").slice(2, -3);
// }

// function parseData(rawData) {
//   return rawData.split("|$|\n").map((row) => row.split("|").slice(2, -3));
// }

// const header = parseHeader(rawHeader);
// const data = parseData(rawData);

const tableElement = document.querySelector("data-table");

tableElement.header = header;
tableElement.data = data;
