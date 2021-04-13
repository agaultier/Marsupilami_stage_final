const express = require('express');
const app = express();
const marsuRoute = express.Router();
// Marsu model
let Marsu = require('../models/Marsu');

// Add marsu
marsuRoute.route('/create').post((req, res, next) => {
  Marsu.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All marsu
marsuRoute.route('/').get((req, res) => {
  Marsu.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single marsu
marsuRoute.route('/read/:id').get((req, res) => {
  Marsu.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update marsu
marsuRoute.route('/update/:id').put((req, res, next) => {
  Marsu.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete marsu
marsuRoute.route('/delete/:id').delete((req, res, next) => {
  Marsu.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = marsuRoute;