from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home_view),
    url(r'^list', views.list),
    url(r'^rubik', views.Rubik),
    url(r'^vc', views.VC),
    url(r'^shen', views.Shen)
]
