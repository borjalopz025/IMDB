"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var readlineSync = require('readline-sync');
var imdb_1 = require("./imdb");
var movie_1 = require("./movie");
var profesional_1 = require("./profesional");
var name = readlineSync.question("ingrese su nombre:  ");
var edad = readlineSync.questionInt("ingrese su edad:  ");
var peso = readlineSync.questionInt("ingrese su peso  ");
var altura = readlineSync.questionInt("ingrese su altura:  ");
var estaRetirado = readlineSync.keyInYN("esta usted retirado:  ");
var nacionalidad = readlineSync.question("cual es su nacionalidad:  ");
var numeroDeOscars = readlineSync.questionInt("tiene algun Oscar:  ");
var profesion = readlineSync.question("cual es su profesion:  ");
var profesional = new profesional_1.Profesional(name, edad, peso, altura, estaRetirado, nacionalidad, numeroDeOscars, profesion);
// let pelicula = new Movie("el barco con ruedas",2000,"china","accion - comedia")
var pelicula = new movie_1.Movie("el barco con ruedas", 2000, "china", "accion - comedia");
var pelicula2 = new movie_1.Movie("pensamientos de un kiwi", 2022, "españa", "suspense");
var pelicula3 = new movie_1.Movie("sucesos en urgencias", 2006, "E.E.U.U", "romantica");
var pelicula4 = new movie_1.Movie("gafas sin cristales", 2018, "francesa", "suspense");
var peliculasImdb = [pelicula, pelicula2, pelicula3, pelicula4];
var dvd = new imdb_1.Imdb();
dvd.peliculas = peliculasImdb;
dvd.obtenerInstanciaIMDB("imdbBBDD.json");
// dvd.peliculas[0].actors.push(profesional)
console.log(dvd.peliculas[0]);
for (var i = 0; i < dvd.peliculas.length; i++) {
    dvd.peliculas[i].actors.push(profesional);
    console.log(dvd.peliculas[i].actors.push(profesional));
}
var dato = fs.readFileSync("imdbBBDD", JSON.stringify(pelicula), "utf8");
JSON.parse("imdbBBDD,json", dato);
