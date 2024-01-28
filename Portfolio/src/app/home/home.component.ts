import { AfterViewInit, Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  visible: boolean = false;
  fileSaver = import('file-saver');



  constructor(private el: ElementRef) {

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

  /*
    downloadCV(): void {
      const element = document.querySelector('.view') as HTMLElement; // Elemento a convertir en PDF
  
      if (element) {
        html2canvas(element, { scrollY: -window.scrollY }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
  
          // Ajusta el tamaño del PDF al tamaño del lienzo capturado
          const pdf = new jsPDF('p', 'px', [canvas.width, canvas.height]);
  
          // Añade la imagen al PDF
          pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
  
          // Guarda el PDF con un nombre específico
          pdf.save('Guadalupe_Nicole_Arroyo_portfolio.pdf');
        });
      }
    }*/

  downloadCV(): void {

    // Ruta relativa al archivo PDF en la carpeta 'assets'
    const rutaPDF = '/assets/cv.pdf';

    // Construir la URL completa usando la ubicación del navegador y la ruta relativa
    const urlPDF = window.location.origin + rutaPDF;

    this.fileSaver.then((module) => {
      // Ahora puedes usar module.saveAs en lugar de directamente saveAs
      module.saveAs(urlPDF, 'curriculumGuada.pdf');
    });
  }

  showDescription() {
    throw new Error('Method not implemented.');
  }


}




