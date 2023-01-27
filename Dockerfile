FROM nginx:1.23-alpine

RUN apk update
RUN apk add --update --no-cache libxml2 curl

COPY ./dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
# COPY ./security-headers.conf /etc/nginx/security-headers.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
