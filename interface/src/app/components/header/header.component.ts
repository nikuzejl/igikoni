import { Component, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'
import { CartService } from 'src/app/services/cart.service'
import { StorageService } from 'src/app/services/storage.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() filter = new EventEmitter<string>()
  showPopup = false
  user: any
  signedIn = false
  imageObject: any
  restaurants: any[] = []
  meals: any[] = []
  searchQuery: string = ''
  autocompleteItems: any[] = []
  cartItemCount: number = 0
  cartItems: any[] = []
  dt: any
  dataDisplay: any

  private roles: string[] = []
  isLoggedIn = false
  showAdminBoard = false
  showModeratorBoard = false
  username?: string

  constructor(private router: Router,
    private cartService: CartService,
    private storageService: StorageService
  ) {
    this.cartService.mealsInCart = this.cartItems
  }
  ngOnInit(): void {
    this.cartItemCount = this.cartService.getMealsInCart().length
    this.isLoggedIn = this.storageService.isLoggedIn()

    if (this.isLoggedIn) {
      const user = this.storageService.getUser()
      this.user = user
      this.roles = user.roles

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN')
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR')
    }
  }

  navigateToCart() {
    this.router.navigate(['/cart'])
  }

  home(){
    this.router.navigate(['/home'])
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

  filterResults(filter: any) {
    console.log(filter)
    this.filter.emit(filter)
  }

  profile(){
    this.router.navigate(['/credentials/' + this.user])
  }
}
