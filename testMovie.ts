import { Movie } from "./movie";
import { Profesional } from "./profesional";


let profesional1:Profesional = new Profesional("carlos",34,72,1.89,false,"española",2,"actor")
let profesional2:Profesional= new Profesional("alfredo",24,70,1.75,false,"española",0,"actor")
let profesional3:Profesional= new Profesional("marta",44,70,1.71,true,"española",1,"actor")
let profesional4:Profesional= new Profesional("mario",74,90,1.80,true,"española",0,"actor")
let escritor:Profesional= new Profesional("marcos",24,70,1.78,false,"española",0,"escritor")
let director:Profesional= new Profesional("juan carrasco",56,90,1.78,false,"española",0,"director")


let pelicula:Movie = new Movie("el barco con ruedas",2000,"china","accion - comedia") 
let pelicula2:Movie = new Movie("pensamientos de un kiwi",2022,"españa","suspense") 
let pelicula3:Movie = new Movie("sucesos en urgencias",2006,"E.E.U.U","romantica") 
let pelicula4:Movie = new Movie("gafas sin cristal",2018,"frances","drama") 

pelicula.director = director
console.log(pelicula);

pelicula2.writer = escritor
pelicula3.actors = [profesional1]

console.log(pelicula.mostrarAtribu());
console.log(pelicula2.mostrarAtribu());
console.log(pelicula3.mostrarAtribu());
// console.log(pelicula4.mostrarAtribu(),profesional4.valorAtribu());
console.log(profesional1.valorAtribu());
console.log(escritor.valorAtribu());
console.log(director.valorAtribu());


