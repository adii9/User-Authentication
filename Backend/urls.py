from django.urls import include, path
from .views import UserDetailsViewSet
from .views import DogAdoptionViewSet
from .views import DogAdoptionFilterViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'UserDetails', UserDetailsViewSet)
router.register(r'DogAdoption', DogAdoptionViewSet)
router.register(r'DogAdoptionFilter', DogAdoptionFilterViewSet, basename='DogAdoptionFilter')

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('dogAdoption/', include('rest_framework.urls', namespace='dogAdoption')),
    path('dogAdoptionFilter/', include('rest_framework.urls', namespace='dogAdoptionFilter'))
]