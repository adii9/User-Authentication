# Generated by Django 4.1.6 on 2023-02-13 08:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Backend', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userdetails',
            name='password',
        ),
    ]
