console.log("hello node..");

const os = require("os");
const mem = (os.freemem() / os.totalmem()) * 100;
console.log(`内存占用率${mem}%`);

// 同级cpu占用率，先安装 npm i cpu-stat -s
const cpuStat = require("cpu-stat");
const util = require("util");
const getCpu = util.promisify(cpuStat.usagePercent);
// getCpu().then(
//     percent => {
//         console.log(`CPU占用：${percent.toFixed(2)}%`)
//     }
// )
const showState1 = async () => {
  const mem = (os.freemem() / os.totalmem()) * 100;
  const percent = await getCpu();
  console.log(`showState1---CPU占用:${percent.toFixed(2)}% 内存占用: ${mem}`);
};

// showState1();

// module.exports = { showState1 };
module.exports.showState = showState1;
