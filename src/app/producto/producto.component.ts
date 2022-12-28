import { Component, OnInit } from '@angular/core';
import { Globals } from '../Globals';
import { Producto } from '../interfaces/Producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{
  productos : Producto[] = [];
  public producto : Producto;

  productoDialog : boolean = false;
  submitted: boolean;

  constructor(private productoService : ProductoService,
              private globals : Globals){}

  dgProducto(){
    this.producto = {} as Producto;
    this.productoDialog = !this.productoDialog;
  }

  ngOnInit(){
    this.traerProductos();
  }

  traerProductos() {
    this.productoService.obtenerInventario().subscribe(
      (response : Producto[]) => {
        this.productos = response as Producto[];
      },err => {
        this.globals.toastMessageWarn('Producto',err.error.mensaje);
      }
    )
  };

  crearProducto(){
    this.submitted = true;
    this.productoService.create(this.producto).subscribe(
      (response : any) => {
        this.productos.push(response.producto);
        this.globals.toastMessageSucces('Producto','Producto creado con exito');
        this.productoDialog = !this.productoDialog;
      }
    )
  }

}
