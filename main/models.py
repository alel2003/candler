from django.db import models


class Articles(models.Model):
    name = models.CharField("User surname", max_length=100)
    email = models.EmailField("User email")

    def __str__(self) -> str:
        return self.name
