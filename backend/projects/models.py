from django.db import models

class Project(models.Model):
    title=models.CharField(max_length=200)
    description=models.TextField()
    github_link=models.URLField(blank=True)
    tech_stack=models.CharField(max_length=200)


    def __str__(self):
        return self.title
