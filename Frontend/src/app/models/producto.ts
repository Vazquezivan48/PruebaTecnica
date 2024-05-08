export class Producto{
    _id?:number;
    nombre:string;
    imagen:string;
    precio:number;
    colores:any;

    constructor(nombre:string,imagen:string,precio:number,colores=Array){
        this.nombre=nombre;
        this.imagen=imagen;
        this.precio=precio;
        this.colores=colores;
    }
}