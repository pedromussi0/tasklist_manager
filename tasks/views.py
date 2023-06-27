from django.shortcuts import render
from django.urls import reverse_lazy
from django.views import generic
from rest_framework import generics
from .models import Task
from api.serializers import TaskSerializer

# def index(request):
#    return render(request, "index.html")
#
#
# class TaskListView(generic.ListView):
#    model = Task


# class TaskCreateView(generic.CreateView):
#    model = Task
#    fields = ["title", "description"]
#    success_url = reverse_lazy("task_list")


# class TaskUpdateView(generic.UpdateView):
#    model = Task
#    fields = ["title", "description", "is_completed"]


# class TaskDeleteView(generic.DeleteView):
#   model = Task
#  success_url = "/"
