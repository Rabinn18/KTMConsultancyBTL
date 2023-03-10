import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeamSectionComponent } from './our-team-section.component';

describe('OurTeamSectionComponent', () => {
  let component: OurTeamSectionComponent;
  let fixture: ComponentFixture<OurTeamSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTeamSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurTeamSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
