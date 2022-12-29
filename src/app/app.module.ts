import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InventarioComponent } from './inventario/inventario.component';
import { FacturaComponent } from './factura/factura.component';
import { KardexComponent } from './kardex/kardex.component';
import { HomeComponent } from './home/home.component';

//services
import { InventarioService } from './inventario/inventario.service';
import { ProductoService } from './producto/producto.service';
import { KardexService } from './kardex/kardex.service';
import { FacturaService } from './factura/factura.service';


//primeng
import { TabMenuModule } from 'primeng/tabmenu';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { Globals } from './Globals';
import { ProductoComponent } from './producto/producto.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {InputNumberModule} from 'primeng/inputnumber';
import {ToastModule} from 'primeng/toast';
import {CardModule} from 'primeng/card';

import {MessageService} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InventarioComponent,
    FacturaComponent,
    KardexComponent,
    HomeComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TabMenuModule,
    ToolbarModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    AutoCompleteModule,
    InputNumberModule,
    ToastModule,
    CardModule
  ],
  providers: [Globals,InventarioService,ProductoService,KardexService,FacturaService,MessageService],
  bootstrap: [AppComponent]
})

export class AppModule { }
