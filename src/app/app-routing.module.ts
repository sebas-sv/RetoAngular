import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CreateemployerComponent } from './features/createemployer/createemployer.component';
// Components
import { ViewemployerComponent } from './features/viewemployer/viewemployer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view', component: ViewemployerComponent },
  { path: 'create', component: CreateemployerComponent },
  { path: 'update/:id', component: CreateemployerComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
