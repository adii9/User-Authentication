from django.shortcuts import render
from .models import UserDetails
from .Serializers import UserDetailSerializer
from rest_framework import viewsets

# Create your views here.
class UserDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailSerializer