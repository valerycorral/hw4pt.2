# Generated by Django 4.0.4 on 2022-04-14 04:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music2', '0004_delete_song'),
    ]

    operations = [
        migrations.AddField(
            model_name='artist',
            name='id',
            field=models.AutoField(default=1, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='artist',
            name='song',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='rating',
            name='id',
            field=models.AutoField(default=1, primary_key=True, serialize=False),
        ),
    ]