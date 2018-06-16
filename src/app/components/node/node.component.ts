import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css']
})
export class NodeComponent implements OnInit {

  @Input('number') number: number | string;
  constructor() { }

  ngOnInit() {
    if ((this.number as number) < 10) {
      this.number = `0${this.number}`;
    }
  }

}
