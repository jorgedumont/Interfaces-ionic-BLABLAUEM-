import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaPasajerosPage } from './lista-pasajeros.page';

describe('ListaPasajerosPage', () => {
  let component: ListaPasajerosPage;
  let fixture: ComponentFixture<ListaPasajerosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPasajerosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaPasajerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
