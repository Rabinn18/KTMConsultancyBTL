import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.scss']
})
export class TestimonialsSectionComponent {
  public testimonialSlider = [
    {
      image: 'assets/img/team/team1.png',
      title: 'William Anderson',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      buttonText: 'ReadMore',
    },

    {
      image: 'assets/img/team/team1.png',
      title: 'William Anderson',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      buttonText: 'ReadMore',
    },

    {
      image: 'assets/img/team/team1.png',
      title: 'William Anderson',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      buttonText: 'ReadMore',
    },
    {
      image: 'assets/img/team/team1.png',
      title: 'William Anderson',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      buttonText: 'ReadMore',
    },
    {
      image: 'assets/img/team/team1.png',
      title: 'William Anderson',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      buttonText: 'ReadMore',
    },
  ];

  constructor() { }

  ngOnInit(): void { }

  serviceOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-backward" aria-hidden="true"></i>',
      '<i class="fa fa-forward" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
}
