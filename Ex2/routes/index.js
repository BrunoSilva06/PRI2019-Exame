var express = require('express');
var router = express.Router();
var axios = require('axios');

// apiKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ

/* GET home page. */
router.get('/', function(req, res) {
  axios.get('http://clav-api.dglab.gov.pt/api/legislacao?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(resposta => res.render('index', {lista: resposta.data}))
      .catch(erro => {
          res.render('error', {title: 'Erro', error: erro, message: ''})
      });
});

router.get('/legislacao/:cid', (req, res) => {
  axios.get('http://clav-api.dglab.gov.pt/api/legislacao/' + req.params.cid + '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(resposta => {
          var tipo = resposta.data;
          axios.get('http://clav-api.dglab.gov.pt/api/legislacao/' + req.params.cid + '/processos' +  '?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
              .then(resposta2 =>res.render('diploma', {lista: tipo, processos: resposta2.data}))
              .catch(erro => res.render('error', {title: 'Erro', error: erro, message: ''}))
      })
      .catch(erro => {
          res.render('error', {title: 'Erro', error: erro, message: ''});
      });
});


module.exports = router;
