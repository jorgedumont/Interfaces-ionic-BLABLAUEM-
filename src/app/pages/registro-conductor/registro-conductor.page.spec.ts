import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroConductorPage } from './registro-conductor.page';

describe('RegistroConductorPage', () => {
  let component: RegistroConductorPage;
  let fixture: ComponentFixture<RegistroConductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroConductorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
