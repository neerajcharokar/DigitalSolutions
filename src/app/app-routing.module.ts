import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home',pathMatch:"full"
  },
  {
    path:'home',
    component:HomepageComponent,
    data: {animation: 'HomePage'}
  },
  {
    path:'aboutus',
    component:AboutusComponent,
    data: {animation: 'AboutPage'}
  },
  {
    path:'contactus',
    component:ContactusComponent,
    data: {animation: 'ContactUS'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
