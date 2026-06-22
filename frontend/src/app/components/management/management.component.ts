import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  selectedRestoPicture: File | null = null
  selectedMealPicture: File | null = null
  restaurantSaved = false
  mealSaved = false
  restoFormData = {
    name: '',
    email: '',
    address: '',
    phone: ''
  }

  mealFormData = {
    meal: '',
    restaurant: '',
    ingredients: '',
    price: ''
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  onRestoFileSelected(event: any) {
    this.selectedRestoPicture = event.target.files[0] as File
  }

  onMealFileSelected(event: any) {
    this.selectedMealPicture = event.target.files[0] as File
  }

  submitRestoForm() {
    const restoFormData = new FormData()
    restoFormData.append('name', this.restoFormData.name)
    restoFormData.append('email', this.restoFormData.email)
    restoFormData.append('phone', this.restoFormData.phone)
    restoFormData.append('address', this.restoFormData.address)

    if (this.selectedRestoPicture) {
      restoFormData.append('image', this.selectedRestoPicture)
    }

    const apiUrl = environment.serverUrl + '/api/v1/restaurant/save'
    this.http.post(apiUrl, restoFormData).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response)
        this.restaurantSaved = true
      },
      (error) => {
        console.error('Error submitting form:', error)
      }
    )
  }

  submitMealForm() {
    const mealFormData = new FormData()
    mealFormData.append('meal', this.mealFormData.meal)
    mealFormData.append('restaurant', this.mealFormData.restaurant)
    mealFormData.append('ingredients', this.mealFormData.ingredients)
    mealFormData.append('price', this.mealFormData.price)

    if (this.selectedMealPicture) {
      mealFormData.append('image', this.selectedMealPicture)
    }
    const apiUrl = environment.serverUrl + '/api/v1/meal/save'
    this.http.post(apiUrl, mealFormData).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response)
        this.mealSaved = true
      },
      (error) => {
        console.error('Error submitting form:', error)
      }
    )
  }
}
