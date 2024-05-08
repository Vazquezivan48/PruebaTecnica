const express = require('express');
const conectarDB=require('./config/db');
const cors = require('cors');

// Se crea el servidor
const app= express();

//conectamos a la base
conectarDB();
//Habilitamos la conexión cors
app.use(cors());

//Habilitamos la recepción de json
app.use(express.json());

//Creamos la ruta desde donde obtendremos la información
app.use('/api/productos', require('./routes/producto'));

//habilitamos el puerto desde el cual se obtendrá repsuesta
app.listen(4000,()=>{
})