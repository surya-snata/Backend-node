const fs = require("fs");

// Create File
const readFile = () => {
  const filepath = "data.json";
  const data = fs.readFileSync(filepath);
  const parseData = JSON.parse(data);
  return parseData;
};

const writeFile = () => {
  const filepath = "data.json";
  const data = {
    id: 3,
    name: "Shaktiman",
    age: 70,
  };
  const newData = JSON.stringify(data);
  fs.writeFileSync(filepath, data); // overwrite
};
module.exports = { readFile, writeFile };
