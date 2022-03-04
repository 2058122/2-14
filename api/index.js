/*
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

// app.listen(3000, function () {
// });
process.env.NOW_REGION ? (module.exports = app) : app.listen(PORT); // Vercel用
*/

//POSTだけできない
const express = require("express");
const app = express();
//const PORT = process.env.PORT || 3000; //Heroku用
const bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World(*'▽')");
  res.json({ message: "こちらはルートパスです(V)o￥o(V)" });
});
app.get("/api/get/", (req, res) => {
  res.send("Hello World(*'▽')/api/getからやで");
});
app.use(bodyParser.json());
app.post("/api/post", (req, res) => {
  console.log(req.body);
  res.send("POSTされたデータを取得できました");
});
//ローカル用サーバ
app.listen(3000, () => {
  console.log("Application started");
});
//process.env.NOW_REGION ? (module.express = app) : app.listen(PORT); //Heroku用
