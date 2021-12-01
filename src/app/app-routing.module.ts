import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './Components/calculator/calculator.component';
import { BookComponent } from './Components/book/book.component';
import { PhotosComponent } from './Components/photos/photos.component';
import { ConvertCurrencyComponent } from './Components/convert-currency/convert-currency.component';
import { HeaderComponent } from './Components/header/header.component';
import { HtmlIfElseComponent } from './Components/html-if-else/html-if-else.component';
import { LoginComponent } from './Components/login/login.component';
import { NewCalculatorComponent } from './Components/new-calculator/new-calculator.component';
import { NewCurrencyComponent } from './Components/new-currency/new-currency.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SimpleCalculatorComponent } from './Components/simple-calculator/simple-calculator.component';
import { StudentEntryProgramComponent } from './Components/student-entry-program/student-entry-program.component';
import { ToggleButtonComponent } from './Components/toggle-button/toggle-button.component';
import { CommentsComponent } from './Components/comments/comments.component';
import { FoodmeniaComponent } from './Components/foodmenia/foodmenia.component';
import { HomeComponent } from './Components/home/home.component';
import { SavingAccount } from './model/SavingAccount';
import { StudentListComponent } from './Components/student-list/student-list.component';
import { AlbumComponent } from './Components/album/album.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'books', component: BookComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'myComments', component: CommentsComponent },
  { path: 'currencyConvert1', component: ConvertCurrencyComponent },
  { path: 'home', component: HomeComponent },
  { path: 'app-html-if-else', component: HtmlIfElseComponent },
  { path: 'app-saving', component: SavingAccount },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SigninComponent },
  { path: 'simple-calculator', component: SimpleCalculatorComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'new-calculator', component: NewCalculatorComponent },
  { path: 'toggle-button', component: ToggleButtonComponent },
  { path: 'app-new-currency', component: NewCurrencyComponent },
  { path: 'student-entry-program', component: StudentEntryProgramComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'foodmenia', component: FoodmeniaComponent },
  { path: 'app-student-list', component: StudentListComponent },
  { path: 'app-album', component: AlbumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
