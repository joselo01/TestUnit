import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Requests } from '../../interfaces/requests.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
public cargando: boolean;
requests: AngularFirestoreCollection<Requests>;
requests$: Observable<Requests[]>;
  constructor(private afs: AngularFirestore) {
    this.cargando = true;
   }

  ngOnInit() {
    this.requests = this.afs.collection('requests');
    this.requests$ = this.requests.valueChanges();
    if (!this.requests$) {
      console.log('Error del servidor');
    } else {
      this.cargando = false;
    }
  }

}
