import express from 'express';
const router = express.Router();

router.use(express.urlencoded({extended:true}))
//Get Homepage
router.get("/", (req, res) => {
    res.render("index.ejs");
  });
  
  router.get("/admin", (req, res) => {
    res.render("admin.ejs");
  });
  
  router.get("/page2", (req, res) => {
    res.render("page2.ejs");
  });
  
  // anakoinwseis
  router.get("/anakoinwseis", (req, res) => {
    res.render("./anakoinwseis/anakoinwseis.ejs");
  });
  
  // agwnes
  router.get("/programma", (req, res) => {
    res.render("./agwnes/programma.ejs");
  });
  
  router.get("/apotelesmata", (req, res) => {
    res.render("./agwnes/apotelesmata.ejs");
  });
  
  router.get("/vathmologies", (req, res) => {
    res.render("./agwnes/vathmologies.ejs");
  });
  
  router.get("/poines", (req, res) => {
    res.render("./agwnes/poines.ejs");
  });
  
  const match = {
    name: 'Match 1',
    pitch: 'Pitch A',
    date: '2024-05-21',
    time: '14:00',
    referee: 'Referee 1',
    result: '2-1'
  };

  const matches = [];
  matches.push(match);
  matches.push(match);
  
  router.get("/diorganwseis", (req, res) => {
    res.render("./agwnes/diorganwseis.ejs",  {matches: matches});
  });
  
  router.get("/statistika", (req, res) => {
    res.render("./agwnes/statistika.ejs");
  });
  
  // genika
  router.get("/ghpeda", (req, res) => {
    res.render("./genika/ghpeda.ejs");
  });
  
  router.get("/podosfairistes", (req, res) => {
    res.render("./genika/podosfairistes.ejs");
  });
  
  router.get("/swmateia", (req, res) => {
    res.render("./genika/swmateia.ejs");
  });
  
  router.get("/entypa", (req, res) => {
    res.render("./genika/entypa.ejs");
  });
  
  router.get("/deltio", (req, res) => {
    res.render("./genika/deltio.ejs");
  });
  
  router.get("/diaithsia", (req, res) => {
    res.render("./genika/diaithsia.ejs");
  });
  
  router.get("/kanonismoi", (req, res) => {
    res.render("./genika/kanonismoi.ejs");
  });
  
  router.get("/epitropes", (req, res) => {
    res.render("./genika/epitropes.ejs");
  });
  
  router.get("/login", (req, res) => {
    res.render("./login.ejs");
  });
  
  router.get("/register", (req, res) => {
    res.render("./register.ejs");
  })
  
  router.post("/register", async(req, res)=>{
    const email = req.body.username;
    const password = req.body.password;
  
    const result = await db.query(
      "INSERT INTO person (name) VALUES ('Nicolas'); SELECT lastval(); INSERT INTO administrator (id, email, password_hash) VALUES (lastval(), $1, $2);",
      [email, password]
    )
    console.log(result);
    res.redirect("/");
  })
  
  router.post("/login", async(req, res)=>{
    // login logic here
  })
  
  
  router.post("/login", async(req, res)=>{
    const email = req.body.username;
    const password = req.body.password;
  
  });

  let diorganwseisFilter =  function(req,res) {
    const startDate  = req.query.startDate;
    const endDate = req.query.endDate;
    const kathgoria = req.query.kathgoria;
    const agwnistikh = req.query.agwnistikh;
    console.log(startDate);
    res.render('./agwnes/diorganwseis', {matches:matches});
  }

  router.route('/diorganwseis-filter').get(diorganwseisFilter);

  export default router;