import { Profesional } from "./profesional"
import { profesional1, profesional2, profesional3 } from "./testProfesional"

export class Movie 
{
    public title: string
    public releaseYear: number
    public actors: Profesional[]
    public nacionality: string
    public director: Profesional
    public writer: Profesional
    public language: string
    public plataforma: string
    public isMCU: boolean
    public mainCharacterName: string
    public producer: string
    public distributor: string
    public genre: string

    constructor(til:string, rel:number, nac:string, gen:string)
    {
        this.title = til;
        this.releaseYear = rel;
        this.actors ;
        this.nacionality = nac;
        this.director ;
        this.writer ;
        this.language;
        this.plataforma;
        this.isMCU ;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre = gen;
    }

    mostrarAtribu():string
    {
        return `title  -  ${this.title},
                releaseYear  -  ${this.releaseYear},
                nacionality  -  ${this.nacionality},
                genre  -  ${this.genre},
                actor  -  ${profesional1.valorAtribu()},
                director  -  ${profesional2.valorAtribu()}
                writer  -  ${profesional3.valorAtribu()},
                language  -  ${this.language},
                plataforma  -  ${this.plataforma},
                isMCU  -  ${this.isMCU},
                mainCharacterName  -  ${this.mainCharacterName},
                producer  -  ${this.producer},
                distributor  -  ${this.distributor},
               `
    }

}
