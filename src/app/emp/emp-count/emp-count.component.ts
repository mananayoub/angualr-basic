import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { never } from 'rxjs';

@Component({
  selector: 'app-emp-count',
  templateUrl: './emp-count.component.html',
  styleUrls: ['./emp-count.component.scss']
})
export class EmpCountComponent implements OnInit {

  onBValue: string = "All"

  @Output()
  onBChange: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  all: any;

  @Input()
  male: any;

  @Input()
  female: any;

  onChange() {
    this.onBChange.emit(this.onBValue);
    console.log(this.onBValue)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
