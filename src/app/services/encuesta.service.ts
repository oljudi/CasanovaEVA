import { Injectable } from '@angular/core';
import {EncuestaexInterface} from '../Models/Encuestaex';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { MetaInterface } from '../Models/Meta';
import { RegistroCompletoInterface } from '../Models/Registrocompleto';
 
@Injectable({
 providedIn: 'root'
})
export class EncuestaService {
 EncuestaexCollection: AngularFirestoreCollection<EncuestaexInterface>;
 EncuestareCollection: AngularFirestoreCollection<EncuestaexInterface>;
 EncuestatrCollection: AngularFirestoreCollection<EncuestaexInterface>;
 P1exCollection: AngularFirestoreCollection<EncuestaexInterface>;
 P2exCollection: AngularFirestoreCollection<EncuestaexInterface>;
 P3exCollection: AngularFirestoreCollection<EncuestaexInterface>;
 P4exCollection: AngularFirestoreCollection<EncuestaexInterface>;
 P5exCollection: AngularFirestoreCollection<EncuestaexInterface>;
 P6exCollection: AngularFirestoreCollection<EncuestaexInterface>;
 P7exCollection: AngularFirestoreCollection<EncuestaexInterface>;
 P8exCollection: AngularFirestoreCollection<EncuestaexInterface>;
 typeCollection: AngularFirestoreCollection<EncuestaexInterface>;

