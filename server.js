const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req,res) => {
    res.send("success!!")
});

app.listen(port, () => {console.log(`server is running on port ${port}`)})