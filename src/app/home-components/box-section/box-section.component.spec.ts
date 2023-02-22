import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSectionComponent } from './box-section.component';

describe('BoxSectionComponent', () => {
  let component: BoxSectionComponent;
  let fixture: ComponentFixture<BoxSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
