require("dotenv").config();

const express = require("express");
const app = express();

//async errors

const connectDB = require('./db/connect')

const notFoundMiddleWare = require("./middleware/not-found");
const errorMiddleWare = require("./middleware/error-handler");

//middleware
app.use(express.json());

//roots

app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v1/products">Products Route</a>`);
});



// products route

app.use(notFoundMiddleWare);
app.use(errorMiddleWare);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port:${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
