import { Injectable } from '@angular/core';
import { Buyer, FieldMappings, SaveResponse, MotorTypeData, PopularCitiesData } from '../models/buyer.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ChartInput } from '../models/charts.model';


const buyersJson: string = '[{"fullName": "Name_27", "gender": "Female", "email": "user33@example.com", "birthday": "1974-03-12", "motorType": "Fuel", "numberOfSeats": 7, "hobbies": "Cooking", "favoriteColor": "#FF5733", "address": "Address_98", "city": "Jerusalem", "country": "Israel"}, {"fullName": "Name_92", "gender": "Female", "email": "user99@example.com", "birthday": "1981-03-10", "motorType": "Fuel", "numberOfSeats": 5, "hobbies": "Photography", "favoriteColor": "#FF5733", "address": "Address_24", "city": "Eilat", "country": "Israel"}, {"fullName": "Name_83", "gender": "Male", "email": "user7@example.com", "birthday": "1993-05-05", "motorType": "Electric", "numberOfSeats": 2, "hobbies": "Cooking", "favoriteColor": "#FFC300", "address": "Address_56", "city": "Tel Aviv", "country": "Israel"}, {"fullName": "Name_61", "gender": "Male", "email": "user89@example.com", "birthday": "1976-05-03", "motorType": "Electric", "numberOfSeats": 3, "hobbies": "Photography", "favoriteColor": "#FFC300", "address": "Address_38", "city": "Tel Aviv", "country": "Israel"}, {"fullName": "Name_9", "gender": "Other", "email": "user96@example.com", "birthday": "1992-10-25", "motorType": "Fuel", "numberOfSeats": 5, "hobbies": "Photography", "favoriteColor": "#FFC300", "address": "Address_31", "city": "Eilat", "country": "Israel"}, {"fullName": "Name_57", "gender": "Other", "email": "user48@example.com", "birthday": "1992-07-25", "motorType": "Electric", "numberOfSeats": 2, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_42", "city": "Nazareth", "country": "Israel"}, {"fullName": "Name_88", "gender": "Other", "email": "user13@example.com", "birthday": "1977-07-03", "motorType": "Fuel", "numberOfSeats": 6, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_23", "city": "Beersheba", "country": "Israel"}, {"fullName": "Name_100", "gender": "Other", "email": "user53@example.com", "birthday": "2000-07-10", "motorType": "Fuel", "numberOfSeats": 4, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_51", "city": "Beersheba", "country": "Israel"}, {"fullName": "Name_49", "gender": "Other", "email": "user5@example.com", "birthday": "1971-07-08", "motorType": "Electric", "numberOfSeats": 6, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_11", "city": "Beersheba", "country": "Israel"}, {"fullName": "Name_78", "gender": "Other", "email": "user47@example.com", "birthday": "1989-04-19", "motorType": "Electric", "numberOfSeats": 5, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_61", "city": "Haifa", "country": "Israel"}, {"fullName": "Name_87", "gender": "Other", "email": "user78@example.com", "birthday": "1971-02-04", "motorType": "Fuel", "numberOfSeats": 7, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_31", "city": "Tiberias", "country": "Israel"}, {"fullName": "Name_82", "gender": "Other", "email": "user41@example.com", "birthday": "1980-03-24", "motorType": "Electric", "numberOfSeats": 4, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_32", "city": "Eilat", "country": "Israel"}, {"fullName": "Name_69", "gender": "Other", "email": "user94@example.com", "birthday": "1979-08-16", "motorType": "Electric", "numberOfSeats": 3, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_33", "city": "Jerusalem", "country": "Israel"}, {"fullName": "Name_9", "gender": "Other", "email": "user34@example.com", "birthday": "1983-08-17", "motorType": "Electric", "numberOfSeats": 2, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_76", "city": "Tiberias", "country": "Israel"}, {"fullName": "Name_35", "gender": "Other", "email": "user84@example.com", "birthday": "1977-09-02", "motorType": "Fuel", "numberOfSeats": 6, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_26", "city": "Tel Aviv", "country": "Israel"}, {"fullName": "Name_84", "gender": "Other", "email": "user17@example.com", "birthday": "1974-02-10", "motorType": "Fuel", "numberOfSeats": 5, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_92", "city": "Jerusalem", "country": "Israel"}, {"fullName": "Name_36", "gender": "Other", "email": "user69@example.com", "birthday": "1989-02-17", "motorType": "Fuel", "numberOfSeats": 6, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_64", "city": "Beersheba", "country": "Israel"}, {"fullName": "Name_57", "gender": "Other", "email": "user47@example.com", "birthday": "1983-04-24", "motorType": "Fuel", "numberOfSeats": 2, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_88", "city": "Jerusalem", "country": "Israel"}, {"fullName": "Name_99", "gender": "Other", "email": "user19@example.com", "birthday": "2000-03-03", "motorType": "Fuel", "numberOfSeats": 5, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_36", "city": "Jerusalem", "country": "Israel"}, {"fullName": "Name_87", "gender": "Other", "email": "user59@example.com", "birthday": "1995-01-02", "motorType": "Fuel", "numberOfSeats": 5, "hobbies": "Reading", "favoriteColor": "#FFC300", "address": "Address_23", "city": "Eilat", "country": "Israel"}]'


