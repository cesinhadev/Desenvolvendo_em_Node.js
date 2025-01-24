const express = require("express");
const positionRouter = require("./routes/position");

const app = express();

app.use("/positionclear", positionRouter);
app.listen(8000);
