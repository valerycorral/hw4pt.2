# Generated by Django 4.0.4 on 2022-04-15 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music2', '0010_alter_rating_id_alter_rating_username_and_more'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='rating',
            unique_together=set(),
        ),
        migrations.AlterField(
            model_name='rating',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
