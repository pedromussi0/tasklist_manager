from django.urls import path
from . import views


urlpatterns = [
    path("", views.TaskListView.as_view(template_name="index.html"), name="index"),
    path("create/", views.TaskCreateView.as_view(), name="task_create"),
    path("<int:pk>/", views.TaskUpdateView.as_view(), name="task_update"),
    path("<int:pk>/delete/", views.TaskDeleteView.as_view(), name="task_delete"),
]
