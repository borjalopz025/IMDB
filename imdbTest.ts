import { Imdb } from "./imdb";
import { Movie } from "./movie";


let pelicula:Movie = new Movie("el barco con ruedas",2000,"china","accion - comedia") 
let pelicula2:Movie = new Movie("pensamientos de un kiwi",2022,"españa","suspense") 
let pelicula3:Movie = new Movie("sucesos en urgencias",2006,"E.E.U.U","romantica") 
let pelicula4:Movie = new Movie("gafas sin cristales",2018,"francesa","suspense")
let peliculasImdb =[pelicula,pelicula2,pelicula3,pelicula4]
let dvd:Imdb=new Imdb()
console.log(dvd);
dvd.peliculas = peliculasImdb
