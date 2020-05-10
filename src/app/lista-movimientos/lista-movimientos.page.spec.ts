import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaMovimientosPage } from './lista-movimientos.page';

describe('ListaMovimientosPage', () => {
  let component: ListaMovimientosPage;
  let fixture: ComponentFixture<ListaMovimientosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMovimientosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMovimientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
