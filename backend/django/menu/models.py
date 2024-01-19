from django.db import models

# Create your models here.
class Category(models.Model):
  name = models.CharField(max_length=255, unique=True)
  def __str__(self):
    return self.name

class Food(models.Model):
  name = models.CharField(max_length=255)
  description = models.TextField()
  price = models.DecimalField(max_digits=8, decimal_places=2)
  photo = models.ImageField(upload_to='images/')
  category = models.ForeignKey(Category, on_delete=models.CASCADE)

  