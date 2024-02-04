import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router: Router) {}

  redirect(page: string):void {
    if (page === 'github') {
      window.location.href = 'https://github.com/Ashinoa'; // O utiliza this.router.navigate si estás manejando rutas internas de Angular
    }else if(page === 'linkedin'){
      window.location.href = 'https://www.linkedin.com';
    }else{
      window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=guadalupenicolearroyo@gmail.com';
    }
  }

}
