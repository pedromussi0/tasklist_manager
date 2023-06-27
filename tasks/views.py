# MODEL
from tasks.models import Task

# SERIALIZER
from .serializers import TaskSerializer

# DRF
from rest_framework import generics


class TaskList(generics.ListCreateAPIView):
    serializer_class = TaskSerializer

    def get_queryset(self):
        queryset = Task.objects.all()

        return queryset


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
