from django.urls import path
# from .views
from .views import food_menu

urlpatterns = [
  path("", food_menu, name="food_menu"),
]