# Generated by Django 4.1.2 on 2022-11-29 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Violations', '0004_alter_policy_insensity_alter_violations_end_time_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='violations',
            name='end_time',
            field=models.CharField(default='14:12:44', max_length=20),
        ),
        migrations.AlterField(
            model_name='violations',
            name='start_time',
            field=models.CharField(default='14:12:44', max_length=20),
        ),
    ]
