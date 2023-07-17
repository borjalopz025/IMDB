import { isUtf8 } from "buffer";
import { Movie } from "./movie";
const fs = require('fs');

export class Imdb
{
    public peliculas : Movie [];

    constructor()
    {
        this.peliculas = [];
    }

    escribirEnFicheroJSON(nombreFichero: string)
    {
        let crearJson = JSON.stringify(this.peliculas)
        fs.writeFileSync(nombreFichero, crearJson)
    }

    obtenerInstanciaIMDB(nombreFichero:string):Imdb
    {
        let dato =fs.readFileSync(nombreFichero ,"utf8")
        let obj=JSON.parse(dato)
        return obj
    }


}











// let objImdb = JSON.stringify(dvd)

// fs.writeFileSync("imdbBBDD.json",objImdb)

// let data = fs.readFileSync("imdbBBDD.json", "utf8")

// console.log(data);

// let insImdb = JSON.parse(data)

// console.log(insImdb);








