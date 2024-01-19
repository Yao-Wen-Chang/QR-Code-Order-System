# forms.py
from django import forms
from .models import Client

class LoginForm(forms.ModelForm):
  class Meta:
    model = Client
    fields = ['name', 'num_people', 'table_number']
