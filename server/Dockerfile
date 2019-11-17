FROM python:3.5-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /usr/src/app

CMD ["/usr/local/bin/gunicorn", "-w 2" , "-b :8000", "wsgi:app"]
