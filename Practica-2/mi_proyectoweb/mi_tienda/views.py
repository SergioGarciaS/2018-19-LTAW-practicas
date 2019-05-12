# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse
from mi_tienda.models import Rubik
from mi_tienda.models import VC
from mi_tienda.models import Shen
# Create your views here.
def home_view(request):
    return render(request, "index.html", {})

def rubik (request):
    rubik = Rubik.objects.all()
    return render(request, "productos.html", {'productos': rubik})

def vc (request):
    vC = VC.objects.all()
    return render(request, "productos.html", {'productos': vC})

def shen (request):
    shen = Shen.objects.all()
    return render(request, "productos.html", {'productos': shen})


def list(request):
    objects = Rubik.objects.all()
    html = "<p>Listado de articulos</p>"
    for elt in objects:
        print(elt.name)
        html += '<p>'+ elt.name + '<p>'
    return HttpResponse(html)
