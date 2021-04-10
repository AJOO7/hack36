const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const multer = require("multer");
const read = require("./read.js");
const selenium = require("./putDSattendence.spec.js");
const root = path.join(__dirname, "public");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname));
    },
    filename: function (req, file, cb) {
        cb(null, "data.csv");
    },
});
var upload = new multer({ storage: storage });

app.use(upload.any());
app.use(express.static(root));


app.listen(port, function (err) {
    if (err) {
        console.log("ERROR while launching the page!!");
    }
    console.log("The server is up and running on port:: ", port);
})