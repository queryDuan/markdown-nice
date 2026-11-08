FROM nginx:stable-alpine3.24
COPY ./docs/   /usr/share/nginx/html/
CMD ["sh", "-c", "nginx -t && exec nginx -g 'daemon off;'"]
