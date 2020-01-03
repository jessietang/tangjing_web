const fs = require("fs");
// const data = fs.readFileSync("./app.js");
// console.log(Buffer.from(data).toString());

// fs常常搭配path api使用
// const path = require("path");
// console.log("__dirname1", __dirname); // /Users/mac/project/tangjing_web/node/01/api
// // 从后向前，若字符以 / 开头，不会拼接到前面的路径(因为拼接到此已经是一个绝对路径)；若以 ../ 开头，拼接前面的路径，且不含最后一节路径；若以 ./ 开头 或者没有符号 则拼接前面路径；
// console.log("__dirname2", path.resolve(__dirname, "./app.js")); // /Users/mac/project/tangjing_web/node/01/api/app.js
// console.log("__dirname3", path.resolve(__dirname, "/app.js")); // 字符以 / 开头，不会拼接到前面的路径: /app.js
// console.log("__dirname4", path.resolve(__dirname, "../app.js")); // /Users/mac/project/tangjing_web/node/01/app.js
// console.log("__dirname5", path.resolve(path.resolve(__dirname, "./app.js"))); // /Users/mac/project/tangjing_web/node/01/api/app.js
// fs.readFile(path.resolve(path.resolve(__dirname, "./app.js")), (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   console.log(Buffer.from(data).toString());
//   console.log(Buffer.from(data).toString("utf-8"));
// });

// promisify
// const { promisify } = require("util");
// const readFile = promisify(fs.readFile);
// readFile("./conf.js").then(data => {
//   console.log(data);
//   console.log(Buffer.from(data).toString());
// });

// fs Promises API node v10
// const fsp = require("fs").promises;
// fsp
//   .readFile("./conf.js")
//   .then(data => console.log("data: \n", data))
//   .catch(err => console.log("err:", err));

// async/await
// (async () => {
//   const fs = require("fs");
//   const { promisify } = require("util");
//   const readFile = promisify(fs.readFile);
//   const data = await readFile("./index.html");
//   console.log("data:", Buffer.from(data).toString());
// })();
