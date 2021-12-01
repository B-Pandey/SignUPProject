import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SimpleCalculatorComponent } from './Components/simple-calculator/simple-calculator.component';
import { SiPipe } from './si.pipe';
import { HtmlIfElseComponent } from './Components/html-if-else/html-if-else.component';
import { HeaderComponent } from './Components/header/header.component';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { NewCalculatorComponent } from './Components/new-calculator/new-calculator.component';
import { ToggleButtonComponent } from './Components/toggle-button/toggle-button.component';
import { ConvertCurrencyComponent } from './Components/convert-currency/convert-currency.component';
import { NewCurrencyComponent } from './Components/new-currency/new-currency.component';
import { StudentEntryProgramComponent } from './Components/student-entry-program/student-entry-program.component';
import { StudentListComponent } from './Components/student-list/student-list.component';
import { FundTranferModule } from './model/fund-tranfer.module';
import { BookComponent } from './Components/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './Components/photos/photos.component';
import { CommentsComponent } from './Components/comments/comments.component';
import { FoodmeniaComponent } from './Components/foodmenia/foodmenia.component';
import { HomeComponent } from './Components/home/home.component';
import { AlbumComponent } from './Components/album/album.component';
const appRoutes: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SigninComponent },
  { path: 'simple-calculator', component: SimpleCalculatorComponent },
  { path: 'html-if-else', component: HtmlIfElseComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'convert-currency', component: ConvertCurrencyComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    SimpleCalculatorComponent,
    SiPipe,
    HtmlIfElseComponent,
    HeaderComponent,
    CalculatorComponent,
    NewCalculatorComponent,
    ToggleButtonComponent,
    ConvertCurrencyComponent,
    NewCurrencyComponent,
    StudentEntryProgramComponent,
    StudentListComponent,
    BookComponent,
    PhotosComponent,
    CommentsComponent,
    FoodmeniaComponent,
    HomeComponent,
    AlbumComponent,
  ],
  imports: [
    FundTranferModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
