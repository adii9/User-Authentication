from .models import UserDetails
from rest_framework import serializers

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserDetails
        fields = '__all__'