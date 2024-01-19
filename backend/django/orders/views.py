from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from .models import CartItem
from menu.models import Food
from login.models import Client

def add_to_cart(request, food_id):
    food = Food.objects.get(pk=food_id)
    client = Client.objects.get(pk=request.session['client_id'])

    cart_item, created = CartItem.objects.get_or_create(
        item_name=food.name,
        price=food.price,
        client=client
        

    )
    if not created:
        cart_item.quantity += 1
        cart_item.save()

    return redirect('food_menu')

def view_cart(request):
    client = Client.objects.get(pk=request.session['client_id'])
    cart_items = CartItem.objects.filter(client=client)
    orders_amount = 0
    for item in cart_items:
        orders_amount = orders_amount + item.price * item.quantity
    return render(request, 'orders.html', {'cart_items': cart_items, 'orders_amount': orders_amount})


