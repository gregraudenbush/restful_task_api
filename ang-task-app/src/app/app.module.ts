import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CreateComponentComponent } from './create-component/create-component.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CreateComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
