const { ObjectID } = require("bson");
const client = require("../database/connect");
const { Restaurant } = require("../class/restaurant");
const express = require("express");

// requete
const ajouterrestaurant = async (req, res) => {
  try {
    const { nom, adresse, codepostal, nombredeplace } = req.body;
    const restaurant = new Restaurant(nom, adresse, codepostal, nombredeplace);
    const result = await client.db().collection("restaurant").insertOne(restaurant);
    res.status(200).json(result);
  } catch (erreur) {
    console.log(erreur);
  }
};

const getMultirestaurants = async (req, res) => {
  try {
    const cursor = client.db().collection("restaurant").find().sort({ nom: 1 });
    const result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result);
    } else {res.status(204).json({ messageRep: "Aucun restaurant trouvé" });}
  } catch (erreur) {
    console.log(erreur);
  }
};

const getrestaurant = async (req, res) => {
  try {
    const id = new ObjectID(req.params.id);
    const cursor = client.db().collection("restaurant").find({ _id: id });
    const result = await cursor.toArray();
    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {res.status(204).json({ messageRep: "Cet restaurant n'existe pas" });}
  } catch (erreur) {
    console.log(erreur);
  }
};

const updaterestaurant = async (req, res) => {
  try {
    const id = new ObjectID(req.params.id);
    const { nom, adresse, codepostal, nombredeplace } = req.body;
    const result = await client.db().collection("restaurant").updateOne(
      { _id: id },
      { $set: { nom, adresse, codepostal, nombredeplace } }
    );

    if (result.modifiedCount === 1) {
      res.status(200).json({ messageRep: "Les modification on était reusite" });
    } else {res.status(404).json({ messageRep: "Ce restaurant n'existe pas" });}
  } catch (erreur) {
    console.log(erreur);
  }
};

const deleterestaurant = async (req, res) => {
  try {
    const id = new ObjectID(req.params.id);
    const result = await client.db().collection("restaurant").deleteOne({ _id: id });
    if (result.deletedCount === 1) {
      res.status(200).json({ messageRep: "Suppresion réussite" });
    } else {res.status(404).json({ messageRep: "Ce restaurant n'existe pas" });}
  } catch (erreur) {
    console.log(erreur);
  }
};

//routing
const router = express.Router();

router.route("/restaurant").post(ajouterrestaurant);
router.route("/restaurant").get(getMultirestaurants);
router.route("/restaurant/:id").get(getrestaurant);
router.route("/restaurant/:id").put(updaterestaurant);
router.route("/restaurant/:id").delete(deleterestaurant);

module.exports = router;
