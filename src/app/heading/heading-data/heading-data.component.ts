import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading-data',
  templateUrl: './heading-data.component.html',
  styleUrls: ['./heading-data.component.scss']
})
export class HeadingDataComponent implements OnInit {

  firstName = "Luffy"
  lastName = "D Monkey"
  companyName = "Pirate"
  email = "monkeyDLuffy@ocean.com"
  showDetails: boolean = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
