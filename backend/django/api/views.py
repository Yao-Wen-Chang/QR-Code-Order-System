from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import LoginFormData

@api_view(['POST'])
def handle_login_form_submission(request):
  customer_name = request.data.get("name")
  headcount = request.data.get("headcount")
  print("hello world")
  form_data = LoginFormData.objects.create(customer_name=customer_name, headcount=headcount)
  return Response({'message': 'Form data saved successfully!'})