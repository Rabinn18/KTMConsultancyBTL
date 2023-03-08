import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutKtmConsultingGroupComponent } from './about-ktm-consulting-group.component';

describe('AboutKtmConsultingGroupComponent', () => {
  let component: AboutKtmConsultingGroupComponent;
  let fixture: ComponentFixture<AboutKtmConsultingGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutKtmConsultingGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutKtmConsultingGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
