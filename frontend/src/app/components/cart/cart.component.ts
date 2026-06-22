import { CartService } from '../../services/cart.service'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { loadStripe } from '@stripe/stripe-js'
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = []
  mealNamesAndQuantities = new Map<string, number>()
  totalPrice: number = 0
  placedOrder: boolean = false
  orderId: any | undefined
  stripePromise = loadStripe(environment.STRIPE_PUBLIC_KEY)
  showSpinner = false

  constructor(private cartService: CartService, private http: HttpClient) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getMealsInCart()
    this.cartItems.forEach(item => {
      this.totalPrice += Number(item.price)
      const quant = this.mealNamesAndQuantities.get(item.name)
      if (quant == null) {
        this.mealNamesAndQuantities.set(item.name, 1)
      }
      else {
        this.mealNamesAndQuantities.set(item.name, quant + 1)
      }
    })
  }

  getOrderSummary(meals: any[]) {
    let concatenatedString = ""
    for (const meal of meals) {
      concatenatedString += meal.name + ", "
    }

    return concatenatedString.slice(0, -2)
  }

  removeItem(removedItem: any) {
    const itemIdx = this.cartItems.findIndex((item) => item.price === removedItem.price)
    this.cartItems.splice(itemIdx, 1)
    this.totalPrice -= removedItem.price
  }

  async pay(productName: any, amount: number, quantity: number): Promise<void> {
    const mapObject: Record<string, number> = Object.fromEntries(this.mealNamesAndQuantities)

    this.http
      .post(environment.serverUrl + '/api/v1/order/submit',
        {
          email: "test@test.com",
          meals: mapObject
        })
      .subscribe(
        (response) => {
          this.orderId = response
          this.submitOrder(productName, amount, quantity, this.orderId, mapObject)
        },
        (error) => {
          console.error('Error submitting form:', error)
        }
      )
  }

  async submitOrder(productName: any, amount: number, quantity: number, orderId: any, mapObject: any) {
    this.showSpinner = true

    const payment = {
      email: "test@test.com",
      meals: mapObject,
      name: productName,
      currency: 'usd',
      amount: amount * 100,
      quantity: quantity,
      cancelUrl: environment.clientUrl + '/#/cancel/' + orderId,
      successUrl: environment.clientUrl + '/#/success/' + orderId
    }

    const stripe = await this.stripePromise

    if (stripe) {
      this.http
        .post(environment.serverUrl + '/api/v1/payment/submit', payment)
        .subscribe((data: any) => {
          this.showSpinner = false
          stripe.redirectToCheckout({
            sessionId: data.id,
          })
        })
    } else {
      console.error('Stripe is not initialized.')
    }
  }
}