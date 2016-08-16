var express = require('express');
var router = express.Router();

let Burger = require('../models/burger');

router.get('/', (req, res) => {
  Burger.find({}, (err, burgers) => {
    if(err) {
      res.status(400).send(err);
    } else {
      res.send(burgers);
    }
    });
  });

  router.get('/:id', (req, res) => {
    Burger.findById(req.params.id, (err, burger) => {
      if(err || !burger) {
        res.status(400).send(err || 'Burger not found.')
      } else {
        res.send(burger);
      }
    });
  });

  router.put('/:id', (req, res) => {
    Burger.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, burger) => {
      if(err || !burger) {
        res.status(400).send(err || 'Burger not found.')
      } else {
        res.send(burger);
      }
    });
  });

  router.delete('/:id', (req, res) => {
    Burger.findByIdAndRemove(req.params.id, (err, burger) => {
      if(err || !burger) {
        res.status(400).send(err || 'Burger not found.')
      } else {
        res.send();
      }
    });
  });


  router.post('/', (req, res) => {
    let burger = new Burger(req.body);

    burger.save((err, savedBurger) => {
      res.status(err ? 400 : 200).send(err || savedBurger);
    })
  });


module.exports = router;
