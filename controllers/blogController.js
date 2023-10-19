const Blog = require("../models/blog");

//blog_index
const blog_index = (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("./blog/index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
}
//blog_details
const blog_details =  (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("./blog/details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
}
//blog_create_get
 const blog_create_get =  (req, res) => {
  res.render("./blog/create", { title: "Create A New Blog"});
}
//blog_create_post
const blog_create_post = (req, res) => {
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
}
//blog_delete
const blog_delete =  (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete
}
