from django.urls import include, path
from .views import UserDetailsViewSet
from .views import DogAdoptionViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'UserDetails', UserDetailsViewSet)
router.register(r'DogAdoption', DogAdoptionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('dogAdoption/', include('rest_framework.urls', namespace='dogAdoption'))
]