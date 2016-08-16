const mongoose = require('mongoose');

let burgerSchema = new mongoose.Schema({
  name: String,
  weight: Number,
  meat: String,
  cheese: String
});

let Burger = mongoose.model('Burger', burgerSchema)

module.exports = Burger;
