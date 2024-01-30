import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { Dimaia } from '../models/Dimaia';
import { Stylebus } from '../models/Stylebus';
import { Donar } from '../models/Donar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit{

  popupVisible: boolean = false;
  descriptionProject !: string;
  urlProject !: string;

  dimaiaProject!: Dimaia;
  donarProject !: Donar;
  stylebusProject !: Stylebus;


  constructor(private el: ElementRef, private httpClient: HttpClient) {
    window.scrollTo(0, 0);
  }


  ngOnInit(): void {
    this.dimaiaProject = new Dimaia();
    this.donarProject = new Donar();
    this.stylebusProject = new Stylebus();
  }



  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

  

  slowScroll(id: any): void {
    const sectionElement = document.getElementById(id);

    if (sectionElement) {
      // Obtener la posición del elemento de la sección
      const yOffset = sectionElement.getBoundingClientRect().top + window.scrollY;

      // Desplazarse al elemento de la sección con un desplazamiento suave
      window.scroll({
        top: yOffset,
        behavior: 'smooth'
      });
    }
  }


  downloadCV(): void {
    // Ruta relativa al archivo PDF en la carpeta 'assets'
    const rutaPDF = './assets/cv.pdf';

    // Obtén la ruta completa del archivo PDF usando el servicio HttpClient
    this.httpClient.get(rutaPDF, { responseType: 'blob' }).subscribe((data: Blob) => {
      // Descargar el archivo usando file-saver
      saveAs(data, 'Guadalupe Nicole Arroyo CV.pdf');
    });
  }

  showDescription(name : string): void {
    
    if(name.toLowerCase() === this.dimaiaProject.name.toLowerCase()){
      this.descriptionProject = this.dimaiaProject.description;
       this.urlProject = this.dimaiaProject.image;
       this.popupVisible = true;
    }else if(name.toLowerCase() === this.donarProject.name.toLowerCase()){
      this.descriptionProject = this.donarProject.description;
       this.urlProject = this.donarProject.image;
       this.popupVisible = true;
    }else if(name.toLowerCase() === this.stylebusProject.name.toLowerCase()){
      this.descriptionProject = this.stylebusProject.description;
      this.urlProject = this.stylebusProject.image;
      this.popupVisible = true;
    }
    
  }




  

}




