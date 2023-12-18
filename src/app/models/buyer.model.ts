export interface Buyer {
    fullName: string;
    gender: 'Female' | 'Male' | 'Other';
    email: string;
    birthday: Date;
    motorType: 'Electric' | 'Fuel';
    numberOfSeats: number;
    hobbies: string;
    favoriteColor: string;
    address: string;
    city: string;
    country: string;
}


export interface SaveResponse {
    status: string;
    message: string;
}

export interface FieldMappings {
    [key: string]: string;
}

// Fuel/Electricity: amount of submissions
export interface MotorTypeData {
    [key: string]: number;
}

// city: amount of submissions
export interface PopularCitiesData {
    [key: string]: number;
}

