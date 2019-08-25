import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleValuesComponent } from './possible-values.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../../../environments/environment';


describe('PossibleValuesComponent', () => {
  let component: PossibleValuesComponent;
  let fixture: ComponentFixture<PossibleValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossibleValuesComponent ],
      imports: [
       FormsModule,
       AngularFireModule,
       AngularFireModule.initializeApp(environment.firebaseConfig, 'unit_users'),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    providers: [AngularFirestore, AngularFireModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibleValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
