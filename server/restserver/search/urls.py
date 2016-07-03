from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.deliver_page),
	url(r'^v1/dummysearch/$', views.dummy_fetch_search),
]