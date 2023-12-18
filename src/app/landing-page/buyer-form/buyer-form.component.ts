import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Buyer } from 'src/app/models/buyer.model';
import { BuyerDetailsService } from 'src/app/services/buyer-details.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogComponent } from 'src/app/dialog/mat-dialog/mat-dialog.component';


@Component({
  selector: 'app-buyer-form',
  templateUrl: './buyer-form.component.html',
  styleUrls: ['./buyer-form.component.scss']
})
export class BuyerFormComponent {

  buyerForm: FormGroup;
  fields: {name: string, type: string, Validators: Validators, options?: any[], value?: any}[] = [
    { name: 'fullName', type: 'text', Validators: [Validators.required, Validators.maxLength(50)] },
    { name: 'gender', type: 'select', Validators: [Validators.required], options:['Female', 'Male', 'Other'] },
    { name: 'email', type: 'email', Validators: [Validators.required, Validators.email] },
    { name: 'birthday', type: 'date', Validators: [Validators.required] },
    { name: 'address', type: 'text', Validators: [Validators.required, Validators.maxLength(50)] },
    { name: 'city', type: 'text', Validators: [Validators.required, Validators.maxLength(50)] },
    { name: 'country', type: 'text', Validators: [Validators.required, Validators.maxLength(50)] },
    { name: 'hobbies', type: 'text', Validators: [Validators.required, Validators.maxLength(50)] },
    { name: 'favoriteColor', type: 'color', Validators: [Validators.required]},
    { name: 'numberOfSeats', type: 'select', Validators: [Validators.required], options: [2,3,4,5,6,7]},
    { name: 'motorType', type: 'select', Validators: [Validators.required], options:['Electric', 'Fuel'] }
  ];

  constructor(private fb: FormBuilder, private buyerDetailsService: BuyerDetailsService, public dialog: MatDialog) {
    let group: { [key: string]: any } = {};

    this.fields.forEach(field =>{
      group[field.name] = ['', field.Validators || []];
    })
    this.buyerForm = this.fb.group(group);
  }

  onSubmit() {
    if (this.buyerForm.valid){
      this.buyerDetailsService.saveData(this.buyerForm.value)
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogComponent, {
      width: '60%',
      data: { title: 'Find Your Perfect Car', 
      message: 'Thank you for sharing your preferences with us!<br> <br> We have received your details and our AI-powered matching system is now at work to find the perfect car for you. Keep an eye on your email. We will send you a personalized selection of cars that best suit your needs and desires.<br> <br> We\'re excited to help you find your dream car!', 
      url: '/landing' },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
