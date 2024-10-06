import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SugestaoInterface } from '../../intefaces/sugestao.interface';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SugestaoService } from '../../service/sugestao.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  comentarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sugestaoService: SugestaoService,
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public sugestao: SugestaoInterface
  ) {
    this.comentarioForm = this.fb.group({
      texto: ['', Validators.required],
    });

    if (!this.sugestao.comentarios) {
      this.sugestao.comentarios = [];
    }
  }

  fecharModal(): void {
    this.dialogRef.close();
  }

  enviarComentario(): void {
    if (this.comentarioForm.valid) {
      const novoComentario = {
        id: 0,
        texto: this.comentarioForm.value.texto,
        dataEnvio: new Date(),
      };

      this.sugestaoService
        .salvarComentario(this.sugestao.id, novoComentario)
        .subscribe({
          next: (response) => {
            this.sugestao.comentarios.push(response);
            this.comentarioForm.reset();
          },
          error: (error) => {
            console.error('Erro ao salvar o comentário:', error);
          },
        });
    }
  }

  cancelarComentario(): void {
    this.comentarioForm.reset();
  }
}
