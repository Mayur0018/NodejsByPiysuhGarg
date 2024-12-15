const fs = require("fs");

// sync bloking request 
// fs.writeFileSync("./text.txt","hellow World")


// Aync Non Blocking Request

fs.writeFile("./text.txt","hellow World",(err)=> {});

const result = fs.readFileSync("./Contect.txt","utf-8")


console.log(result);