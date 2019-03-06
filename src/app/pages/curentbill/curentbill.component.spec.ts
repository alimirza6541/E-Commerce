import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurentbillComponent } from './curentbill.component';

describe('CurentbillComponent', () => {
  let component: CurentbillComponent;
  let fixture: ComponentFixture<CurentbillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurentbillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurentbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
