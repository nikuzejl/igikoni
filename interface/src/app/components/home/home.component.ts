import { Component, OnInit } from '@angular/core'
import { HttpService } from 'src/app/services/http.service'
import { CartService } from 'src/app/services/cart.service'
import { Router } from '@angular/router'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string = ''
  signedIn = false
  showSpinner = true
  imageObject: any
  filterRestaurants: any[] = []
  restaurants: any[] = []
  meals: any[] = []
  searchQuery: string = ''
  autocompleteItems: any[] = []
  cartItemCount: number = 0
  dataDisplay: any

  constructor(
    private router: Router,
    private cartService: CartService,
    private httpService: HttpService
  ) { }
  ngOnInit(): void {
    this.cartItemCount = this.cartService.getMealsInCart().length
    this.getAllRestaurants()
    this.getAllMeals()
  }

  getFilter(filter: string) {
    if (!filter) {
      this.filterRestaurants = this.restaurants
    }
    this.filterRestaurants = this.restaurants.filter(
      resto => resto?.name.toLowerCase().includes(filter.toLowerCase())
    )
  }

  navigateToCart() {
    this.router.navigate(['/cart'])
  }

  navigateToMeals(restaurantName: string) {
    this.router.navigate(['/meal/' + restaurantName])
  }

  get filteredAutocompleteItems(): string[] {
    if (this.searchQuery) {
      return this.autocompleteItems.filter(item =>
        item.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
    return []
  }

  selectAutocompleteItem(item: string) {
    this.searchQuery = item
  }

  getAllRestaurants(): void {
    const apiUrl = environment.serverUrl + '/api/v1/restaurant/getAll'
    this.httpService.getRequest(apiUrl).subscribe(
      (result) => {
        this.restaurants = result
        this.filterRestaurants = result
        this.showSpinner = false
      },
      (error) => {
        console.error(error)
      }
    )
  }

  getAllMeals(): void {
    const apiUrl = environment.serverUrl + '/api/v1/meal/getAll'
    this.httpService.getRequest(apiUrl).subscribe(
      (result) => {
        this.meals = result
        this.meals.forEach(element => this.autocompleteItems.push(element.meal))
      },
      (error) => {
        console.error(error)
      }
    )
  }

  getImageElement(imageObject: any) {
    return 'data:image/png;base64,' + imageObject.data.data
  }

  home(){
    this.router.navigate(['/'])
  }
}