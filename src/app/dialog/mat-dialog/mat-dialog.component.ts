import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-dialog',
  templateUrl: './mat-dialog.component.html',
  styleUrls: ['./mat-dialog.component.scss']
})
export class MatDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<MatDialogComponent>, private router: Router) { }

  closeDialogAndNavigate(url: string): void {
    this.dialogRef.close();
    this.router.navigate([url]);
  }
}
