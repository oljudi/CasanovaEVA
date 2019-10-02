import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  constructor(
    private afs: AngularFirestore,
  ) { }

  getDocs() {
    return this.afs.collection('typeALL').valueChanges();
  }
  getDocsC() {
    return this.afs.collection('typeC').valueChanges();
  }
  getDocsV() {
    return this.afs.collection('type').valueChanges();
  }
}