 ccp1mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp1b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp1r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp1m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp1mm: AngularFirestoreCollection<EncuestaexInterface>;
   ccp2mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp2b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp2r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp2m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp2mm: AngularFirestoreCollection<EncuestaexInterface>;
   ccp3mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp3b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp3r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp3m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp3mm: AngularFirestoreCollection<EncuestaexInterface>;
   ccp4mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp4b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp4r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp4m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp4mm: AngularFirestoreCollection<EncuestaexInterface>;
   ccp5mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp5b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp5r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp5m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp5mm: AngularFirestoreCollection<EncuestaexInterface>;
   ccp6mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp6b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp6r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp6m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp6mm: AngularFirestoreCollection<EncuestaexInterface>;
   ccp7mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp7b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp7r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp7m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp7mm: AngularFirestoreCollection<EncuestaexInterface>;
   ccp8mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp8b: AngularFirestoreCollection<EncuestaexInterface>;
   ccp8r: AngularFirestoreCollection<EncuestaexInterface>;
   ccp8m: AngularFirestoreCollection<EncuestaexInterface>;
   ccp8mm: AngularFirestoreCollection<EncuestaexInterface>;
   ccp9mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp9mm: AngularFirestoreCollection<EncuestaexInterface>;
   ccp10mb: AngularFirestoreCollection<EncuestaexInterface>;
   ccp10mm: AngularFirestoreCollection<EncuestaexInterface>;
  
 
  typeCollections: AngularFirestoreCollection<EncuestaexInterface>;
 EncuestaexDoc: AngularFirestoreDocument<EncuestaexInterface>;
 Encuestaexes: Observable<EncuestaexInterface[]>;
 Encuestaex: Observable<EncuestaexInterface>;
 
 
constructor(
 private afs: AngularFirestore) {
   this.EncuestaexCollection = this.afs.collection('Encuestaexes', ref => ref);
   this.EncuestareCollection = this.afs.collection('Encuestareps', ref => ref);
   this.EncuestatrCollection = this.afs.collection('Encuestatram', ref => ref);
   this.typeCollection = this.afs.collection('type', ref => ref);

   this.ccp1mb = this.afs.collection('Contadores').doc('Pregunta1').collection('MuyBueno/', ref => ref);
   this.ccp1b =  this.afs.collection('Contadores').doc('Pregunta1').collection('Bueno', ref => ref);
   this.ccp1r =  this.afs.collection('Contadores').doc('Pregunta1').collection('Regular', ref => ref);
   this.ccp1m =  this.afs.collection('Contadores').doc('Pregunta1').collection('Malo', ref => ref);
   this.ccp1mm = this.afs.collection('Contadores').doc('Pregunta1').collection('MuyMalo', ref => ref);
  
    this.ccp2mb = this.afs.collection('Contadores').doc('Pregunta2').collection('MuyBueno', ref => ref);
    this.ccp2b =  this.afs.collection('Contadores').doc('Pregunta2').collection('Bueno', ref => ref);
    this.ccp2r =  this.afs.collection('Contadores').doc('Pregunta2').collection('Regular', ref => ref);
    this.ccp2m =  this.afs.collection('Contadores').doc('Pregunta2').collection('Malo', ref => ref);
    this.ccp2mm = this.afs.collection('Contadores').doc('Pregunta2').collection('MuyMalo', ref => ref);
    
    this.ccp3mb = this.afs.collection('Contadores').doc('Pregunta3').collection('MuyBueno', ref => ref);
    this.ccp3b =  this.afs.collection('Contadores').doc('Pregunta3').collection('Bueno', ref => ref);
    this.ccp3r =  this.afs.collection('Contadores').doc('Pregunta3').collection('Regular', ref => ref);
    this.ccp3m =  this.afs.collection('Contadores').doc('Pregunta3').collection('Malo', ref => ref);
    this.ccp3mm=  this.afs.collection('Contadores').doc('Pregunta3').collection('MuyMalo', ref => ref);
  
    this.ccp4mb = this.afs.collection('Contadores').doc('Pregunta4').collection('MuyBueno', ref => ref);
    this.ccp4b =  this.afs.collection('Contadores').doc('Pregunta4').collection('Bueno', ref => ref);
    this.ccp4r =  this.afs.collection('Contadores').doc('Pregunta4').collection('Regular', ref => ref);
    this.ccp4m =  this.afs.collection('Contadores').doc('Pregunta4').collection('Malo', ref => ref);
    this.ccp4mm = this.afs.collection('Contadores').doc('Pregunta4').collection('MuyMalo', ref => ref);
  
    this.ccp5mb = this.afs.collection('Contadores').doc('Pregunta5').collection('MuyBueno', ref => ref);
    this.ccp5b =  this.afs.collection('Contadores').doc('Pregunta5').collection('Bueno', ref => ref);
    this.ccp5r =  this.afs.collection('Contadores').doc('Pregunta5').collection('Regular', ref => ref);
    this.ccp5m =  this.afs.collection('Contadores').doc('Pregunta5').collection('Malo', ref => ref);
    this.ccp5mm = this.afs.collection('Contadores').doc('Pregunta5').collection('MuyMalo', ref => ref);
  
    this.ccp6mb = this.afs.collection('Contadores').doc('Pregunta6').collection('MuyBueno', ref => ref);
    this.ccp6b =  this.afs.collection('Contadores').doc('Pregunta6').collection('Bueno', ref => ref);
    this.ccp6r =  this.afs.collection('Contadores').doc('Pregunta6').collection('Regular', ref => ref);
    this.ccp6m =  this.afs.collection('Contadores').doc('Pregunta6').collection('Malo', ref => ref);
    this.ccp6mm = this.afs.collection('Contadores').doc('Pregunta6').collection('MuyMalo', ref => ref);
  
    this.ccp7mb = this.afs.collection('Contadores').doc('Pregunta7').collection('MuyBueno', ref => ref);
    this.ccp7b =  this.afs.collection('Contadores').doc('Pregunta7').collection('Bueno', ref => ref);
    this.ccp7r =  this.afs.collection('Contadores').doc('Pregunta7').collection('Regular', ref => ref);
    this.ccp7m =  this.afs.collection('Contadores').doc('Pregunta7').collection('Malo', ref => ref);
    this.ccp7mm = this.afs.collection('Contadores').doc('Pregunta7').collection('MuyMalo', ref => ref);

    this.ccp8mb = this.afs.collection('Contadores').doc('Pregunta8').collection('MuyBueno', ref => ref);  
    this.ccp8b =  this.afs.collection('Contadores').doc('Pregunta8').collection('Bueno', ref => ref);
    this.ccp8r =  this.afs.collection('Contadores').doc('Pregunta8').collection('Regular', ref => ref);
    this.ccp8m =  this.afs.collection('Contadores').doc('Pregunta8').collection('Malo', ref => ref);
    this.ccp8mm = this.afs.collection('Contadores').doc('Pregunta8').collection('MuyMalo', ref => ref);

    this.ccp9mb = this.afs.collection('Contadores').doc('Pregunta9').collection('Si', ref => ref);
    this.ccp9mm = this.afs.collection('Contadores').doc('Pregunta9').collection('No', ref => ref);
  
    this.ccp10mb = this.afs.collection('Contadores').doc('Pregunta10').collection('Si', ref => ref);
    this.ccp10mm = this.afs.collection('Contadores').doc('Pregunta10').collection('No', ref => ref);
  
  
  }
 //___________________________________________________________________ Delete Encuesta
 deleteEncuestaex(Encuestaex: EncuestaexInterface) {
   this.EncuestaexDoc = this.afs.doc('Encuestaexes/' + Encuestaex.id);
   this.EncuestaexDoc.delete();
 }
 deleteType(Encuestaex: EncuestaexInterface) {
   this.EncuestaexDoc = this.afs.doc('type/' + Encuestaex.id);
   this.EncuestaexDoc.delete();
 }
 //___________________________________________________________________ Update Encuesta
 //Update registro completo
   updateType(Encuestaex: RegistroCompletoInterface) {
     this.EncuestaexDoc = this.afs.doc('type/' + Encuestaex.id);
     this.EncuestaexDoc.update(Encuestaex);
   }
  updateEncuestaex(Encuestaex: RegistroCompletoInterface) {
     this.EncuestaexDoc = this.afs.doc('Encuestaexes/' + Encuestaex.id);
     this.EncuestaexDoc.update(Encuestaex);
   }
   updateEncuestarep(Encuestaex: RegistroCompletoInterface) {
     this.EncuestaexDoc = this.afs.doc('Encuestareps/' + Encuestaex.id);
     this.EncuestaexDoc.update(Encuestaex);
   }
   updateEncuestatram(Encuestaex: RegistroCompletoInterface) {
     this.EncuestaexDoc = this.afs.doc('Encuestatram/' + Encuestaex.id);
     this.EncuestaexDoc.update(Encuestaex);
   }
//___________________________________________________________________ Add Encuesta
 addEncuestaex(Encuestaex: EncuestaexInterface) {
   // this.EncuestaexCollection.add(Encuestaex);
   this.EncuestaexCollection.doc(Encuestaex.id).set(Encuestaex);
 }
 addEncuestare(Encuestaex: EncuestaexInterface) {
   // this.EncuestaexCollection.add(Encuestaex);
   this.EncuestareCollection.doc(Encuestaex.id).set(Encuestaex);
 }
 addEncuestatr(Encuestaex: EncuestaexInterface) {
   // this.EncuestaexCollection.add(Encuestaex);
   this.EncuestatrCollection.doc(Encuestaex.id).set(Encuestaex);
 }
 addEcuescont(Encuestaex: EncuestaexInterface) {
   // this.EncuestaexCollection.add(Encuestaex);
   this.typeCollection.doc(Encuestaex.id).set(Encuestaex);
 }
 addMeta(Encuestaex: MetaInterface) {
   var MetaCollection = this.afs.collection('Meta', ref => ref);
   // this.EncuestaexCollection.add(Encuestaex);
   MetaCollection.doc('META').set(Encuestaex);
 }
 //___________________________________________________________________
 //Get collections
 //___________________________________________________________________
 getOneEncuestaex() {
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
 getmayor() {
   const refs = this.afs.collection<EncuestaexInterface>('type', ref => ref.orderBy('total ', 'desc').limit(1) );
   this.Encuestaexes = this.EncuestaexCollection.snapshotChanges().pipe(map(actions => {return actions.map(a => {
     const data = a.payload.doc.data() as EncuestaexInterface;
     const id = a.payload.doc.id;
     return { id, ...data };
   });
}));
 
   /*.snapshotChanges()
   .pipe(map(changes => {
     return changes.map(action => {
       const data = action.payload.doc.data() as EncuestaexInterface;
       data.id = action.payload.doc.id;
       return data;
     });
   }));
   return this.Encuestaexes;*/
 }
 getAllEncuestaex(): Observable<EncuestaexInterface[]> {
   this.Encuestaexes = this.typeCollection.snapshotChanges()
   .pipe(map(changes => {
     return changes.map(action => {
       const data = action.payload.doc.data() as EncuestaexInterface;
       data.id = action.payload.doc.id;
       return data;
     });
   }));
   return this.Encuestaexes;
 }
 getAllEncuesta(ide:string, ids:string): Observable<EncuestaexInterface[]> {
   this.typeCollections = this.afs.collection('type', ref => ref.where("fechaent",">=",ide).where("fechaent","<=",ids));
   this.Encuestaexes = this.typeCollections.snapshotChanges()
   .pipe(map(changes => {
     return changes.map(action => {
       const data = action.payload.doc.data() as EncuestaexInterface;
       data.id = action.payload.doc.id;
       return data;
     });
   }));
   return this.Encuestaexes;
 }
 getitem(): Observable<EncuestaexInterface[]> {
   this.Encuestaexes = this.typeCollection.snapshotChanges()
   .pipe(map(changes => {
     return changes.map(action => {
       const data = action.payload.doc.id as EncuestaexInterface;
       // data.id = action.payload.doc.id;
       return data;
     });
   }));
   return this.Encuestaexes;
 }
  //___________________________________________________________________ Collection Contadores
 getitemcoll1mb(): Observable<EncuestaexInterface[]> {
   this.Encuestaexes = this.ccp1mb.snapshotChanges()
   .pipe(map(changes => {
     return changes.map(action => {
       const data = action.payload.doc.id as EncuestaexInterface;
       // data.id = action.payload.doc.id;
       return data;
     });
   }));
   return this.Encuestaexes;
 }
 getitemcoll1b(): Observable<EncuestaexInterface[]> {
  this.Encuestaexes = this.ccp1b.snapshotChanges()
  .pipe(map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.id as EncuestaexInterface;
      // data.id = action.payload.doc.id;
      return data;
    });
  }));
  return this.Encuestaexes;
}
getitemcoll1r(): Observable<EncuestaexInterface[]> {
  this.Encuestaexes = this.ccp1r.snapshotChanges()
  .pipe(map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.id as EncuestaexInterface;
      // data.id = action.payload.doc.id;
      return data;
    });
  }));
  return this.Encuestaexes;
}
getitemcoll1m(): Observable<EncuestaexInterface[]> {
  this.Encuestaexes = this.ccp1m.snapshotChanges()
  .pipe(map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.id as EncuestaexInterface;
      // data.id = action.payload.doc.id;
      return data;
    });
  }));
  return this.Encuestaexes;
}
getitemcoll1mm(): Observable<EncuestaexInterface[]> {
  this.Encuestaexes = this.ccp1mm.snapshotChanges()
  .pipe(map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.id as EncuestaexInterface;
      // data.id = action.payload.doc.id;
      return data;
    });
  }));
  return this.Encuestaexes;
}
 //___________________________________________________________________
