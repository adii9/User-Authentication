# Generated by Django 4.1.6 on 2023-02-14 04:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Backend', '0006_remove_userdetails_password'),
    ]

    operations = [
        migrations.RenameField(
            model_name='userdetails',
            old_name='name',
            new_name='firstName',
        ),
        migrations.RemoveField(
            model_name='userdetails',
            name='birthDate',
        ),
        migrations.AddField(
            model_name='userdetails',
            name='lastName',
            field=models.CharField(default='', max_length=75),
            preserve_default=False,
        ),
    ]
