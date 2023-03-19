from cards.models import Card
from rest_framework import viewsets, permissions
from .serializers import CardSerializer

class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CardSerializer