require("dotenv").config();
const express = require("express");
const handleError = require("./helpers/handleError");
const routes = require("./routes");

const { PORT } = process.env;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

// Middleware de gestion d'erreur
app.use(handleError);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});