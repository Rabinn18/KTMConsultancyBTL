import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutApplicationProcessComponent } from './about-application-process.component';

describe('AboutApplicationProcessComponent', () => {
  let component: AboutApplicationProcessComponent;
  let fixture: ComponentFixture<AboutApplicationProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutApplicationProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutApplicationProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
