import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  @Input() public label: string;
  @Input() public value: string;
  @Input() public type: string = 'text';
  @Output() public update: EventEmitter<String> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public onInput(): void {
    this.update.emit(this.value);
  }

}
