# orders/views.py
from django.shortcuts import render
from .models import FoodItem, Order

def menu(request):
  food_items = FoodItem.objects.all()
  return render(request, 'orders/menu.html', {'food_items': food_items})

def place_order(request, food_item_id):
  if request.method == 'POST':
    food_item = FoodItem.objects.get(pk=food_item_id)
    quantity = int(request.POST.get('quantity', 1))
    table_number = int(request.POST.get('table_number', 1))

    Order.objects.create(food_item=food_item, quantity=quantity, table_number=table_number)

  return render(request, 'orders/order_placed.html')
