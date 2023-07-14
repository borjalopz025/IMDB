const fs = require('fs');
var readlineSync = require('readline-sync');
import { Imdb } from "./imdb";
import { Movie } from "./movie";
import { Profesional } from "./profesional";



let name = readlineSync.question("ingrese su nombre:  ")
let edad = readlineSync.questionInt("ingrese su edad:  ")
let peso= readlineSync.questionInt("ingrese su peso  ")
let altura = readlineSync.questionInt("ingrese su altura:  ")
let estaRetirado =readlineSync.keyInYN("esta usted retirado:  ")
let nacionalidad = readlineSync.question("cual es su nacionalidad:  ")
let numeroDeOscars = readlineSync.questionInt("tiene algun Oscar:  ")
let profesion= readlineSync.question("cual es su profesion:  ")



let profesional: Profesional = new Profesional(name, edad,peso,altura,estaRetirado,nacionalidad,numeroDeOscars,profesion)

// let pelicula = new Movie("el barco con ruedas",2000,"china","accion - comedia")


let pelicula:Movie = new Movie("el barco con ruedas",2000,"china","accion - comedia") 
let pelicula2:Movie = new Movie("pensamientos de un kiwi",2022,"españa","suspense") 
let pelicula3:Movie = new Movie("sucesos en urgencias",2006,"E.E.U.U","romantica") 
let pelicula4:Movie = new Movie("gafas sin cristales",2018,"francesa","suspense")



let peliculasImdb =[pelicula,pelicula2,pelicula3,pelicula4]
let dvd : Imdb =new Imdb()
dvd.peliculas = peliculasImdb
dvd.obtenerInstanciaIMDB("imdbBBDD.json")
// dvd.peliculas[0].actors.push(profesional)
console.log(dvd.peliculas[0]);
for (let i =0; i <dvd.peliculas.length; i++){
    dvd.peliculas[i].actors.push(profesional)
    console.log( dvd.peliculas[i].actors.push(profesional));
    
}




let dato =fs.readFileSync("imdbBBDD",JSON.stringify(pelicula) ,"utf8")
JSON.parse("imdbBBDD,json",dato)
