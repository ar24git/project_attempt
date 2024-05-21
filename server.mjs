import express from "express";


//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"));

import routes from './routes/local-championship-routes.mjs';
app.use('/', routes);

app.listen(port,  () => {
  console.log(`Server is running on port ${port}`);
});
