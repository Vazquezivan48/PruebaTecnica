const express = require('express');
const router = express.Router();
const productoController=require('../Controllers/productoController');

//creamos la ruta desde donde obtendremos la información del controlador e indicamos que función ejecutaremos
router.get('/', productoController.obtenerproductos);

module.exports=router;