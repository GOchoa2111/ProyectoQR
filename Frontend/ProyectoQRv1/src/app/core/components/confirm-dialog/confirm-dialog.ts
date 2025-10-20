import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  template: `
    <h2 mat-dialog-title>{{ data?.title || 'Confirmar' }}</h2>
    <mat-dialog-content>{{ data?.message || '¿Estás seguro?' }}</mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onCancel()">Cancelar</button>
      <button mat-flat-button color="primary" (click)="onConfirm()">Aceptar</button>
    </mat-dialog-actions>
  `,
  imports: [CommonModule, MatDialogModule, MatButtonModule]
})
export class ConfirmDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onConfirm() { this.dialogRef.close(true); }
  onCancel() { this.dialogRef.close(false); }
}
