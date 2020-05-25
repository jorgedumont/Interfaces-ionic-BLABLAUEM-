import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservapasajeroPage } from './reservapasajero.page';

describe('ReservapasajeroPage', () => {
  let component: ReservapasajeroPage;
  let fixture: ComponentFixture<ReservapasajeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservapasajeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservapasajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
