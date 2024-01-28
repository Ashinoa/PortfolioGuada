import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  visible: boolean = false;
  descriptionProject !: string;
  urlProject !: string;


  constructor(private el: ElementRef, private httpClient: HttpClient) {

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
    const project1 = "dimaia";
    const project2 = "donar";
    
    if(name.toLowerCase() === project1.toLowerCase()){
      this.descriptionProject = project1;
       this.urlProject = "";
       this.visible = true;
    }



    
  }

}




