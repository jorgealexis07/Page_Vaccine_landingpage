import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorouselMvaccinesComponent } from './corousel-mvaccines.component';

describe('CorouselMvaccinesComponent', () => {
  let component: CorouselMvaccinesComponent;
  let fixture: ComponentFixture<CorouselMvaccinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorouselMvaccinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorouselMvaccinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
