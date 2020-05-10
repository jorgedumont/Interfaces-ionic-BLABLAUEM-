import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecargarautomaticoPage } from './recargarautomatico.page';

describe('RecargarautomaticoPage', () => {
  let component: RecargarautomaticoPage;
  let fixture: ComponentFixture<RecargarautomaticoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecargarautomaticoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecargarautomaticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
