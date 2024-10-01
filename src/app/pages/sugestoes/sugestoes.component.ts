import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-sugestoes',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CardComponent],
  templateUrl: './sugestoes.component.html',
  styleUrl: './sugestoes.component.scss',
})
export class SugestoesComponent {
  listaSugestoes: any[] = [
    {
      id: '01',
      titulo: 'Sugestão 01',
      mensagem: 'Loren ipsun...',
      autor: 'Scheila Stihler',
    },
    {
      id: '02',
      titulo: 'Sugestão 02',
      mensagem: 'Loren ipsun...',
      autor: 'Scheila Stihler',
    },
    {
      id: '03',
      titulo: 'Sugestão 03',
      mensagem: 'Loren ipsun...',
      autor: 'Scheila Stihler',
    },
    {
      id: '04',
      titulo: 'Sugestão 01',
      mensagem: 'Loren ipsun...',
      autor: 'Scheila Stihler',
    },
    {
      id: '05',
      titulo: 'Sugestão 02',
      mensagem: 'Loren ipsun...',
      autor: 'Scheila Stihler',
    },
    {
      id: '06',
      titulo: 'Sugestão 03',
      mensagem: 'Loren ipsun...',
      autor: 'Scheila Stihler',
    },
  ];
}
