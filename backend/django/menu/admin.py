from django.contrib import admin

# Register your models here.

from .models import Category
from .models import Food

admin.site.register(Category)
admin.site.register(Food)
