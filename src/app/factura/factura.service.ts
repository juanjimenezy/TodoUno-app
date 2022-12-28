import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Globals } from "../Globals";
import { Factura } from "../interfaces/factura";

@Injectable(
    {
        providedIn: 'root'
    }
)

export class FacturaService {
    constructor(private http: HttpClient, private globals: Globals) {};

    obtenerFacturas(): Observable<Factura[]> {
        return this.http.get<Factura[]>(this.globals.vhost + '/Factura/facturas').pipe(
            catchError(
                e => {
                    console.log(e.error.mensaje);
                    return throwError(e);
                }
            )
        );
    };

    create(factura : Factura) : Observable<Factura> {
        return this.http.post<Factura>(`${this.globals.vhost + '/Factura/facturaVenta'}`,factura).pipe(
          catchError(e =>{
            console.error(e.error.mensaje);
            return  throwError(e);
          })
        );
      };
}