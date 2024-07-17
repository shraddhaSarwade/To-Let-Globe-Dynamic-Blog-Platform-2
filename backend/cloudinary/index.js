// Configuration for Cloudinary Access Through Multer

// Requiring necessary packages
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

// Defining the Clodinary Config Parameters from .env file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Setting up Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "To-Let-Globe-Dynamic-Blog",
    allowedFormats: ["jpeg", "jpg", "png", "webp"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
