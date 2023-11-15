import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  mealsInCart: any[] = []
  cartCountSize: any[] = ['0.5em']
  iconSizes: string = '0.5em';
  totalPrice: number = 0

  addToCart(meal: any) {
    this.mealsInCart.push(meal)
    this.increaseIconSize()
  }

  getMealsInCart(): any[] {
    this.mealsInCart
    return this.mealsInCart
  }

  getTotalAmount() {
    this.mealsInCart.forEach(item => this.totalPrice += Number(item.price))
    return this.totalPrice
  }

  async increaseIconSize() {
    this.iconSizes = '1em'
    this.cartCountSize[0] = '1em'
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.iconSizes = '0.5em'
    this.cartCountSize[0] = '0.5em'
  }
} 