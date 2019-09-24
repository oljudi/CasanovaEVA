import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { AdminFlota } from '../Models/admin-flota';
import { Mecanico } from '../Models/mecanico';
import { Cliente } from '../Models/cliente';

@Injectable({
  providedIn: "root"
})
export class ApoloService {
  public admFlotaCollection: AngularFirestoreCollection<AdminFlota>;
  public mecanicosCollection: AngularFirestoreCollection<Mecanico>;
  public clientesCollection: AngularFirestoreCollection<Cliente>;

  constructor(private afs: AngularFirestore) {
    this.admFlotaCollection = this.afs.collection("AdministradoresFlota",ref => ref);
    this.mecanicosCollection = this.afs.collection("Mecanicos", ref => ref);
    this.clientesCollection = this.afs.collection("Clientes", ref => ref);
  }

  addadministrador(data: AdminFlota) {
    return this.admFlotaCollection.doc(data.id_af).set(data);
  }
  addmecanico(data: Mecanico) {
    return this.mecanicosCollection.doc(data.id_mecanico).set(data);
  }
  addcliente(data: Cliente) {
    return this.clientesCollection.doc(data.id_cliente).set(data);
  }

  updateadministrador(data: AdminFlota) {
    this.admFlotaCollection.doc(data.id_af).update(data);
  }
  updatemecanico(data: Mecanico) {
    this.mecanicosCollection.doc(data.id_mecanico).update(data);
  }
  updatecliente(data: Cliente) {
    this.clientesCollection.doc(data.id_cliente).update(data);
  }

  deleteadministrador(data: string) {
    this.admFlotaCollection.doc(data).delete();
  }
  deletemecanico(data: string) {
    this.mecanicosCollection.doc(data).delete();
  }
  deletecliente(data: string) {
    this.clientesCollection.doc(data).delete();
  }

}
