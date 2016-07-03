from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^v1/dummysearch/$', views.dummy_fetch_search),
]