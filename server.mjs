import express from "express";
import env from "dotenv";
env.config();
const app = express();
//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

app.set('view engine', 'ejs');

import routes from './routes/local-championship-routes.mjs';
app.use('/', routes);

const port  = process.env.PORT;
app.listen(port,  () => {
  console.log(`Server is running on port ${port}`);
});
