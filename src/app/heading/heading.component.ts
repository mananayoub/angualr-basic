import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  name = 'Angular';

  userName = false;

  toApply = "red bold"
  applyRed = false;

  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    console.log("Clicked")
  }

}