getitemcoll2mb(): Observable<EncuestaexInterface[]> {
  this.Encuestaexes = this.ccp2mb.snapshotChanges()
  .pipe(map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.id as EncuestaexInterface;
      // data.id = action.payload.doc.id;
      return data;
    });
  }));
  return this.Encuestaexes;
}
getitemcoll2b(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp2b.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
}
getitemcoll2r(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp2r.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
}
getitemcoll2m(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp2m.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
}
getitemcoll2mm(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp2mm.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
}
 //___________________________________________________________________
getitemcoll3mb(): Observable<EncuestaexInterface[]> {
  this.Encuestaexes = this.ccp3mb.snapshotChanges()
  .pipe(map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.id as EncuestaexInterface;
      // data.id = action.payload.doc.id;
      return data;
    });
  }));
  return this.Encuestaexes;
}
getitemcoll3b(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp3b.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
}
getitemcoll3r(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp3r.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
}
getitemcoll3m(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp3m.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
}
getitemcoll3mm(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp3mm.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
}
//___________________________________________________________________
getitemcoll4mb(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp4mb.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
}
getitemcoll4b(): Observable<EncuestaexInterface[]> {
this.Encuestaexes = this.ccp4b.snapshotChanges()
.pipe(map(changes => {
  return changes.map(action => {
    const data = action.payload.doc.id as EncuestaexInterface;
    // data.id = action.payload.doc.id;
    return data;
  });
}));
return this.Encuestaexes;
}
getitemcoll4r(): Observable<EncuestaexInterface[]> {
this.Encuestaexes = this.ccp4r.snapshotChanges()
.pipe(map(changes => {
  return changes.map(action => {
    const data = action.payload.doc.id as EncuestaexInterface;
    // data.id = action.payload.doc.id;
    return data;
  });
}));
return this.Encuestaexes;
}
getitemcoll4m(): Observable<EncuestaexInterface[]> {
this.Encuestaexes = this.ccp4m.snapshotChanges()
.pipe(map(changes => {
  return changes.map(action => {
    const data = action.payload.doc.id as EncuestaexInterface;
    // data.id = action.payload.doc.id;
    return data;
  });
}));
return this.Encuestaexes;
}
getitemcoll4mm(): Observable<EncuestaexInterface[]> {
this.Encuestaexes = this.ccp4mm.snapshotChanges()
.pipe(map(changes => {
  return changes.map(action => {
    const data = action.payload.doc.id as EncuestaexInterface;
    // data.id = action.payload.doc.id;
    return data;
  });
}));
return this.Encuestaexes;
}
//___________________________________________________________________
getitemcoll5mb(): Observable<EncuestaexInterface[]> {
  this.Encuestaexes = this.ccp5mb.snapshotChanges()
  .pipe(map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.id as EncuestaexInterface;
      // data.id = action.payload.doc.id;
      return data;
    });
  }));
  return this.Encuestaexes;
 }
 getitemcoll5b(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp5b.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 getitemcoll5r(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp5r.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 getitemcoll5m(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp5m.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 getitemcoll5mm(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp5mm.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 //___________________________________________________________________
 getitemcoll6mb(): Observable<EncuestaexInterface[]> {
  this.Encuestaexes = this.ccp6mb.snapshotChanges()
  .pipe(map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.id as EncuestaexInterface;
      // data.id = action.payload.doc.id;
      return data;
    });
  }));
  return this.Encuestaexes;
 }
 getitemcoll6b(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp6b.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 getitemcoll6r(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp6r.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 getitemcoll6m(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp6m.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 getitemcoll6mm(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp6mm.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 //___________________________________________________________________
 getitemcoll7mb(): Observable<EncuestaexInterface[]> {
  this.Encuestaexes = this.ccp7mb.snapshotChanges()
  .pipe(map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.id as EncuestaexInterface;
      // data.id = action.payload.doc.id;
      return data;
    });
  }));
  return this.Encuestaexes;
 }
 getitemcoll7b(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp7b.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 getitemcoll7r(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp7r.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 getitemcoll7m(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp7m.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 getitemcoll7mm(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp7mm.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 //___________________________________________________________________
 getitemcoll8mb(): Observable<EncuestaexInterface[]> {
  this.Encuestaexes = this.ccp8mb.snapshotChanges()
  .pipe(map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.id as EncuestaexInterface;
      // data.id = action.payload.doc.id;
      return data;
    });
  }));
  return this.Encuestaexes;
 }
 getitemcoll8b(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp8b.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 getitemcoll8r(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp8r.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 getitemcoll8m(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp8m.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 getitemcoll8mm(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp8mm.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 //___________________________________________________________________
 getitemcoll9mb(): Observable<EncuestaexInterface[]> {
  this.Encuestaexes = this.ccp9mb.snapshotChanges()
  .pipe(map(changes => {
    return changes.map(action => {
      const data = action.payload.doc.id as EncuestaexInterface;
      // data.id = action.payload.doc.id;
      return data;
    });
  }));
  return this.Encuestaexes;
 }
 getitemcoll9mm(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp9mm.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 //___________________________________________________________________
 getitemcoll10mb(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp10mb.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 getitemcoll10mm(): Observable<EncuestaexInterface[]> {
 this.Encuestaexes = this.ccp10mm.snapshotChanges()
 .pipe(map(changes => {
   return changes.map(action => {
     const data = action.payload.doc.id as EncuestaexInterface;
     // data.id = action.payload.doc.id;
     return data;
   });
 }));
 return this.Encuestaexes;
 }
 //___________________________________________________________________

 getitemtram(): Observable<EncuestaexInterface[]> {
   this.Encuestaexes = this.EncuestatrCollection.snapshotChanges()
   .pipe(map(changes => {
     return changes.map(action => {
       const data = action.payload.doc.id as EncuestaexInterface;
       // data.id = action.payload.doc.id;
       return data;
     });
   }));
   return this.Encuestaexes;
 }
 getitemrep(): Observable<EncuestaexInterface[]> {
   this.Encuestaexes = this.EncuestareCollection.snapshotChanges()
   .pipe(map(changes => {
     return changes.map(action => {
       const data = action.payload.doc.id as EncuestaexInterface;
       // data.id = action.payload.doc.id;
       return data;
     });
   }));
   return this.Encuestaexes;
 }
 getitemex(): Observable<EncuestaexInterface[]> {
   this.Encuestaexes = this.EncuestaexCollection.snapshotChanges()
   .pipe(map(changes => {
     return changes.map(action => {
       const data = action.payload.doc.id as EncuestaexInterface;
       // data.id = action.payload.doc.id;
       return data;
     });
   }));
   return this.Encuestaexes;
 }
 getiEncuestaex(id: string) {
   this.EncuestaexDoc = this.afs.doc<EncuestaexInterface>('type/${id}');
   this.Encuestaex = this.EncuestaexDoc.snapshotChanges().pipe(map(action => {
     if (action.payload.exists === false) {
       return null;
     } else {
       const data = action.payload.data().total as EncuestaexInterface;
       data.id = action.payload.id;
       return data;
     }
   }));
   return this.Encuestaex;
 }
 
}
