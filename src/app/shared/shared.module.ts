import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header-top/header-top.component';



const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  HeaderTopComponent,
]

const MODULES = [
  CommonModule,
  RouterModule,
  AppRoutingModule,
]


@NgModule({
  declarations: [...COMPONENTS,],
  imports: [...MODULES],
  exports: [...COMPONENTS]
})
export class SharedModule { }
