# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mi_tienda', '0002_shen_vc'),
    ]

    operations = [
        migrations.AddField(
            model_name='rubik',
            name='image',
            field=models.CharField(max_length=200, default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='shen',
            name='image',
            field=models.CharField(max_length=200, default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='vc',
            name='image',
            field=models.CharField(max_length=200, default=''),
            preserve_default=False,
        ),
    ]
