import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { CartComponent } from './components/cart/cart.component'
import { MealComponent } from './components/meal/meal.component'
import { CancelComponent } from './components/cancel/cancel.component'
import { SucessComponent } from './components/sucess/sucess.component'
import { ManagementComponent } from './components/management/management.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { ProfileComponent } from './components/profile/profile.component'
import { CredentialsComponent } from './credentials/credentials.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'meal', component: MealComponent },
  { path: 'meal/:restaurant', component: MealComponent },
  { path: 'cart', component: CartComponent },
  { path: 'cancel/:orderId', component: CancelComponent },
  { path: 'success/:orderId', component: SucessComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'credentials', component: CredentialsComponent},
  { path: 'credentials/:user', component: CredentialsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
