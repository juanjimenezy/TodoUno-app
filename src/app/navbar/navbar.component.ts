import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['home'] },
      { label: 'Facturas', icon: 'pi pi-fw pi-file', routerLink: ['factura'] },
      { label: 'Productos', icon: 'pi pi-fw pi-box', routerLink: ['producto'] },
      { label: 'Inventario', icon: 'pi pi-fw pi-calculator', routerLink: ['inventario'] },
      { label: 'Kardex', icon: 'pi pi-fw pi-book', routerLink: ['kardex'] },
    ];
  }

}
