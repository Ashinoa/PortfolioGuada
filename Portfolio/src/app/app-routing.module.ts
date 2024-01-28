import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //con esto se muestra lo que hay en el componente "home"
  {path: 'popup', component: PopupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
