import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponentsModule } from '../home-components/home-components.module';


const COMPONENTS = [
  HomePageComponent
]

const MODULES = [
  CommonModule,
  PagesRoutingModule,
  SharedModule,
  RouterModule,
  AppRoutingModule,
  HomeComponentsModule
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES]
})


export class PagesModule { }
