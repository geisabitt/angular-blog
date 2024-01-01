import { Component, Input } from '@angular/core';

@Component({
  selector: 'small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
})
export class SmallCardComponent {
  @Input()
  id: string = '';
  @Input()
  smallPhotoCover: string = '';
  @Input()
  smallCardTitle: string = '';
  @Input()
  smallCardDescription: string = '';
}
