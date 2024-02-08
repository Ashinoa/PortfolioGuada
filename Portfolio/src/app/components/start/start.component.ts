import { Component, ElementRef, Renderer2 } from '@angular/core';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  constructor(private el: ElementRef, private renderer: Renderer2, private httpClient: HttpClient) {

  }

  slowScroll(id: string): void {
    const element = this.el.nativeElement.ownerDocument.getElementById(id);
  
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
    }
  }

  downloadCV(): void {
    // Ruta relativa al archivo PDF en la carpeta 'assets'
    const rutaPDF = './assets/CVGuada.pdf';

    // Obtén la ruta completa del archivo PDF usando el servicio HttpClient
    this.httpClient.get(rutaPDF, { responseType: 'blob' }).subscribe((data: Blob) => {
      // Descargar el archivo usando file-saver
      saveAs(data, 'Guadalupe Nicole Arroyo CV.pdf');
    });
  }
}
