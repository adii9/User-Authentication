from .models import UserDetails
from .models import DogAdoption
from rest_framework import serializers

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = '__all__'

class DogAdoptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DogAdoption
        fields = '__all__'
