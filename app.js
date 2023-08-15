const express = require("express");
const multer = require("multer");
const fs = require("fs");

const app = express();

const uploader = multer({
  storage: multer.memoryStorage(),
});

app.post("/upload", uploader.single);
