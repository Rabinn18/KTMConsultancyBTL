import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponentsModule } from '../home-components/home-components.module';
import { IeltsComponent } from './our-courses/ielts/ielts.component';
import { PteComponent } from './our-courses/pte/pte.component';
import { ToeflComponent } from './our-courses/toefl/toefl.component';
import { AboutApplicationProcessComponent } from './about-pages/about-application-process/about-application-process.component';
import { AboutOurTeamComponent } from './about-pages/about-our-team/about-our-team.component';
import { AboutKtmConsultingGroupComponent } from './about-pages/about-ktm-consulting-group/about-ktm-consulting-group.component';
import { AboutOurBranchesComponent } from './about-pages/about-our-branches/about-our-branches.component';
import { AustraliaComponent } from './abroad-countries/australia/australia.component';
import { UsaComponent } from './abroad-countries/usa/usa.component';
import { UkComponent } from './abroad-countries/uk/uk.component';
import { CanadaComponent } from './abroad-countries/canada/canada.component';


const COMPONENTS = [
  HomePageComponent,
  IeltsComponent,
  PteComponent,
  ToeflComponent,
  AboutApplicationProcessComponent,
  AboutOurTeamComponent,
  AboutKtmConsultingGroupComponent,
  AboutOurBranchesComponent,
  AustraliaComponent,
  UsaComponent,
  UkComponent,
  CanadaComponent,
]

const MODULES = [
  CommonModule,
  PagesRoutingModule,
  SharedModule,
  RouterModule,
  AppRoutingModule,
  HomeComponentsModule,

]

@NgModule({
  declarations: [...COMPONENTS,],
  imports: [...MODULES]
})


export class PagesModule { }
