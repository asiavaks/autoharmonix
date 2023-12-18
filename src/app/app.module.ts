import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { BuyerFormComponent } from './landing-page/buyer-form/buyer-form.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DataTableComponent } from './dashboard/data-table/data-table.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { HeaderMappingPipe } from 'src/app/pipes/field-mapping.pipe';
import { PieChartComponent } from './dashboard/graphs/pie-chart/pie-chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ColumnChartComponent } from './dashboard/graphs/column-chart/column-chart.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogComponent } from './dialog/mat-dialog/mat-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    BuyerFormComponent,
    DashboardComponent,
    HeaderMappingPipe,
    DataTableComponent,
    PieChartComponent,
    ColumnChartComponent,
    MatDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgApexchartsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
