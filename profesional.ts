export class Profesional
{
    public name : string;
    public edad : number;
    public peso : number;
    public altura : number;
    public estaRetirado : boolean;
    public nacionalidad : string;
    public numeroDeOcars : number;
    public profesion : string;

    constructor(n:string, ed:number, pe:number, al:number, re:boolean, nacio:string, num:number, pro:string)
    {
        this.name = n;
        this.edad = ed;
        this.peso = pe;
        this.altura = al;
        this.estaRetirado = re;
        this.nacionalidad = nacio;
        this.numeroDeOcars = num;
        this.profesion = pro;
    }

    valorAtribu():string
    {
        return `name  -  ${this.name}
                edad   -  ${this.edad},
                peso  -  ${this.peso},
                altura  -  ${this.altura},
                estaRetirado  -  ${this.estaRetirado},
                nacionalidad  -  ${this.nacionalidad},
                numeroDeOscars  -  ${this.numeroDeOcars},
                profesion  -  ${this.profesion}`
    }
}


