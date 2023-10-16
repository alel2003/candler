from django.forms import ModelForm, TextInput
from .models import Articles
from django.utils.translation import gettext as _


class ArticleForms(ModelForm):
    class Meta:
        model = Articles
        fields = ["name", "email"]

        widgets = {
            "name": TextInput(
                attrs={"class": "stock-block__input", "placeholder": _("Name")}
            ),
            "email": TextInput(
                attrs={"class": "stock-block__input", "placeholder": _("Email")}
            ),
        }
