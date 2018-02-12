import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { BookComponent } from './book/book.component';
import { ChatComponent } from './chat/chat.component';
import { BookAddComponent } from './book/book-add/book-add.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'email-login', component: EmailComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'book', component: BookComponent, canActivate: [AuthService]},
  // { path: 'chat', component: ChatComponent, canActivate: [AuthService]},
  { path: 'add-book', component: BookAddComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
