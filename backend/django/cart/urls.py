from django.urls import path
# from .views
from .views import view_cart

urlpatterns = [
  path("", view_cart, name="view_cart"),
]