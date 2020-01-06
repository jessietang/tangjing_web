// 体验express
const express = require("express");
const fs = require("fs");
const app = express();
app.get("/", (req, res) => {
  //   res.end("hello world!");
  fs.readFile("index.html", (err, data) => {
    console.log("err", err);
    if (err) {
      res.writeHead(500, {
        "Content-Type": "text/plain;charset=utf-8"
      });
      return;
    }
    res.end(data);
  });
});
app.get("/users", (req, res) => {
  res.end(
    JSON.stringify([
      {
        name: "jessie",
        age: 26
      }
    ])
  );
});
app.listen(3000, () => {
  console.log("example app listen at 3000");
});
