FROM repository.hybris.com:5007/argonauts/nginx:1.15.8-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ./dist/profiletag-spartacus /usr/share/nginx/html
COPY ./nginx.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
