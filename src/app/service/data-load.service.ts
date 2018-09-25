import { Injectable } from '@angular/core';
import {Contact} from '../DataModel/contact'

@Injectable({
  providedIn: 'root'
})
export class DataLoadService {

  constructor() { }

  findContactById(id): Contact {
    const contact = new Contact();
    contact.id = 3;
    contact.firstName = 'Julien';
    contact.lastName = 'WANG';
    return contact;
  }
}
