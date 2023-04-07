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

class DogAdoption(models.Model):
    petType = models.CharField(max_length=10)
    petName = models.CharField(max_length=30)
    breed = models.CharField(max_length=30)
    vaccinationStatus = models.BooleanField()
    gender = models.CharField(max_length=10)
    neutered = models.BooleanField()
    shotsUptoDate = models.BooleanField()
    goodWithKids = models.BooleanField()
    goodWithDogs = models.BooleanField()
    goodWithCats = models.BooleanField()
    reason = models.CharField(max_length=500)
    additionalInformation = models.CharField(max_length=500)

    currentOwnerName = models.CharField(max_length=50)
    contactNumber = models.CharField(max_length=10)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)




    def __str__(self):
        return self.petType

