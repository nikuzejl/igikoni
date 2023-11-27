import { Component, ElementRef, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CartService } from 'src/app/services/cart.service'
import { HttpService } from 'src/app/services/http.service'
import { environment } from 'src/environments/environment'
import { MatDialog } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})

export class MealComponent implements OnInit {
  clickedOnAddToCart = false
  showSpinner = true
  selectedPicture: File | null = null
  meals: any[] = []
  filteredMeals: any[] = []
  formData = {
    meal: '',
    restaurant: '',
    ingredients: '',
    price: ''
  }
  restaurantName: string | null = ''

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private cartService: CartService,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.restaurantName = params.get('restaurant')
      const apiUrl = environment.serverUrl + '/api/v1/meal/' + this.restaurantName
      this.httpService.getRequest(apiUrl).subscribe(
        result => {
          this.meals = result
          this.filteredMeals = result
          this.showSpinner = false
        },
        (error) => {
          console.error(error)
        }
      )
    })
  }

  getImageElement(imageObject: any) {
    return 'data:image/png;base64,' + imageObject.data.data
  }

  addToCart(meal: any) {
    this.cartService.addToCart(meal)
    this.snackBar.open(meal.name + ': $' + meal.price + ' added to cart!', 'OK', {
      duration: 2000,
      panelClass: ['green-snackbar'],
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    })
  }

  getFilter(filter: string) {
    if (!filter) {
      this.filteredMeals = this.meals
    }
    this.filteredMeals = this.meals.filter(
      meal => meal?.name.toLowerCase().includes(filter.toLowerCase())
    )

    if(this.filteredMeals.length === 0){
      this.snackBar.open('No result match your search. Try again', '', {
        duration: 2000,
        panelClass: ['green-snackbar'],
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    }
  }

  home(){
    this.router.navigate(['/home'])
  }
  
}

