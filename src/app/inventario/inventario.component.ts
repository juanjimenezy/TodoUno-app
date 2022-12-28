import { Component,OnInit } from '@angular/core';
import { Inventario } from '../interfaces/inventario';
import { InventarioService } from './inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit{
  inventario : Inventario[] = [];


  constructor(private inventarioService : InventarioService){}

  ngOnInit() {
    this.traerInventario();
  };

  traerInventario() {
    this.inventarioService.obtenerInventario().subscribe(
      (inventario) => {
        console.log(inventario);
        this.inventario = inventario;
      }
    )
  }


}
