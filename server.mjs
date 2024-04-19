import express from "express";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 3000;

env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
  })
db.connect();

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

//Get Homepage
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/page1", (req, res) => {
  res.render("page1.ejs");
});

app.get("/page2", (req, res) => {
  res.render("page2.ejs");
});

// anakoinwseis
app.get("/anakoinwseis", (req, res) => {
  res.render("./anakoinwseis/anakoinwseis.ejs");
});

// agwnes
app.get("/programma", (req, res) => {
  res.render("./agwnes/programma.ejs");
});

app.get("/apotelesmata", (req, res) => {
  res.render("./agwnes/apotelesmata.ejs");
});

app.get("/vathmologies", (req, res) => {
  res.render("./agwnes/vathmologies.ejs");
});

app.get("/poines", (req, res) => {
  res.render("./agwnes/poines.ejs");
});

app.get("/diorganwseis", (req, res) => {
  res.render("./agwnes/diorganwseis.ejs");
});

app.get("/statistika", (req, res) => {
  res.render("./agwnes/statistika.ejs");
});

// genika
app.get("/ghpeda", (req, res) => {
  res.render("./genika/ghpeda.ejs");
});

app.get("/podosfairistes", (req, res) => {
  res.render("./genika/podosfairistes.ejs");
});

app.get("/swmateia", (req, res) => {
  res.render("./genika/swmateia.ejs");
});

app.get("/entypa", (req, res) => {
  res.render("./genika/entypa.ejs");
});

app.get("/deltio", (req, res) => {
  res.render("./genika/deltio.ejs");
});

app.get("/diaithsia", (req, res) => {
  res.render("./genika/diaithsia.ejs");
});

app.get("/kanonismoi", (req, res) => {
  res.render("./genika/kanonismoi.ejs");
});

app.get("/epitropes", (req, res) => {
  res.render("./genika/epitropes.ejs");
});

app.get("/login", (req, res) => {
  res.render("./login.ejs");
});

app.get("/register", (req, res) => {
  res.render("./register.ejs");
});

app.post("/register", async(req, res)=>{});
app.post("/login", async(req, res)=>{});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
