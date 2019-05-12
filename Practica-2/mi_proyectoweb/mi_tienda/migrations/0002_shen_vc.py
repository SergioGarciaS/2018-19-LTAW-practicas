# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mi_tienda', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Shen',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('name', models.CharField(max_length=200)),
                ('stock', models.IntegerField()),
                ('Price', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='VC',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('name', models.CharField(max_length=200)),
                ('stock', models.IntegerField()),
                ('Price', models.FloatField()),
            ],
        ),
    ]
