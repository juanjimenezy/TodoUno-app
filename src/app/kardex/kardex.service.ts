import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable,tap, throwError } from "rxjs";
import { Globals } from "../Globals";
import { Kardex } from "../interfaces/kardex";


@Injectable(
    {
      providedIn: 'root'
    }
  )
export class KardexService {
    constructor(private http: HttpClient, private globals : Globals){}

    obtenerKardex() : Observable<Kardex[]>{
        return this.http.get<Kardex[]>(this.globals.vhost + '/Kardex/kardex').pipe(
            catchError(
              e => {
                console.log(e.error.mensaje);
                return throwError(e);
              }
            )
          );
    };

    create(kardex : Kardex) : Observable<Kardex> {
      return this.http.post<Kardex>(`${this.globals.vhost + '/Kardex/ingreso'}`,kardex).pipe(
        catchError(e =>{
          console.error(e.error.mensaje);
          return  throwError(e);
        })
      );
    };

}