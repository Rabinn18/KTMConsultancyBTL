import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { OurTeamSectionComponent } from './our-team-section/our-team-section.component';
import { AssociatedUniversitiesSectionComponent } from './associated-universities-section/associated-universities-section.component';
import { CountrySectionComponent } from './country-section/country-section.component';
import { HeroImageSectionComponent } from './hero-image-section/hero-image-section.component';
import { BoxSectionComponent } from './box-section/box-section.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { ContactUsSectionComponent } from './contact-us-section/contact-us-section.component';
import { TestimonialsSectionComponent } from './testimonials-section/testimonials-section.component';
import { OurServicesSectionComponent } from './our-services-section/our-services-section.component';
import { CountsSectionComponent } from './counts-section/counts-section.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


const COMPONENTS = [
  AboutUsSectionComponent,
  OurTeamSectionComponent,
  AssociatedUniversitiesSectionComponent,
  CountrySectionComponent,
  HeroImageSectionComponent,
  BoxSectionComponent,
  FaqSectionComponent,
  ContactUsSectionComponent,
  TestimonialsSectionComponent,
  OurServicesSectionComponent,
  CountsSectionComponent,
]

const MODULES = [
  CommonModule,
  RouterModule,
  AppRoutingModule,
  NgbCarouselModule
]

@NgModule({
  declarations: [...COMPONENTS,     ],
  imports: [...MODULES],
  exports: [...COMPONENTS]
})
export class HomeComponentsModule { }
