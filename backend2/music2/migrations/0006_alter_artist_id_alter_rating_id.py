# Generated by Django 4.0.4 on 2022-04-14 05:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music2', '0005_artist_id_alter_artist_song_alter_rating_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artist',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='rating',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
