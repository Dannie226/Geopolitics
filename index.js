const express = require("express");
const path = require("path");

const app = express();

const options = {
    root: path.join(__dirname)
}

app.get("/*", function(req, res) {
    res.sendFile("." + req.url, options);
});

app.listen(8080, () => {
    console.log("Server on localhost:8080");
});