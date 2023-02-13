from django.db import models
from django import forms

# Create your models here.

class UserDetails(models.Model):
    name = models.CharField(max_length=75)
    birthDate = models.DateField()
    password = forms.CharField(widget=forms.PasswordInput)
    email = models.EmailField()

    def __str__(self):
        return self.name

