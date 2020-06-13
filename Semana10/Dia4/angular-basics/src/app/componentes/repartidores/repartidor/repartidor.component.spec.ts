import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidorComponent } from './repartidor.component';

describe('RepartidorComponent', () => {
  let component: RepartidorComponent;
  let fixture: ComponentFixture<RepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
