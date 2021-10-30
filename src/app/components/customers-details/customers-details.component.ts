import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.scss'],
})
export class CustomersDetailsComponent implements OnInit {
  customer$: Observable<Customer>;
  constructor(
    private activatedRouteService: ActivatedRoute,
    private customersService: CustomersService
  ) {
    //  matching the customer id in the params to the customer id shown
    this.customer$ = this.activatedRouteService.params.pipe(
      switchMap((params) => {
        return this.customersService.getById(params.id);
      })
    );
  }

  ngOnInit(): void {}
}
