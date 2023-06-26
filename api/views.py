from django.shortcuts import render
from rest_framework import generics
from tasks.models import Task
from api.serializers import TaskSerializer


class TaskListCreateApiView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class TaskRetrieveUpdateDestroyApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
