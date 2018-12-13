
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
    
    
  addEncuestaex(Encuestaex: EncuestaexInterface){
    //this.EncuestaexCollection.add(Encuestaex);
    this.EncuestaexCollection.doc(Encuestaex.id).set(Encuestaex);
   
    
  }
  addEcuescont(Encuestaex: EncuestaexInterface){
    //this.EncuestaexCollection.add(Encuestaex);
    this.typeCollection.doc(Encuestaex.id).set(Encuestaex);
  }


  getOneEncuestaex(){
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
  getitem():Observable<EncuestaexInterface[]>{
    this.Encuestaexes = this.EncuestaexCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.id as EncuestaexInterface;
        //data.id = action.payload.doc.id;
        
        
        return data;
      });
    }));
    return this.Encuestaexes;
  }
  getiEncuestaex(id:string){
    this.EncuestaexDoc = this.afs.doc<EncuestaexInterface>('type/${id}');
    this.Encuestaex = this.EncuestaexDoc.snapshotChanges().pipe(map(action =>{
      if(action.payload.exists === false){
        return null;
      }else{
        const data = action.payload.data().total as EncuestaexInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
    return this.Encuestaex;
  }
  
}
