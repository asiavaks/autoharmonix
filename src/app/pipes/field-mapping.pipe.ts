import { Pipe, PipeTransform } from '@angular/core';
import { FieldMappings } from '../models/buyer.model';


@Pipe({ name: 'headerMapping' })
export class HeaderMappingPipe implements PipeTransform {

    private FIELD_MAPPINGS: FieldMappings = {
        fullName: 'Full Name',
        email: 'Email',
        birthday: 'Birthday',
        numberOfSeats: 'Number Of Seats',
        address: 'Address',
        city: 'City',
        country: 'Country',
        motorType: 'Motor Type',
        gender: 'Gender',
        hobbies: 'Hobbies',
        favoriteColor: 'Favorite Color'

    };

    transform(value: string): string {
        return this.FIELD_MAPPINGS[value] || value;
    }
}
