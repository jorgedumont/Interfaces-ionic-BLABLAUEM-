import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListacochesPage } from './listacoches.page';

describe('ListacochesPage', () => {
  let component: ListacochesPage;
  let fixture: ComponentFixture<ListacochesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacochesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListacochesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
