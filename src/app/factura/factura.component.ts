import { Component, OnInit } from '@angular/core';
import { Factura } from '../interfaces/factura';
import { FacturaService } from './factura.service';
import { Producto } from '../interfaces/Producto';
import { ProductoService } from '../producto/producto.service';
import {MessageService} from 'primeng/api';
import { Globals } from '../Globals';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit{
  factura : Factura;
  facturas : Factura[] = [];
  productos : Producto[] = [];
  facturaDialog : boolean;

  constructor(private facturaService : FacturaService, 
              private productoService : ProductoService,
              private globals : Globals){}

  ngOnInit(): void {
    this.traerFacturas();
  };

  fDialog(){
    this.factura = {} as Factura;
    this.facturaDialog = !this.facturaDialog;
  };

  traerFacturas() {
    this.facturaService.obtenerFacturas().subscribe(
      (data : any)=> {
         this.facturas = data.facturas;
      },(err : any) => {
        this.globals.toastMessageWarn('Factura',err.error.mensaje)
      }
    );
  };

  crearFactura(){
    if(!this.verificarDatos()){
      this.globals.toastMessageWarn('Factura','Datos incompletos');
      return null;
    }

    this.facturaService.create(this.factura).subscribe(
      (response : any) => {
        this.facturas.push(response.facturas[0]);
        this.facturaDialog = !this.facturaDialog;
        this.globals.toastMessageSucces('Factura','Factura creada con exito.');
      },err => {
        this.globals.toastMessageError('Factura',err.error.mensaje);
      }
    );
  };

  traerProductos() {
    this.productoService.obtenerInventario().subscribe(
      (productos) => {
        this.productos = productos;
      }
    );
  };

  verificarDatos() : boolean{
    if(!this.factura.producto){
      return false;
    }
    if(!this.factura.cantidad){
      return false;
    }
    if(!this.factura.valorUnitario){
      return false;
    }
    return true;
  }
}
