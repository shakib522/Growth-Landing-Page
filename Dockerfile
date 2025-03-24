FROM nginx:latest
LABEL authors="sakib"

COPY . /usr/share/nginx/html
EXPOSE 80

CMD ["nginx","-g","daemon off;"]
