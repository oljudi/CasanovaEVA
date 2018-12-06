
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
  EncuestaexDoc: AngularFirestoreDocument<EncuestaexInterface>;
  Encuestaexes: Observable<EncuestaexInterface[]>;
  Encuestaex: Observable<EncuestaexInterface>;
  

constructor(
  private afs: AngularFirestore) {
    this.EncuestaexCollection = this.afs.collection('Encuestaexes', ref => ref);
   }

  deleteEncuestaex(Encuestaex: EncuestaexInterface){
    this.EncuestaexDoc = this.afs.doc('Encuestaexes/' + Encuestaex.idencuesta);
    this.EncuestaexDoc.delete();
  }
   updateEncuestaex(Encuestaex: EncuestaexInterface){
      this.EncuestaexDoc=this.afs.doc('Encuestaexes/' + Encuestaex.idencuesta);
      this.EncuestaexDoc.update(Encuestaex);
    }

  addEncuestaex(Encuestaex: EncuestaexInterface){
    //this.EncuestaexCollection.add(Encuestaex);
    this.EncuestaexCollection.doc(Encuestaex.idencuesta).set(Encuestaex);
    
  }
  getOneEncuestaex(idencuesta: string){
    this.EncuestaexDoc = this.afs.doc<EncuestaexInterface>('Encuestaexes/${idencuesta}');
    this.Encuestaex = this.EncuestaexDoc.snapshotChanges().pipe(map(action =>{
      if(action.payload.exists === false){
        return null;
      }else{
        const data = action.payload.data() as EncuestaexInterface;
        data.idencuesta = action.payload.id;

      }
    }));
  }
  getAllEncuestaex():Observable<EncuestaexInterface[]>{
    this.Encuestaexes = this.EncuestaexCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as EncuestaexInterface;
        data.idencuesta = action.payload.doc.id;
        return data;
      });
    }));
    return this.Encuestaexes;
  }
  
}
