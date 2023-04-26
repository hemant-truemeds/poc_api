const express = require("express");
// const contactRouter = require("./routes/contactRoutes");
// const practiceRouter = require("./routes/practiceRoutes");
// const connectDb = require("./config/dbConnection");
// const errorHandler = require("./middlerwares/errorHandle");
require("dotenv").config({});
const fpJson = require("./constants/fp.json");
const app = express();
const port = 4000;

// db connection
// connectDb();

// middlewares
app.use(express.json());

// routes middlewares
// app.use("/api/contact", contactRouter);
// app.use("/api/practice", practiceRouter);

app.get("/", (req, res) => {
  res.json({ message: "hellow world" });
});

app.get("/poc_json/fp", (req, res) => {
  // res.json({ message: "hellow world" });
  res.json(fpJson);
});

// app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
