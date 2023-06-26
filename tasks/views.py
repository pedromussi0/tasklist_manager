from django.shortcuts import render
from django.views import generic
from rest_framework import generics
from .models import Task
from api.serializers import TaskSerializer

class TaskListView(generic.ListView):
    model = Task

class TaskCreateView(generic.CreateView):
    model = Task
    fields = ['title', 'description']

class TaskUpdateView(generic.UpdateView):
    model = Task
    fields = ['title', 'description', 'is_completed']

class TaskDeleteView(generic.DeleteView):
    model = Task
    success_url = '/'
