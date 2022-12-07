# Generated by Django 4.1.2 on 2022-11-28 16:11

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Violations', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='violations',
            name='end_time',
            field=models.TimeField(default=datetime.datetime(2022, 11, 28, 21, 11, 25, 23182)),
        ),
        migrations.AlterField(
            model_name='violations',
            name='start_time',
            field=models.TimeField(default=datetime.datetime(2022, 11, 28, 21, 11, 25, 23182)),
        ),
        migrations.AlterField(
            model_name='zone',
            name='description',
            field=models.CharField(default=None, max_length=30, null=True),
        ),
    ]