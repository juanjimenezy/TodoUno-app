import { Component, OnInit } from '@angular/core';
import { Kardex } from '../interfaces/kardex';
import { Producto } from '../interfaces/Producto';
import { ProductoService } from '../producto/producto.service';
import { KardexService } from './kardex.service';
import { Globals } from '../Globals';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.css']
})
export class KardexComponent implements OnInit{
  kardexs : Kardex[] = [];
  kardex : Kardex;
  kardexDialog : boolean = false;

  productos : Producto[] = [];

  constructor(private kardexService : KardexService,
              private productoService : ProductoService,
              private globals : Globals){}

  ngOnInit(): void {
    this.traerKardex();
  }

  traerKardex() {
    this.kardexService.obtenerKardex().subscribe(
      (response : Kardex[]) => {
        this.kardexs = response as Kardex[];
      }
    )
  };

  crearIngreso(){
    if(!this.verificarDatos()){
      this.globals.toastMessageWarn('Ingreso','Datos incompletos');
      return null;
    }

    this.kardexService.create(this.kardex).subscribe(
      (response : Kardex)=> {
        this.kardexs.push(response);
        this.kardexDialog = !this.kardexDialog;
        this.globals.toastMessageSucces('Kardex','Entrada creada con exito.');
      },err => {
        this.globals.toastMessageError('Kardex',err.error.mensaje);
      }
    );

  }

  traerProductos() {
    this.productoService.obtenerInventario().subscribe(
      (productos) => {
        this.productos = productos;
      }
    );
  };

  kDialog(){
    this.kardex = {} as Kardex;
    this.kardexDialog = !this.kardexDialog;
  };

  verificarDatos() : boolean{
    if(!this.kardex.producto){
      return false;
    }
    if(!this.kardex.cantidad){
      return false;
    }
    if(!this.kardex.valor){
      return false;
    }
    return true;
  }


}
