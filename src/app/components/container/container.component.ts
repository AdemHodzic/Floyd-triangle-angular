import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentService } from '../../services/content.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  animations: [
    trigger('animated', [
      transition('void <=> *', [
        style({ transform: 'scale(0.1)', opacity: 0}),
        group([
          animate('1s ease', style({
            transform: 'scale(1)',
            opacity: 1
          }))
        ])
      ]),
    ])
  ]
})
export class ContainerComponent implements OnInit {

  numbers: number[][] = [];
  height: number;
  constructor(
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.contentService.getNumber()
      .subscribe(data => this.height = data);
    this.createArray();
  }

  private createArray() {

    let counter = 1;
    let value = 0;
    for (let i = 0; i < this.height; i++) {
      this.numbers[i] = [];
      for(let j = 0; j < counter; j++) {
        this.numbers[i][j] = ++value;
      }
      counter++;
    }

    console.log(this.numbers);

  }

}
