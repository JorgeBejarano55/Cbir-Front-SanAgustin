import { Component, OnInit } from '@angular/core';
import { grupo } from '../models/imagen'
import { CbirService } from '../services/cbir.service';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  file: File;
  imagenIngresada: String | ArrayBuffer;
  animal: grupo[] = [];
  existeImagenes: boolean = false;
  
  img: String [] = [];

  constructor(private cbirService: CbirService) { }

  ngOnInit(): void {
    //nada
  }

  public imagenSeleccionada(event: HtmlInputEvent): void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imagenIngresada = reader.result;
      reader.readAsDataURL(this.file);
    }
  }
  async cbir(){

    if(this.imagenIngresada != null){
      this.animal = [];
      console.log(this.existeImagenes)
      const a = await this.cbirService.postImage(this.imagenIngresada);
      this.existeImagenes = true;
      console.log('Datos que recibo en la constante "a"')
      console.log(a);

      //this.img1 = a.topImagenes[0].nombreGrupo + "/" +  a.topImagenes[0].nombreImagen;
      
      for(var i = 0; i < 5; i++){
        var nombreGrupo = a.topGrupos[i].nombreGrupo.split(".");
        this.animal.push({
          posicion: (i+1),
          nombre: nombreGrupo[1],
          ocurrencias: a.topGrupos[i].numeroOcurrencias
        });
      }
    }else{
      console.log('No se ha cargado ninguna imagen')
    }
  }

}
