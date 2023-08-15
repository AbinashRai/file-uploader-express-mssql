const sql = require("mssql/msnodesqlv8");
const express = require("express");
const multer = require("multer");
const fs = require("fs");

const app = express();

const uploader = multer({
  storage: multer.memoryStorage(),
});

var config = {
  server: "ABINASH\\SQLEXPRESS",
  database: "testdb",
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true
  }
};

sql.connect(config,function(err){
    if(err)console.log(err);
    var request = new sql.Request();
    request.query("select * from users", function(err,records){
        if(err)console.log(err);
        else console.log(records);
    })
})
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
