const fs = require("fs");
// 创建输入输出流
const rs2 = fs.createReadStream("./img.png"); // 输入流
const ws2 = fs.createWriteStream("./img3.png"); // 输出流
// 所有的流都有一种公有方法，它会像管道一样处理流的数据，这便是pipe
// pipe函数需要将源头src并将数据输出到一个可写的流dst中: src.pipe(dst)
// pipe将会返回dst,所以我们希望可以链式调用将多个流用管道连接起来: a.pipe(b).pipe(c).pipe(d)
rs2.pipe(ws2);
