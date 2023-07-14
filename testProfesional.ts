import { Profesional } from "./profesional";

let profesional1:Profesional = new Profesional("carlos",34,72,1.89,false,"española",2,"actor")
let profesional2:Profesional= new Profesional("alfredo",24,70,1.75,false,"española",0,"actor")
let profesional3:Profesional= new Profesional("marta",44,70,1.71,true,"española",1,"actor")
let profesional4:Profesional= new Profesional("mario",74,90,1.80,true,"española",0,"actor")
let profesional5:Profesional= new Profesional("marcos",24,70,1.78,false,"española",0,"actor")

console.log(profesional1.valorAtribu());
console.log(profesional2.valorAtribu());
console.log(profesional3.valorAtribu());
console.log(profesional4.valorAtribu());
console.log(profesional5.valorAtribu());

export{profesional1,profesional2,profesional3,profesional4,profesional5}