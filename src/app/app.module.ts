import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsersComponent } from './components/users/users.component';

// Services
import { UsersService } from './services/users.service';
import { TodosService } from './services/todos.service';
import { httpInceptorsProviders } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    httpInceptorsProviders,
    UsersService,
    TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
