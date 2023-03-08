import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOurBranchesComponent } from './about-our-branches.component';

describe('AboutOurBranchesComponent', () => {
  let component: AboutOurBranchesComponent;
  let fixture: ComponentFixture<AboutOurBranchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutOurBranchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutOurBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
