import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {

  number: number;
  incorrect = false;

  constructor(
    private contentService: ContentService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    if (this.number > 2 && this.number < 11) {
      this.incorrect = false;
      this.contentService.setNumber(this.number);
      this.router.navigate(['/container'])
    } else {
      this.incorrect = true;
    }

  }
}
