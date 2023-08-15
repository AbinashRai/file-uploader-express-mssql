const express = require("express");
const multer = require("multer");
const fs = require("fs");

const app = express();

const uploader = multer({
  storage: multer.memoryStorage(),
});

app.post("/upload", uploader.single("file"), async (req, res) => {
  const file = req.file;

  fs.writeFileSync(__dirname + "/" + file.originalname, file.buffer);

  res.status(200).json({
    status: "ok",
  });
});

app.listen(8000, () => {
  console.log("Server has been started");
});
