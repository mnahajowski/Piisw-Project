# Backend

## Running MariaDB for development
```
$ docker run -it --rm -e MARIADB_USER=user -e MARIADB_PASSWORD=password -e MARIADB_ROOT_PASSWORD=password -p 3306:3306 --name mariadb mariadb:10.6
$ docker exec mariadb mariadb --password=password -e 'drop database if exists transport; create database transport; use transport; grant all on transport to user;'
```
