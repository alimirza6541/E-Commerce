import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybillComponent } from './mybill.component';

describe('MybillComponent', () => {
  let component: MybillComponent;
  let fixture: ComponentFixture<MybillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
