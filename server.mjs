import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/page1", (req, res) => {
  res.render("page1.ejs");
});

app.get("/page2", (req, res) => {
  res.render("page2.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
