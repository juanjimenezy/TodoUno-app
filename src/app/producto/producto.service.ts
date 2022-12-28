import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Globals } from "../Globals";
import { Producto } from "../interfaces/Producto";

@Injectable(
  {
    providedIn: 'root'
  }
)

export class ProductoService {
  constructor(private http: HttpClient, private globals: Globals) { }

  obtenerInventario(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.globals.vhost + '/Producto/productos').pipe(
      catchError(
        e => {
          console.log(e.error.mensaje);
          return throwError(e);
        }
      )
    );
  };

  create(producto : Producto) : Observable<Producto> {
    return this.http.post<Producto>(`${this.globals.vhost + '/Producto/producto'}`,producto).pipe(
      catchError(e =>{
        console.error(e.error.mensaje);
        return  throwError(e);
      })
    );
  };

}