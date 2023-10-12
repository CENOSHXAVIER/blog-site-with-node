const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express app
const app = express();

//connect to mongo db
const dbURI =
  "mongodb+srv://netninja:imnetninja@phantom-blog.pt10fvr.mongodb.net/Phantom-blog?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("connected to db");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

//register view engines
app.set("view engine", "ejs");

//middleware & static files
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect('/blogs');
});

app.get("/blogs",(req,res)=> {
  Blog.find()
    .then((result)=>{
      res.render('index',{title:"All Blogs",blogs:result})
  })
    .catch((err)=>{
      console.log(err);
    })
  
})

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
