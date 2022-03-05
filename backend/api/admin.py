from django.contrib import admin
from api.models import Movie, Rating

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']

@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ['movie', 'user']