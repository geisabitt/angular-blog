import { Component } from '@angular/core';

import { dataFake } from '../../components/data/dataFake';
import { Article } from '../../components/types/article';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  articles: Article[] = dataFake;
  displaySmallCard: number = 4;
  displayBigCard: number = 1;
  startBig: number = 0;
  startSmall: number = 1;

  nextPage() {
    if (this.articles.length > this.displaySmallCard) {
      this.displayBigCard += 4;
      this.displaySmallCard += 4;
      this.startBig += 4;
      this.startSmall += 4;
    }
  }
  prevPage() {
    if (this.displayBigCard !== 1) {
      this.displayBigCard -= 4;
      this.displaySmallCard -= 4;
      this.startBig -= 4;
      this.startSmall -= 4;
    }
  }
}
