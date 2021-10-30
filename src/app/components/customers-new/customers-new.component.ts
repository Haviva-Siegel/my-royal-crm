import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../interfaces/customer';
import { NgForm } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-new',
  templateUrl: './customers-new.component.html',
  styleUrls: ['./customers-new.component.scss'],
})
export class CustomersNewComponent implements OnInit {
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  // for submitting the new form
  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customersService.add(this.form);
      this.routerService.navigate(['..'], {
        relativeTo: this.ActivatedRouteService,
      });
    }
  }

  // for resetting new form
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

  constructor(
    private customersService: CustomersService,
    private routerService: Router,
    private ActivatedRouteService: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
