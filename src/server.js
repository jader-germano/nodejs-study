const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const requireDir = require("require-dir")

const app = express();
app.use(express.json());
app.use(cors());
const config = {
    autoIndex: false,
    useNewUrlParser: true,
};

mongoose.connect(
    "mongodb://localhost:27017/nodeapi",
    { config }
);
requireDir("./src/models");

app.use("/api", require("./routes"));

app.listen(3001);