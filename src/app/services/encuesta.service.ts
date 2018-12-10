
import { Injectable } from '@angular/core';
import {EncuestaexInterface} from '../Models/Encuestaex';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  EncuestaexCollection: AngularFirestoreCollection<EncuestaexInterface>;
  P1exCollection: AngularFirestoreCollection<EncuestaexInterface>;
  P2exCollection: AngularFirestoreCollection<EncuestaexInterface>;
  P3exCollection: AngularFirestoreCollection<EncuestaexInterface>;
  P4exCollection: AngularFirestoreCollection<EncuestaexInterface>;
  P5exCollection: AngularFirestoreCollection<EncuestaexInterface>;
  P6exCollection: AngularFirestoreCollection<EncuestaexInterface>;
  P7exCollection: AngularFirestoreCollection<EncuestaexInterface>;
  P8exCollection: AngularFirestoreCollection<EncuestaexInterface>;
  typeCollection: AngularFirestoreCollection<EncuestaexInterface>;
  EncuestaexDoc: AngularFirestoreDocument<EncuestaexInterface>;
  Encuestaexes: Observable<EncuestaexInterface[]>;
  Encuestaex: Observable<EncuestaexInterface>;
  

constructor(
  private afs: AngularFirestore) {
    this.EncuestaexCollection = this.afs.collection('Encuestaexes', ref => ref);
    this.P1exCollection = this.afs.collection('P1ex', ref => ref);
    this.P2exCollection = this.afs.collection('P2ex', ref => ref);
    this.P3exCollection = this.afs.collection('P3ex', ref => ref);
    this.P4exCollection = this.afs.collection('P4ex', ref => ref);
    this.P5exCollection = this.afs.collection('P5ex', ref => ref);
    this.P6exCollection = this.afs.collection('P6ex', ref => ref);
    this.P7exCollection = this.afs.collection('P7ex', ref => ref);
    this.P8exCollection = this.afs.collection('P8ex', ref => ref);
    this.typeCollection = this.afs.collection('type', ref => ref);
   }

  deleteEncuestaex(Encuestaex: EncuestaexInterface){
    this.EncuestaexDoc = this.afs.doc('Encuestaexes/' + Encuestaex.id);
    this.EncuestaexDoc.delete();
  }
   updateEncuestaex(Encuestaex: EncuestaexInterface){
      this.EncuestaexDoc=this.afs.doc('Encuestaexes/' + Encuestaex.id);
      this.EncuestaexDoc.update(Encuestaex);
    }
    updatep1(Encuestaex: EncuestaexInterface){
      this.EncuestaexDoc=this.afs.doc('P1ex/' + Encuestaex.id);
      this.EncuestaexDoc.update(Encuestaex);
    }
    updatep2(Encuestaex: EncuestaexInterface){
      this.EncuestaexDoc=this.afs.doc('P2ex/' + Encuestaex.id);
      this.EncuestaexDoc.update(Encuestaex);
    }
    updatep3(Encuestaex: EncuestaexInterface){
      this.EncuestaexDoc=this.afs.doc('P3ex/' + Encuestaex.id);
      this.EncuestaexDoc.update(Encuestaex);
    }
    updatep4(Encuestaex: EncuestaexInterface){
      this.EncuestaexDoc=this.afs.doc('P4ex/' + Encuestaex.id);
      this.EncuestaexDoc.update(Encuestaex);
    }
    updatep5(Encuestaex: EncuestaexInterface){
      this.EncuestaexDoc=this.afs.doc('P5ex/' + Encuestaex.id);
      this.EncuestaexDoc.update(Encuestaex);
    }
    updatep6(Encuestaex: EncuestaexInterface){
      this.EncuestaexDoc=this.afs.doc('P6ex/' + Encuestaex.id);
      this.EncuestaexDoc.update(Encuestaex);
    }
    updatep7(Encuestaex: EncuestaexInterface){
      this.EncuestaexDoc=this.afs.doc('P7ex/' + Encuestaex.id);
      this.EncuestaexDoc.update(Encuestaex);
    }
    updatep8(Encuestaex: EncuestaexInterface){
      this.EncuestaexDoc=this.afs.doc('P8ex/' + Encuestaex.id);
      this.EncuestaexDoc.update(Encuestaex);
    }
    
  addEncuestaex(Encuestaex: EncuestaexInterface){
    //this.EncuestaexCollection.add(Encuestaex);
    this.EncuestaexCollection.doc(Encuestaex.id).set(Encuestaex);
    this.P1exCollection.doc(Encuestaex.id).set(Encuestaex);
    this.P2exCollection.doc(Encuestaex.id).set(Encuestaex);
    this.P3exCollection.doc(Encuestaex.id).set(Encuestaex);
    this.P4exCollection.doc(Encuestaex.id).set(Encuestaex);
    this.P5exCollection.doc(Encuestaex.id).set(Encuestaex);
    this.P6exCollection.doc(Encuestaex.id).set(Encuestaex);
    this.P7exCollection.doc(Encuestaex.id).set(Encuestaex);
    this.P8exCollection.doc(Encuestaex.id).set(Encuestaex);
    
  }
  addEcuescont(Encuestaex: EncuestaexInterface){
    //this.EncuestaexCollection.add(Encuestaex);
    this.typeCollection.doc(Encuestaex.id).set(Encuestaex);
  }


  getOneEncuestaex(id: string){
    this.EncuestaexDoc = this.afs.doc<EncuestaexInterface>('Encuestaexes/${id}');
    this.Encuestaex = this.EncuestaexDoc.snapshotChanges().pipe(map(action =>{
      if(action.payload.exists === false){
        return null;
      }else{
        const data = action.payload.data() as EncuestaexInterface;
        data.id = action.payload.id;

      }
    }));
  }
  getAllEncuestaex():Observable<EncuestaexInterface[]>{
    this.Encuestaexes = this.EncuestaexCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as EncuestaexInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
    return this.Encuestaexes;
  }
  getidEncuestaex(id:string){
    this.EncuestaexDoc = this.afs.doc<EncuestaexInterface>('type/${id}');
    this.Encuestaex = this.EncuestaexDoc.snapshotChanges().pipe(map(action =>{
      if(action.payload.exists === false){
        return null;
      }else{
        const data = action.payload.data() as EncuestaexInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
    return this.Encuestaex;
  }
  
}
