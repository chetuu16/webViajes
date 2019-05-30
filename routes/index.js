var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    ciudades: [{
        nombre: 'Mykonos',
        oferta: '90',
        precio: '359',
        img: 'http://lorempixel.com/400/350/city'
      },
      {
        nombre: 'London',
        oferta: '75',
        precio: '729',
        img: 'http://lorempixel.com/400/350/city'
      },
      {
        nombre: 'Dublin',
        oferta: '35',
        precio: '519',
        img: 'http://lorempixel.com/400/350/city'
      },
      {
        nombre: 'Paris',
        oferta: '65',
        precio: '329',
        img: 'http://lorempixel.com/400/350/city'
      },
      {
        nombre: 'Amsterdam',
        oferta: '95',
        precio: '199',
        img: 'http://lorempixel.com/400/350/city'
      },
      {
        nombre: 'Rome',
        oferta: '50',
        precio: '659',
        img: 'http://lorempixel.com/400/350/city'
      }
    ]
  });
});

module.exports = router;