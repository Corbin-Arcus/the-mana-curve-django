from django.db import models

# Create your models here.
class Card(models.Model):
    card_name = models.CharField(max_length=200, unique=True)
    card_image = models.CharField(max_length=200)
    card_type = models.CharField(max_length=200)
    cmc = models.IntegerField()
    mana_cost = models.CharField(max_length=200)
    power = models.IntegerField(null=True)
    toughness = models.IntegerField(null=True)
    oracle_text = models.CharField(max_length=500)
    legalities = models.CharField(max_length=1000)
