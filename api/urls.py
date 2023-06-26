from django.urls import path
from api import views

urlpatterns = [
    path('', views.TaskListCreateApiView.as_view(), name='task_api_list_create'),
    path('<int:pk>/', views.TaskRetrieveUpdateDestroyApiView.as_view(), name='task_api_retrieve_update_destroy'),
]