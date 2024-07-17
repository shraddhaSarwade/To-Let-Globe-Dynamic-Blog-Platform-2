// requiring the Packages

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Blog = require("./models/blogs");
const User = require("./models/user");
const methodOverride = require("method-override");
const bcrypt = require("bcrypt");
const session = require("express-session");
const multer = require("multer");
const cors = require("cors");
const { storage } = require("./cloudinary");

// // Defining the MongoDB Atlas URL
const mongoDBURL = process.env.DB_URL;
// const mongoDBURL = "mongodb://localhost:27017/To-Let-Globe-Blogs";

// Setting up the Database Connection
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to database..");
  })
  .catch((err) => {
    console.log("Error connecting to the database..", err);
  });

// Specfying Multer Storage to Cloudinary Storage Settings
const upload = multer({ storage });

// Middlewares Specified
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors(
    {
      origin: true, // Adjust this to match your React frontend URL
      credentials: true,
    } // Enable credentials (cookies, authorization headers)
  )
);
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "ABCD1234",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true if using HTTPS
      httpOnly: true, // Helps mitigate XSS attacks
      maxAge: 24 * 60 * 60 * 1000, // Session expires in 1 day
    },
  })
);

// Route for Getting all Blogs Data
app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

// Route for Registering
app.post("/register", async (req, res) => {
  const { username, password, role } = req.body;

  // bcrypt to hash the password
  const hash = await bcrypt.hash(password, 12);
  const newUser = new User({ username: username, password: hash, role: role });
  await newUser.save();

  //Adding the Session Variables for Session Tracking
  req.session.user_id = newUser._id;
  req.session.user_name = newUser.username;
  req.session.user_role = newUser.role;
  req.session.save((err) => {
    if (err) {
      console.log(err);
      res.send("Error saving session");
    } else {
      console.log(req.session);
      res.json({ isRegiter: true });
    }
  });
});

// Route for Logging In
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  if (!user) {
    res.json({ isLogin: false });
  } else {
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      req.session.user_id = user._id;
      req.session.user_name = user.username;
      req.session.user_role = user.role;
      req.session.save((err) => {
        if (err) {
          console.log(err);
          res.send("Error saving session");
        } else {
          console.log(req.session);
          res.json({ isLogin: true });
        }
      });
    } else {
      console.log("Error");
      res.json({ isLogin: false });
    }
  }
});

// Route to Check Log In Status
app.post("/logInStatus", (req, res) => {
  console.log(req.session.user_id);
  if (req.session.user_id) {
    res.json({ isLoggedIn: true });
  } else {
    res.json({ isLoggedIn: false });
  }
});

// Route to Check If User is auth to create blog
app.post("/createBlog/auth", async (req, res) => {
  if (
    (req.session.user_id && req.session.user_role === "content-creator") ||
    (req.session.user_id && req.session.user_role === "admin")
  ) {
    res.json({ isAuth: true });
  } else {
    res.json({ isAuth: false });
  }
});

// Route to create new blog
app.post("/blogs/new", upload.single("image"), async (req, res) => {
  const dataWithCloudinaryImgUrl = { ...req.body, image: req.file.path };
  const newBlog = new Blog(dataWithCloudinaryImgUrl);
  await newBlog.save();
  res.send("success");
});

// Route to update views a Specfic blog
app.post("/blogs/updateViews/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBlog = await Blog.findByIdAndUpdate(id, req.body);
  res.send("success");
});

// Route to Update the Likes of blog
app.post("/blogs/updateLikes/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBlog = await Blog.findByIdAndUpdate(id, req.body);
  res.send("success");
});

// Route to get details of Specific Blog
app.get("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  res.json(blog);
});

// Route to get all user data
app.post("/getuserdata", (req, res) => {
  res.json({ username: req.session.user_name, role: req.session.user_role });
});

//Route to Destroy Session and Logout
app.post("/logout", (req, res) => {
  req.session.destroy();
  res.send("Logged Out");
});

// Starting the App
app.listen(4000, () => {
  console.log("Serving on port 4000..");
});
