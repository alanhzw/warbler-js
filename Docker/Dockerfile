
# 拉取 nginx 镜像
FROM nginx

COPY ./dist/ /usr/share/nginx/js/

COPY Docker/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx","-g","daemon off;"]


# docker build -f ./Docker/Dockerfile -t warbler-js . --no-cache
# docker run -d --name warbler-js-instance -p 80:80 --restart=always warbler-js