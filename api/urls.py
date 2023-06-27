from django.urls import path
from api import views
from .views import *

# /api/
urlpatterns = [
    path("task/", TaskList.as_view()),
    path("task/<int:pk>/", TaskDetail.as_view()),
]
