import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  dateFormat: string = 'dd/MM/yyyy';
  contacts: Contact[] = [];

  // get all the contacts via service
  constructor(private contactsService: ContactsService) {
    this.contacts = this.contactsService.getAll();
  }

  ngOnInit(): void {}
}
