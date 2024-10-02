import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardComponent } from '../../components/card/card.component';
import { SugestaoService } from '../../service/sugestao.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { SugestaoInterface } from '../../intefaces/sugestao.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-sugestoes',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    CardComponent,
    MatIconModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './sugestoes.component.html',
  styleUrl: './sugestoes.component.scss',
})
export class SugestoesComponent {
  sugestaoService = inject(SugestaoService);

  textoPesquisa!: string;
  listaSugestoes: SugestaoInterface[] = [];

  ngOnInit() {
    this.sugestaoService.get().subscribe({
      next: (sugestoes: SugestaoInterface[]) => {
        this.listaSugestoes = sugestoes;
        console.log(this.listaSugestoes);
      },
      error: (erro: any) => {
        console.error('Erro: ', erro);
      },
    });
  }

  search() {
    if (this.textoPesquisa) {
      this.sugestaoService.get().subscribe((retorno) => {
        this.listaSugestoes = retorno.filter((sugestao) =>
          sugestao.titulo
            .toLowerCase()
            .includes(this.textoPesquisa.toLowerCase())
        );
      });
    } else {
      this.sugestaoService.get().subscribe((retorno) => {
        this.listaSugestoes = retorno;
      });
    }
  }
}
