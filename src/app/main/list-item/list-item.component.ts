import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {
  @Input() personItem;
  @Output() onClick = new EventEmitter<any>();
  //@Output() nome = new EventEmitter<tipo de dado que vamos passar, string, number>();
  
  constructor() { }

  ngOnInit() {
  }

  clicouNaDiv() {
    this.onClick.emit({nome: "Kenzo"});
  }
}