# Backend

## Running MariaDB for development
```
$ docker run -it --rm -e MARIADB_USER=user -e MARIADB_PASSWORD=password -e MARIADB_ROOT_PASSWORD=password -p 3306:3306 mariadb:10.7
```
