from django.contrib.auth import get_user_model
from django.db.models.signals import post_migrate
from django.dispatch import receiver
import os

@receiver(post_migrate)
def create_default_superuser(sender, **kwargs):
    User = get_user_model()
    if not User.objects.filter(username="admin").exists():
        User.objects.create_superuser(
            username="sohan",
            email="sohan@gmail.com",
            password="sohan@123"
        )
        print("✅ Superuser created: sohan / sohan@123")
