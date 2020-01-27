var mongoose = require('mongoose')

instrumentoSchema = mongoose.Schema({

    designacao: String,
    partitura: String,
    _voz: String,
    _type: String,
    _path: String
})



obraSchema = mongoose.Schema({

    titulo: String,
    tipo: String,
    compositor: String,
    instrumentos: [instrumentoSchema],
    _id: String
})

module.exports = mongoose.model('obras', obraSchema);