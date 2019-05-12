from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home_view),
    url(r'^list', views.list),
    url(r'^rub', views.rubik),
    url(r'^v', views.vc),
    url(r'^sh', views.shen)
]
