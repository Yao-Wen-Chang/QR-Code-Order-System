from django.shortcuts import render
from django.http import HttpResponse
from .models import Category
from .models import Food
from orders.models import CartItem
from login.models import Client

def food_menu(request):
  categories = Category.objects.all()
  # print(category)
  menu_items = Food.objects.all()
  client = Client.objects.get(pk=request.session['client_id'])
  orders = CartItem.objects.filter(client=client)
  amount_price = 0
  for order in orders:
    amount_price = amount_price + order.quantity * order.price
  context = {
    "categories": categories, 
    "menu": menu_items,
    "orders": orders,
    "orders_amount": amount_price
    
  }
  return render(request, 'menu.html', context) 

  

