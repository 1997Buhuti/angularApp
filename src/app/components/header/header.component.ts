import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Event} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  route:string="";
  constructor() { }
  @Output() event = new EventEmitter<string>()
  ngOnInit(): void {
  }

  onSelect(shoppingList: string) {
    this.route=shoppingList;
    this.event.emit(this.route);
  }
}
