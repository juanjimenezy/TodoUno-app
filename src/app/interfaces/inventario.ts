import { Producto } from "./Producto";

export interface Inventario {
    id : number;
    producto : Producto;
    cantidad : number;
}