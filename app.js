const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
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

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/blogs", (req, res) => {
  console.log(req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

app.get('/blogs/:id',(req,res) =>{
  const id = req.params.id;
  Blog.findById(id)
  .then((result) =>{
    res.render('details',{blog: result , title:'Blog Details'})
  })
  .catch((err) =>{
    console.log(err);
  })
})  

app.delete('/blogs/:id',(req,res) =>{
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
  .then(result=>{
    res.json({ redirect:'/blogs' })
  })
  .catch((err) =>{
    console.log(err);
  })
})

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

