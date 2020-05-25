import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarperfilconductorPage } from './editarperfilconductor.page';

describe('EditarperfilconductorPage', () => {
  let component: EditarperfilconductorPage;
  let fixture: ComponentFixture<EditarperfilconductorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarperfilconductorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarperfilconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
