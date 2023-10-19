const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config();

// express app
const app = express();

mongoose
  .connect(process.env.URI)
  .then((result) => {
    console.log("connected to db");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

//register view engines
app.set("view engine", "ejs");

//middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//blog routes
app.use('/blogs',blogRoutes)

//404 Page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

