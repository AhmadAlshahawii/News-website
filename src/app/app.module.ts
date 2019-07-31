import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms'
import { NewsService } from './news.service';
import { NavService } from './nav.service';
import { CommonModule } from "@angular/common"

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SearchPipe,
    FooterComponent,    
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,CommonModule
  ],
  providers: [NewsService, NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
