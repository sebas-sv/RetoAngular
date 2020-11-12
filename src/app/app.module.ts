import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material
import { AppMaterialModule } from './app-material/app-material.module';
// HttpClient
import { HttpClientModule } from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormEmployerComponent } from './components/form-employer/form-employer.component';
// Features
import { ViewemployerComponent } from './features/viewemployer/viewemployer.component';
import { CreateemployerComponent } from './features/createemployer/createemployer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //Components
    TableComponent,
    NotfoundComponent,
    FormEmployerComponent,
    //Features
    ViewemployerComponent,
    CreateemployerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Material
    AppMaterialModule,
    //HttpClient
    HttpClientModule,
  ],
  entryComponents: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
