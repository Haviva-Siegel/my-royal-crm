import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageHeaderComponent } from './utils/page-header/page-header.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TextCapitalPipe } from './pipes/text-capital.pipe';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';

import { environment } from 'src/environments/environment';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { CustomersDetailsComponent } from './components/customers-details/customers-details.component';
import { FilterArrayOfObjectsPipe } from './pipes/filter-array-of-objects.pipe';
import { LoginComponent } from './components/login/login.component';
import { SignWithGoogleDirective } from './directives/sign-with-google.directive';
import { LogoutDirective } from './directives/logout.directive';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    PageHeaderComponent,
    CustomersComponent,
    ContactsComponent,
    PageNotFoundComponent,
    TextCapitalPipe,
    CustomersNewComponent,
    CustomersEditComponent,
    CustomersDetailsComponent,
    FilterArrayOfObjectsPipe,
    LoginComponent,
    SignWithGoogleDirective,
    LogoutDirective,
    DashboardComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
