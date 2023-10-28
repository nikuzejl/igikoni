import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: any = {
    username: null,
    email: null,
    password: null
  }
  isSuccessful = false
  isSignUpFailed = false
  errorMessage = ''

  constructor(private router: Router, private authService: AuthService) { }

  onSubmit(): void {
    const { firstName, lastName, email, password } = this.form

    this.authService.register(firstName, lastName, email, password).subscribe({
      next: data => {
        this.isSuccessful = true
        this.isSignUpFailed = false
      },
      error: err => {
        this.errorMessage = err.error.message
        this.isSignUpFailed = true
      }
    })
  }

  goToLogIn() {
    this.router.navigate(['/login'])
  }

  goToHome() {
    this.router.navigate(['/home'])
  }
}
