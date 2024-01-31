import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

  constructor(private el: ElementRef) {

  }


  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event): void {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }
/*
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
  }*/








}




