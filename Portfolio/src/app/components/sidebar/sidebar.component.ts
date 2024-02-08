import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  sidebarExpanded: boolean = true;
  showMenuButton: boolean = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  slowScroll(id: string): void {
    const element = this.el.nativeElement.ownerDocument.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    if(window.innerWidth <= 1024){
      this.showMenuButton = true;
      this.sidebarExpanded = false;
    }else{
      this.showMenuButton = false;
    }
    
  }

  toggleSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
  }

  ngOnInit() {
    this.checkScreenWidth();
  }

}
