// const { showState } = require("./01-run");
// setInterval(showState, 1000);

// 使用仿写的简版Express
const createApplication = require("./09-kexpress")();
createApplication.get("/", (req, res) => {
  res.end("hello, you get me by your own Express! welcome!");
});
createApplication.get("/users", (req, res) => {
  res.end(
    JSON.stringify([
      {
        name: "yuyu",
        age: 26
      }
    ])
  );
});
createApplication.get("/status", (req, res) => {
  res.end(
    JSON.stringify([
      {
        status: "ok",
        message: ""
      }
    ])
  );
});
createApplication.listen(3000);
