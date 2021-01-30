# Taken from: https://github.com/gatsbyjs/gatsby-docker
FROM alpine:3

COPY docker/nginx-boot.sh /sbin/nginx-boot
RUN chmod +x /sbin/nginx-boot

RUN apk --update add nginx bash && \
    rm -fR /var/cache/apk/*

CMD [ "/sbin/nginx-boot" ]
EXPOSE 80

COPY ./public /pub