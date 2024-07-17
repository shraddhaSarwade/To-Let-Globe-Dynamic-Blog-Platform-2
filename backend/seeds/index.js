// File for Seeding Databse With Intial Blog Data
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const blog_seed_data = require("./seed_data");
const Blog = require("../models/blogs");
const User = require("../models/user");
const mongoose = require("mongoose");

const mongoDBURL = process.env.DB_URL;

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to database..");
  })
  .catch((err) => {
    console.log("Error connecting to the database..", err);
  });

const seedDB = async () => {
  await Blog.deleteMany({});
  await User.deleteMany({});

  for (let i = 0; i < blog_seed_data.length; i++) {
    const blog = new Blog({
      title: blog_seed_data[i].title,
      author: blog_seed_data[i].author,
      content: blog_seed_data[i].content,
      image: blog_seed_data[i].image,
      date: blog_seed_data[i].date,
      role: blog_seed_data[i].role,
      category: blog_seed_data[i].category,
      views: blog_seed_data[i].views,
      likes: blog_seed_data[i].likes,
      intro: blog_seed_data[i].intro,
    });
    await blog.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
  console.log("Data seeded and connection closed..");
});
