import { Component, OnInit } from '@angular/core';
import { DataLoadService } from '../service/data-load.service';
import { Contact } from '../DataModel/contact';

@Component({
  selector: 'app-show-content',
  templateUrl: './show-content.component.html',
  styleUrls: ['./show-content.component.css']
})
export class ShowContentComponent implements OnInit {

  loadedContact: Contact;

  constructor(private dataLoadService: DataLoadService) { }

  ngOnInit() {
    this.loadedContact = this.dataLoadService.findContactById(3);
  }

}
