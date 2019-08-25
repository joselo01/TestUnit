import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestComponent } from './request.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../../../environments/environment';

describe('RequestComponent', () => {
  let component: RequestComponent;
  let fixture: ComponentFixture<RequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestComponent ],
      imports: [
       FormsModule,
       AngularFireModule,
       AngularFireModule.initializeApp(environment.firebaseConfig, 'unit_users'),
    ],
      providers: [AngularFirestore, AngularFireModule],
    })
    .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(RequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
