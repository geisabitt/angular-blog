import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { dataFake } from '../../components/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  contentPhotoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
      this.setValuesToComponent(this.id!);
    });
  }
  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id === id)[0];
    this.contentPhotoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }
}
