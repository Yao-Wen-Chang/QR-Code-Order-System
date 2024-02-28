export interface FoodItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface CartItem extends FoodItem {
  quantity: number;
  totalPrice: number;
}