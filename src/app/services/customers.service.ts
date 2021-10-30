import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersRef: AngularFirestoreCollection<Customer>;
  customers$: Observable<Customer[]>;

  constructor(private afs: AngularFirestore) {
    this.customersRef = this.afs.collection('customers', (ref) =>
      ref.orderBy('firstName', 'asc')
    );
    this.customers$ = this.customersRef
      .valueChanges({ idField: 'id' })
      .pipe(shareReplay(1));
  }

  // adding customer
  add(customer: Customer) {
    return this.customersRef.add(customer);
  }

  // removing customer
  remove(id: string) {
    this.customersRef.doc(id).delete();
  }

  // getting all customers
  getAll() {
    return this.customers$;
  }

  // finding customer by id
  getById(id: string) {
    return this.customersRef.doc<Customer>(id).valueChanges({ idField: 'id' });
  }

  // updating customer
  update({ id, ...customer }: Customer) {
    return this.customersRef.doc<Customer>(id).update(customer);
  }
}
