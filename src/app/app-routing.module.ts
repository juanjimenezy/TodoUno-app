import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './factura/factura.component';
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './inventario/inventario.component';
import { KardexComponent } from './kardex/kardex.component';
import { ProductoComponent } from './producto/producto.component';


const routes: Routes = [
  {path: '', redirectTo: './home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'inventario', component: InventarioComponent},
  {path: 'factura', component: FacturaComponent},
  {path: 'kardex', component: KardexComponent},
  {path: 'producto', component: ProductoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
