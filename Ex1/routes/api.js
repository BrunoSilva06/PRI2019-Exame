var express = require('express');
var router = express.Router();
var Obra = require('../controllers/obra')



/* GET home page. */
router.get('/obras', function(req, res, next) {
     if(req.query.by){
        Obra.listarBy(req.query.by)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else {
        Obra.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
});


router.get('/obras/:id', function(req, res, next) {
    Obra.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});


router.get('/obrasQuant', function(req, res, next) {
    Obra.listaObras()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});


router.get('/compositores', function(req, res, next) {
    Obra.listaCompositores()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});


module.exports = router;
