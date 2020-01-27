var Obra = require('../models/obra')


module.exports.listar = () => {
    return Obra
            .find({},{_id: 1, titulo: 1, compositor: 1, tipo: 1})
            .exec()
}

module.exports.consultar = id => {
    return Obra
            .find({_id: id})
            .exec()
}


module.exports.listaCompositores = () =>{
    return Obra
            .distinct('compositor')
            .exec()
}



module.exports.listaObras = () => {
    return Obra
            .aggregate([{$unwind: "$instrumentos.instrumento"},{$project: {_id: 1, titulo: 1, partitura: 1}}])
            .exec()
}


module.exports.listarBy = q => {
    return Obra
            .find({$or: [{compositor: q},{"instrumentos.instrumento.designacao" : q}]},{_id: 1, titulo: 1})
            .exec()
}



