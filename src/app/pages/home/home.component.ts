import { Component } from '@angular/core';

import { dataFake } from '../../components/data/dataFake';
import { Article } from '../../components/types/article';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  artigos: Article[] = dataFake;
  displaySmallCard: number = 4;
  displayBigCard: number = 1;

  constructor() {
    console.log(this.artigos.length)
  }
}
