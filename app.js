const express = require("express");
const app = express();
const mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mycats",
});

const port = 3000;

let myCats = [
  {
    name: "Campari",
    color: "Ginger",
    age: 10.5,
    favorit_food: "Everything",
  },
  {
    name: "Sansana",
    color: "Black & White",
    age: 14,
    favorit_food: "Chicken and cats snacks",
  },
  {
    name: "Shain",
    color: "Gray & White",
    age: 12,
    favorit_food: "Tuna",
  },
  {
    name: "Bisi",
    color: "Light gray",
    age: 3,
    favorit_food: "Cats dry food",
  },
];

let insertInto = `INSERT INTO cats_name (\`name\`, \`color\`, \`age\`, \`favorit_food\`)
    VALUES`;
let msg = "";

myCats.forEach((cat, index) => {
  let comma = index === myCats.length - 1 ? ";" : ",";
  msg += `("${cat.name}", "${cat.color}", ${cat.age}, "${cat.favorit_food}")${comma}`;
});

let theQuery = insertInto + msg;

let insertValues = () => {
  let insertCat = theQuery;

  connection.query(insertCat, (err, result) => {
    if (err) console.log(err);
    console.log(result);
  });
};

insertValues();

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
