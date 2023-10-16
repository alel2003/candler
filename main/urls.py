from django.urls import path
from . import views


urlpatterns = [
    path("", views.index),
    path("change-lang/<str:lang_code>/", views.change_lang, name="change_lang"),

]
