# Generated by Django 4.1.6 on 2023-02-14 04:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Backend', '0007_rename_name_userdetails_firstname_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdetails',
            name='password',
            field=models.CharField(default='', max_length=75),
            preserve_default=False,
        ),
    ]
