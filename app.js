require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const cors = require('cors');

const { PORT } = process.env;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});