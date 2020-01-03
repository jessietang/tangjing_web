// 创建一个长度为10字节以0填充的Buffer
const buf1 = Buffer.alloc(10);
const buf1_1 = Buffer.alloc(2);
console.log(buf1);
console.log(buf1_1);

// 创建一个Buffer
const buf2 = Buffer.from("创");
const buf3 = Buffer.from("造");
console.log("buf2", buf2);
console.log("buf3", buf3);
console.log(Buffer.concat([buf2, buf3]).toString("utf8"));
