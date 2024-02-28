from django.db import models

# Create your models here.

class LoginFormData(models.Model):
  customer_name = models.CharField(max_length=20)
  headcount = models.IntegerField()
  
  