import { Component } from '@angular/core';
import Stepper from 'bs-stepper';


@Component({
  selector: 'app-ielts',
  templateUrl: './ielts.component.html',
  styleUrls: ['./ielts.component.scss']
})
export class IeltsComponent {

  private stepper!: Stepper;

  // next() {
  //   this.stepper.next();
  // }

  // onSubmit() {
  //   return false;
  // }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1')!, {
      linear: false,
      animation: true
    })

    this.stepper = new Stepper(document.querySelector('#stepper2')!, {
      linear: false,
      animation: true
    })

    this.stepper = new Stepper(document.querySelector('#stepper3')!, {
      linear: false,
      animation: true
    })
  }

}



