FROM alpine:3.18
COPY entrypoint.sh /entrypoint.sh
COPY setup.sh /setup.sh
COPY cleanup.sh /cleanup.sh
RUN chmod +x /entrypoint.sh /setup.sh /cleanup.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["World"]
