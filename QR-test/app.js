const express = require("express");
const path = require("path");

const app = express();


app.use(express.static(path.join(__dirname))); // Serve other static files

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = 3000;
app.listen(port, () => console.log(`Server is listening on port: ${port}...`));
