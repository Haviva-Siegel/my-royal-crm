import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './components/register/register.component';

// components routs
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  // protecting routs
  { path: 'login', canActivate: [AuthGuard], component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      // protected routs
      { path: '', redirectTo: '/dashboard/customers', pathMatch: 'full' },
      { path: 'customers', component: CustomersComponent },
      { path: 'customers/new', component: CustomersNewComponent },
      { path: 'customers/:id', component: CustomersDetailsComponent },
      { path: 'customers/:id/edit', component: CustomersEditComponent },
      { path: 'contacts', component: ContactsComponent },
    ],
  },
  // unknown paths
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
