FROM mysql:5.7

ADD sql/*.sql /docker-entrypoint-initdb.d/

COPY conf.d/my.cnf /etc/mysql/conf.d/my.cnf
