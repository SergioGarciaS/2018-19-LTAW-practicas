# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Rubik (models.Model):
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    stock = models.IntegerField()
    Price = models.FloatField()
class VC (models.Model):
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    stock = models.IntegerField()
    Price = models.FloatField()
class Shen (models.Model):
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    stock = models.IntegerField()
    Price = models.FloatField()
