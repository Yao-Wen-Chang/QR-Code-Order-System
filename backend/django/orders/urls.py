from django.urls import path
from . import views

urlpatterns = [
  path("", views.view_cart, name="index"),  
  path('add_to_cart/<int:food_id>', views.add_to_cart, name='add_to_cart'),
  path('view_cart', views.view_cart, name='view_cart'),
]
