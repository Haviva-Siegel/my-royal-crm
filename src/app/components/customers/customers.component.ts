import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from '../../interfaces/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Customer[]>;
  searchTerm: string = '';

  // to get all the customers
  constructor(private customersService: CustomersService) {
    this.customers$ = this.customersService.getAll();
  }

  // to delete a customer
  async remove(id, e: Event) {
    e.preventDefault();
    if (confirm('Are you sure you want to remove this customer?')) {
      await this.customersService.remove(id);
    }
  }

  ngOnInit(): void {}
}
