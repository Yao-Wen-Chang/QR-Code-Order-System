# views.py

from django.shortcuts import render
from django.contrib.auth.decorators import user_passes_test

@user_passes_test(lambda u: u.is_staff)
def management_dashboard(request):
    # Your management dashboard logic here
    return render(request, 'management_dashboard.html')
