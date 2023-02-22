import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedUniversitiesSectionComponent } from './associated-universities-section.component';

describe('AssociatedUniversitiesSectionComponent', () => {
  let component: AssociatedUniversitiesSectionComponent;
  let fixture: ComponentFixture<AssociatedUniversitiesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociatedUniversitiesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociatedUniversitiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
