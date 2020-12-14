import { Component, OnInit } from '@angular/core';
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
  existeImagenes: boolean = false;

  img: String [] = [];
  test: String [];

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
      console.log(this.existeImagenes)
      const a = await this.cbirService.postImage(this.imagenIngresada);
      // this.existeImagenes = true;
      // var aux
      // a.topImagenes.forEach(element => {
      //   console.log(element.nombreImagen)
      //   aux.push(element.nombreImagen)
      // });
      //   this.test = aux
    }else{
      console.log('No se ha cargado ninguna imagen')
    }
  }

}
