from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.sessions.models import Session
from .forms import LoginForm
from django.http import HttpResponseRedirect


def login(request):
  if request.method == 'POST':
    form = LoginForm(request.POST)
    # print(f"form: {form}")
    if form.is_valid():
      client = form.save()
      
      # Set session timeout to 30 minutes
      timeout_duration = 30 * 60  # 30 minutes in seconds
      request.session.set_expiry(timeout_duration)

      # Store client_id in session
      request.session['client_id'] = client.id
      request.session['client_name'] = client.name
      return HttpResponseRedirect('menu')

  else:
    form = LoginForm()

  return render(request, 'login.html', {'form': form})
