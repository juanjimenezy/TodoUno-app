import { Producto } from "./Producto";

export interface Factura{
    id : number;
    producto : Producto;
    cantidad : number;
    valorUnitario : number;
    valorTotal : number;
}