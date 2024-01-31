import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PopupComponent } from './popup/popup.component';
import { FooterComponent } from './components/footer/footer.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { StartComponent } from './components/start/start.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, //con esto se muestra lo que hay en el componente "home"
  {path: 'popup', component: PopupComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'hobbies', component: HobbiesComponent},
  {path: 'education', component: EducationComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'start', component: StartComponent},
  {path: 'sidebar', component: SidebarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
