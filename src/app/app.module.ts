  import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './components/app.component';
import { PageComponent } from './components/page/page.component';
import { HorizontalMenuComponent } from './components/page/horizontal-menu/horizontal-menu.component';
import { SocialNetworksComponent } from './components/page/social-networks/social-networks.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { CvPageComponent } from './components/cv-page/cv-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { SkillTreeComponent } from './components/about-page/skill-tree/skill-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HorizontalMenuComponent,
    SocialNetworksComponent,
    HomePageComponent,
    AboutPageComponent,
    CvPageComponent,
    BlogPageComponent,
    ContactPageComponent,
    SkillTreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
