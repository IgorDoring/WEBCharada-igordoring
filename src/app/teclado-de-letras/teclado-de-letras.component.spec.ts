import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecladoDeLetrasComponent } from './teclado-de-letras.component';

describe('TecladoDeLetrasComponent', () => {
  let component: TecladoDeLetrasComponent;
  let fixture: ComponentFixture<TecladoDeLetrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecladoDeLetrasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TecladoDeLetrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
