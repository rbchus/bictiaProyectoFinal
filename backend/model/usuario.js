//  modulos internos

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Esquema

const esquemaUsuario = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    password: String,
    direccion: String,
    idEstado: Number,
    fechaRegistro: {
      type: Date,
      default: Date.now,
    },
  });
  

// generamos el JWT

esquemaUsuario.methods.generateJWT = function () {
    return jwt.sign({
        _id: this.id,
        nombre:this.nombre,
        apellido:this.apellido,
        correo:this.correo,
    },"clave")
};

// creamos los exports 
const Usuario = mongoose.model("usuario", esquemaUsuario);
module.exports.Usuario = Usuario
module.exports.esquemaUsuario = esquemaUsuario;
