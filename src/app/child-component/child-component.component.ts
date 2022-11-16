import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  @Output() childBoolValue: EventEmitter<boolean> = new EventEmitter();
  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  updateStudyInfo() {
    this.childBoolValue.emit(true);
    this.parentFun.emit();
  }

}
