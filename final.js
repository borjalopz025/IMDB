"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require('fs');
var readlineSync = require('readline-sync');
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
console.log(profesional);
var peli = new movie_1.Movie("vida eterna", 1996, "japonesa", "drama");
peli.actors = [profesional];
console.log(peli.actors);
console.log(peli);
// let pelicula:Movie = new Movie("el barco con ruedas",2000,"china","accion - comedia") 
// let pelicula2:Movie = new Movie("pensamientos de un kiwi",2022,"españa","suspense") 
// let pelicula3:Movie = new Movie("sucesos en urgencias",2006,"E.E.U.U","romantica") 
// let pelicula4:Movie = new Movie("gafas sin cristales",2018,"francesa","suspense")
// let peliculasImdb =[pelicula,pelicula2,pelicula3,pelicula4]
// let dvd : Imdb =new Imdb()
// dvd.peliculas = peliculasImdb
// dvd.obtenerInstanciaIMDB("imdbBBDD.json")
// // dvd.peliculas[0].actors.push(profesional)
// console.log(dvd.peliculas[0]);
// for (let i =0; i <dvd.peliculas.length; i++){
//     dvd.peliculas[i].actors.push(profesional)
//     console.log( dvd.peliculas[i].actors.push(profesional));
// }
// let dato =fs.readFileSync("imdbBBDD",JSON.stringify(pelicula) ,"utf8")
// JSON.parse("imdbBBDD,json",dato)
