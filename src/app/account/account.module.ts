import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { TextInputComponent } from './components/textinput/textinput.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
const routes: Routes = [
  {
    path: '',
    component: NavbarComponent
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    NavbarComponent,
    SigninComponent,
    RegisterComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule
  ],
  exports: [
    NavbarComponent,
    SigninComponent,
    RegisterComponent
  ]
})
export class AccountModule { }
