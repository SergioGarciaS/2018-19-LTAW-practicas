# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from .models import Rubik
from .models import VC
from .models import Shen

admin.site.register(Rubik)
admin.site.register(VC)
admin.site.register(Shen)
