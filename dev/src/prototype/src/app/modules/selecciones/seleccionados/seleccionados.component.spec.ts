import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionadosComponent } from './seleccionados.component';

describe('SeleccionadosComponent', () => {
  let component: SeleccionadosComponent;
  let fixture: ComponentFixture<SeleccionadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
