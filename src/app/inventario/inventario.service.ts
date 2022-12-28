import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable,tap, throwError } from "rxjs";
import { Globals } from "../Globals";
import { Inventario } from "../interfaces/inventario";


@Injectable(
    {
      providedIn: 'root'
    }
  )

export class InventarioService {
    constructor(private http: HttpClient, private globals : Globals){}

    obtenerInventario() : Observable<Inventario[]>{
        return this.http.get<Inventario[]>(this.globals.vhost + '/Inventario/productos').pipe(
            catchError(
              e => {
                console.log(e.error.mensaje);
                return throwError(e);
              }
            )
          );
    }

}