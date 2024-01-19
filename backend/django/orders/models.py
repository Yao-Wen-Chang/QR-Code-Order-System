# models.py
from django.db import models
from login.models import Client
from django.utils import timezone

class CartItem(models.Model):
  client = models.ForeignKey(Client, on_delete=models.CASCADE, null=True, blank=True)
  item_name = models.CharField(max_length=255, default='food not exist')
  quantity = models.PositiveIntegerField(default=1)
  price = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
  order_date = models.DateTimeField(default=timezone.now)
  
  def get_total_price(self):
    return self.price * self.quantity