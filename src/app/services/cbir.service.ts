import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { imagen } from '../models/imagen';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CbirService {

  constructor(private _http: HttpClient) { }

  async postImage(imagen: String | ArrayBuffer){
    return this._http.post<any>("http://127.0.0.1:5002/buscarImagen", {
      "base64img": imagen,
    },
    {headers: {'Content-Type': 'application/json',}}
    ).toPromise()
  }

}
