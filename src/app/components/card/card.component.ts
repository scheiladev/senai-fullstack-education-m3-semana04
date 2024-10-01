import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() elemento:
    | {
        titulo: string;
        mensagem: string;
        autor: string;
      }
    | undefined;
}
