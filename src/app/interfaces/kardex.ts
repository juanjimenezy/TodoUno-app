import { Producto } from "./Producto";

export interface Kardex {
    id : number;
    tipoOperacion : string;
    producto : Producto;
    descripcion : string;
    cantidad : number;
    valor : number;
    fecha : Date;
}