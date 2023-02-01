import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '../components/about-page/about-page.component';
import { BlogPageComponent } from '../components/blog-page/blog-page.component';
import { ContactPageComponent } from '../components/contact-page/contact-page.component';
import { CvPageComponent } from '../components/cv-page/cv-page.component';
import { HomePageComponent } from '../components/home-page/home-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent, data: {state: 'home-page'}},
  {path: 'about-page', component: AboutPageComponent, data: {state: 'about-page'}},
  {path: 'blog-page', component: BlogPageComponent, data: {state: 'blog-page'}},
  {path: 'cv-page', component: CvPageComponent, data: {state: 'cv-page'}},
  {path: 'contact-page', component: ContactPageComponent, data: {state: 'contact-page'}},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
