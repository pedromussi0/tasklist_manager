FROM python:3.9

ENV PYTHONUNBUFFERED=1
WORKDIR /tasklist_manager

COPY requirements.txt /tasklist_manager/
RUN pip install -r requirements.txt

COPY . /tasklist_manager/