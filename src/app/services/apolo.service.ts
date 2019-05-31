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

  addAdministrador(data: AdminFlota) {
    return this.admFlotaCollection.doc(data.id_AF).set(data);
  }
  addMecanico(data: Mecanico) {
    return this.mecanicosCollection.doc(data.id_Mecanico).set(data);
  }
  addCliente(data: Cliente) {
    return this.clientesCollection.doc(data.id_Cliente).set(data);
  }

  updateAdministrador(data: AdminFlota) {
    this.admFlotaCollection.doc(data.id_AF).update(data);
  }
  updateMecanico(data: Mecanico) {
    this.mecanicosCollection.doc(data.id_Mecanico).update(data);
  }
  updateCliente(data: Cliente) {
    this.clientesCollection.doc(data.id_Cliente).update(data);
  }

  deleteAdministrador(data: AdminFlota) {
    this.admFlotaCollection.doc(data.id_AF).delete();
  }
  deleteMecanico(data: Mecanico) {
    this.mecanicosCollection.doc(data.id_Mecanico).delete();
  }
  deleteCliente(data: Cliente) {
    this.clientesCollection.doc(data.id_Cliente).delete();
  }

}
