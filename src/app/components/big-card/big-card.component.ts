import { Component, Input } from '@angular/core';

@Component({
  selector: 'big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent {
  @Input()
  id: string = '';
  @Input()
  photoCover: string = '';
  @Input()
  bigTitle: string = '';
  @Input()
  bigDescription: string = '';
}
