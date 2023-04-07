from django.shortcuts import render
from .models import UserDetails
from .models import DogAdoption
from .Serializers import UserDetailSerializer
from rest_framework import viewsets
from .Serializers import DogAdoptionSerializer
from rest_framework.response import Response

# Create your views here.
class UserDetailsViewSet(viewsets.ModelViewSet):
    queryset = UserDetails.objects.all()
    serializer_class = UserDetailSerializer

class DogAdoptionViewSet(viewsets.ModelViewSet):
    queryset = DogAdoption.objects.all()
    serializer_class = DogAdoptionSerializer

class DogAdoptionFilterViewSet(viewsets.ModelViewSet):
    queryset = DogAdoption.objects.all()
    serializer_class = DogAdoptionSerializer
    def list(self, request):
        queryset = DogAdoption.objects.all()

        pet_type = request.query_params.get('petType', None)
        state = request.query_params.get('state', None)
        city = request.query_params.get('city', None)

        if pet_type is not None:
            queryset = queryset.filter(petType=pet_type)
        if state is not None:
            queryset = queryset.filter(state=state)
        if city is not None:
            queryset = queryset.filter(city=city)

        serializer = DogAdoptionSerializer(queryset, many=True)
        return Response(serializer.data)
