# orders/models.py
from django.db import models

class FoodItem(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    picture = models.ImageField()

    def __str__(self):
        return self.name

class Order(models.Model):
    food_item = models.ForeignKey(FoodItem, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    table_number = models.PositiveIntegerField()
    date_ordered = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.food_item} - {self.quantity} items"
