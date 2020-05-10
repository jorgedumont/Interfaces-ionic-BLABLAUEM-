import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevatarjetaPage } from './nuevatarjeta.page';

describe('NuevatarjetaPage', () => {
  let component: NuevatarjetaPage;
  let fixture: ComponentFixture<NuevatarjetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevatarjetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevatarjetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
