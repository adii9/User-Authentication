from django.db import models
from django import forms

# Create your models here.

class UserDetails(models.Model):
    firstName = models.CharField(max_length=75)
    lastName = models.CharField(max_length=75)
    password = models.CharField(max_length=75)
    email = models.EmailField()

    def __str__(self):
        return self.firstName

