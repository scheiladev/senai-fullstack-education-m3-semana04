import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-sugestao',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './sugestao.component.html',
  styleUrl: './sugestao.component.scss',
})
export class SugestaoComponent {}
