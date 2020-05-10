import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaConductoresPage } from './lista-conductores.page';

describe('ListaConductoresPage', () => {
  let component: ListaConductoresPage;
  let fixture: ComponentFixture<ListaConductoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaConductoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaConductoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
