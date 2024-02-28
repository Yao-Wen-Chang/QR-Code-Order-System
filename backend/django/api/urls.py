from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('handle-login-form-submission/', views.handle_login_form_submission, name="handle_login_form_submission"),
    # Add other URL patterns for additional views as needed
]