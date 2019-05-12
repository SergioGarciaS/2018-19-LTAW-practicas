from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
de home_view (request):
    html = "WELCOME TO TIJUANA"
    return HttpResponse(html)
    
