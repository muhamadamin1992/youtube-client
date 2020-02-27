import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginTitleComponent } from './components/login-title/login-title.component';
import { LoginSubmitComponent } from './components/login-submit/login-submit.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { LoginService } from './services/login.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    LoginTitleComponent,
    LoginSubmitComponent,
    FormControlComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
  ],
  providers: [
    LoginService,
  ]
})
export class AuthModule { }
