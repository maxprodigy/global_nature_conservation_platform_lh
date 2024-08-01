from django.urls import path
from core import views

urlpatterns = [
    path("", views.home, name='home'),
    path("about/", views.about, name='about'),
    path("contact/", views.contact, name='contact'),
    path("project/", views.project, name='project'),
    path("donate/", views.donate, name='donate'),
]
