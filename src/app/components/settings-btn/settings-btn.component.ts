import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-settings-btn',
  templateUrl: './settings-btn.component.html',
  styleUrls: ['./settings-btn.component.scss']
})
export class SettingsBtnComponent {

  @Output() public criteriaToggle: EventEmitter<void> = new EventEmitter();

  constructor() { }

  public onCriteriaToggle(event: Event): void {
    event.preventDefault();
    this.criteriaToggle.emit();
  }

}
