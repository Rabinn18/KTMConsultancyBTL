import { Component } from '@angular/core';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-pte',
  templateUrl: './pte.component.html',
  styleUrls: ['./pte.component.scss']
})
export class PteComponent {
  private stepper!: Stepper;

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1')!, {
      linear: false,
      animation: true
    })
  }
}
