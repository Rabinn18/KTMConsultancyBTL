import { UkComponent } from './abroad-countries/uk/uk.component';
import { CanadaComponent } from './abroad-countries/canada/canada.component';
import { UsaComponent } from './abroad-countries/usa/usa.component';
import { AustraliaComponent } from './abroad-countries/australia/australia.component';
import { AboutOurBranchesComponent } from './about-pages/about-our-branches/about-our-branches.component';
import { AboutOurTeamComponent } from './about-pages/about-our-team/about-our-team.component';
import { AboutApplicationProcessComponent } from './about-pages/about-application-process/about-application-process.component';
import { AboutKtmConsultingGroupComponent } from './about-pages/about-ktm-consulting-group/about-ktm-consulting-group.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IeltsComponent } from './our-courses/ielts/ielts.component';
import { PteComponent } from './our-courses/pte/pte.component';
import { ToeflComponent } from './our-courses/toefl/toefl.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'ielts',
        component: IeltsComponent,
      },
      {
        path: 'pte',
        component: PteComponent,
      },
      {
        path: 'toefl',
        component: ToeflComponent,
      },
      {
        path: 'about-ktm-consulting-group',
        component: AboutKtmConsultingGroupComponent,
      },
      {
        path: 'about-application-process',
        component: AboutApplicationProcessComponent,
      },
      {
        path: 'about-our-team',
        component: AboutOurTeamComponent,
      },
      {
        path: 'about-our-branches',
        component: AboutOurBranchesComponent,
      },
      {
        path: 'australia',
        component: AustraliaComponent,
      },
      {
        path: 'usa',
        component: UsaComponent,
      },
      {
        path: 'canada',
        component: CanadaComponent,
      },
      {
        path: 'uk',
        component: UkComponent,
      }
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
