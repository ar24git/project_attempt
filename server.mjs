import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "123456strong",
  port: 5432,
});
db.connect();
let user=[];
db.query("SELECT * FROM users",(err,res)=>{
  if(err){
    console.log(err.stack);
  }else {user = res.rows;
  console.log(user);
  }}
);


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

const dataToInsert = {
  password: 'Jwerw',
  email: 'jowewh22n@example.com',
  secret: "werw",
};
// ,[dataToInsert.email,dataToInsert.password,dataToInsert.secret]  ($1,$2,$3)
// insert
app.post("/page1",async (req,res)=>{
  const input = req.body["fname"]
  console.log(input);
  // πολύ προσοχή στα queries ακόμα και τα εισαγωγικά μετράνε
  const result = await db.query(
  `INSERT INTO users (email,password,secret) VALUES ($1,$2,$3)  RETURNING *`,[dataToInsert.email,dataToInsert.password,dataToInsert.secret],(err, result) => {
    if (err) {
      console.error('Error executing query', err);
      // Handle error
    } else {
      console.log('Data inserted successfully:', result.rows[0]);
      // Handle success
    }
  });
  
  console.log(input);
  res.redirect("/page1");
});






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
