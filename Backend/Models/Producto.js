const mongoose = require('mongoose');
//Se crea el modelo del producto que obtendremos de la base de datos
const ProductoSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    imagen:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    colores:{
        type:Array,
        required:true
    }
})

//Realizamos la exportación
module.exports=mongoose.model('Producto',ProductoSchema);