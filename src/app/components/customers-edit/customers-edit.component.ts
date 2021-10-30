import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/services/customers.service';
import { Customer } from '../../interfaces/customer';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss'],
})
export class CustomersEditComponent implements OnInit {
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  // resetting the form to empty
  reset(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  // submitting the edited form
  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customersService.update(this.form);
      this.routerService.navigate(['../..'], {
        relativeTo: this.activatedRouteService,
      });
    }
  }

  constructor(
    private customersService: CustomersService,
    private routerService: Router,
    private activatedRouteService: ActivatedRoute
  ) {}

  // matching the id in the params to customer id so it will shw in inputs
  ngOnInit(): void {
    this.activatedRouteService.params
      .pipe(
        switchMap((params) => this.customersService.getById(params.id)),
        take(1)
      )
      .subscribe((customer) => (this.form = customer));
  }
}
