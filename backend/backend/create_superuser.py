from django.contrib.auth import get_user_model
from django.db.models.signals import post_migrate
from django.dispatch import receiver
import os
from django.db.utils import IntegrityError

@receiver(post_migrate)


def create_default_superuser(sender, **kwargs):
    User = get_user_model()
    username = "sohan"

    if not User.objects.filter(username=username).exists():
        User.objects.create_superuser(
            username=username,
            email="sohan@gmail.com",
            password="sohan@123"
        )

