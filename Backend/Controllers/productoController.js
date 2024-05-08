const Producto = require("../Models/producto");

//creamos nuestra función desde la cual obtendremos los productos de la base de datos
exports.obtenerproductos = async (req,res)=>{
    try{
        const productos=await Producto.find();
        res.json(productos);
    }catch(error){
        console.log(error);
        res.status(500).send("Ha ocurrido un error");
    }
}