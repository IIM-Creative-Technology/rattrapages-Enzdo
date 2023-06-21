const express = require("express");
const { connect } = require("./database/connect");
const routerrestaurants = require("./requetes/restaurant");
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/moogooapi", routerrestaurants);

connect("mongodb://localhost:27017/", (erreur) => {
  if (erreur) {
    console.log("Erreur lors de la connexion à la base de données");
    process.exit(-1);
  } else {
    console.log("Connexion avec la base de données reussite et attente des requetes sur le port 3001");
    app.listen(3001);
  }
});
