from django.shortcuts import render, redirect
from .models import Articles
from .forms import ArticleForms
from django.utils.translation import activate as translation_activate
# Create your views here.


def index(request):
    error = ""
    if request.method == "POST":
        form = ArticleForms(request.POST)
        if form.is_valid():
            form.save()
        else:
            error = "Форма была не верной"
    form = ArticleForms()
    data = {"error": error, "form": form}

    return render(request, "main/index.html", data)


def change_lang(request, lang_code):
    translation_activate(lang_code)
    return redirect('/')
