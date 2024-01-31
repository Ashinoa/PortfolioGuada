import { Component, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  slowScroll(id: string): void {
    const element = this.el.nativeElement.ownerDocument.getElementById(id);
  
    if (element) {
      element.scrollIntoView({ behavior: 'smooth'});
    }
  }

}
