FROM nginx:stable-alpine3.24
COPY ./docs/   /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
