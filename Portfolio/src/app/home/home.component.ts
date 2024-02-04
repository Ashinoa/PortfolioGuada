import { Component, ElementRef, HostListener, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  rastroCursor!: HTMLElement; 

  constructor(private el: ElementRef,private renderer: Renderer2) {

  }


  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event): void {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }

  




}




