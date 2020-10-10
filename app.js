const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("This is my first node.js project :)")
})

app.listen(process.env.PORT || 3000);