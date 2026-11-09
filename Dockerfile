FROM nginx:stable-alpine3.24
COPY ./docs/   /usr/share/nginx/html/
COPY ./mdnice.top.conf   /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]
