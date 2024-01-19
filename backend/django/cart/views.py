# views.py
from django.shortcuts import render, redirect
from django.utils import timezone

def add_to_cart(request, item_id):
    cart = request.session.get('cart', {})
    cart[item_id] = {
        'added_at': timezone.now().timestamp(),
        # Add other item details as needed
    }
    request.session['cart'] = cart
    return redirect('your_item_list_view')  # Redirect to the item list or wherever you want

def view_cart(request):
    cart = request.session.get('cart', {})
    
    # Check if the cart has expired (30 minutes)
    cart_expiry_time = 30 * 60  # 30 minutes in seconds
    current_time = timezone.now().timestamp()

    cart_items = []
    for item_id, item_info in cart.items():
        if current_time - item_info['added_at'] <= cart_expiry_time:
            cart_items.append({
                'item_id': item_id,
                'added_at': item_info['added_at'],
                # Add other item details as needed
            })

    context = {'cart_items': cart_items}
    return render(request, 'cart.html', context)
