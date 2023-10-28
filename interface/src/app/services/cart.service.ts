import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  mealsInCart: any[] = []
  totalPrice: number = 0

  addToCart(meal: any) {
    this.mealsInCart.push(meal)
  }

  getMealsInCart(): any[] {
    this.mealsInCart
    return this.mealsInCart
  }

  getTotalAmount() {
    this.mealsInCart.forEach(item => this.totalPrice += Number(item.price))
    return this.totalPrice
  }
} 