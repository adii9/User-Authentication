from django.shortcuts import render
from .models import UserDetails
from .models import DogAdoption
from .Serializers import UserDetailSerializer
from rest_framework import viewsets
from .Serializers import DogAdoptionSerializer

# Create your views here.
class UserDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailSerializer

class DogAdoptionViewSet(viewsets.ModelViewSet):
    queryset = DogAdoption.objects.all()
    serializer_class = DogAdoptionSerializer
