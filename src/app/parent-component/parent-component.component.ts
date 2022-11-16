import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  childBoolValue!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  parentFunOne(e: boolean) {
    console.log('childBoolValue: ', this.childBoolValue);
    console.log('event: ', e);
    debugger;
    this.childBoolValue = e;
    console.log('this.childBoolValue: ', this.childBoolValue);
  }

  parentFun() {
    debugger;
    if(this.childBoolValue) {
      alert('Hey there...');
    }
  }
}