const exampleBuyers: Buyer[] = JSON.parse(buyersJson);

const LOCAL_STORAGE_NAME: string = 'buyers';
@Injectable({
  providedIn: 'root'
})
export class BuyerDetailsService {
  private buyersData: Buyer[] = [];
  private dataSubject: BehaviorSubject<Buyer[]> = new BehaviorSubject<Buyer[]>([])
  constructor() {
    this.loadInitialData();
  }

  private loadInitialData() {
    let storeData = localStorage.getItem(LOCAL_STORAGE_NAME);
    if (!storeData) {
      storeData = buyersJson;
    }
    if (storeData) {
      this.buyersData = JSON.parse(storeData);
      this.dataSubject.next(this.buyersData);
    }
  }

  saveData(data: Buyer): Observable<SaveResponse> {
    try {
      console.log(data);
      
      this.buyersData.push(data);
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(this.buyersData));
      this.dataSubject.next(this.buyersData);
      return of({ status: 'success', message: 'Data saved successfuly' })
    } catch (error) {
      return of({ status: 'error', message: 'Error saving data' })
    }
  }

  getData(): Observable<Buyer[]> {
    return this.dataSubject.asObservable();
  }

  getPopularCities(): Observable<PopularCitiesData> {
    const cityCounts = this.buyersData.reduce((acc: PopularCitiesData, curr: Buyer) => {
      const city = curr.city;
      acc[city] = (acc[city] || 0) + 1;
      return acc;
    }, {})

    const sortedCities = Object.entries(cityCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    const topCitiesObj = sortedCities.reduce((obj: PopularCitiesData, [city, count]) => {
      obj[city] = count;
      return obj;
    }, {});

    return of(topCitiesObj);
  }

  getMotorTypeData(): Observable<MotorTypeData> {
    const motorTypeReduce = this.buyersData.reduce((acc: MotorTypeData, curr: Buyer) => {
      acc[curr.motorType] = (acc[curr.motorType] || 0) + 1;
      return acc;
    }, {})

    return of(motorTypeReduce);
  }


  getMotorTypeByGender(): Observable<ChartInput> {
    const motorTypeCounts: { [gender: string]: {Electric: number; Fuel: number}} = {};
    this.buyersData.forEach(buyer => {
      if (!motorTypeCounts[buyer.gender]) motorTypeCounts[buyer.gender] = {Electric: 0, Fuel: 0};
      motorTypeCounts[buyer.gender][buyer.motorType]++
    });

    const chartInput: ChartInput = {
      seriesData: [],
      labels: Object.keys(motorTypeCounts)
    };

    ['Electric', 'Fuel'].forEach(type => {
      const seriesDataItem = {
        name: type,
        data: chartInput.labels.map(label => motorTypeCounts[label][type as 'Electric' | 'Fuel'])
      }
      chartInput.seriesData.push(seriesDataItem);
    });

    return of(chartInput);


  }
}
