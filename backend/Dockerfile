# FROM eclipse-temurin:11-jdk-jammy AS build
#
# WORKDIR /src
# COPY . /src
#
# RUN sed -i s/localhost/mariadb/g application/src/main/resources/application.properties
# RUN ./mvnw -B package -Dmaven.test.skip=true

FROM eclipse-temurin:11-jre-jammy

WORKDIR /app
# COPY --from=build /src/ ./app.jar
COPY application/target/application-0.0.1-SNAPSHOT.jar ./app.jar

CMD ["java", "-jar", "/app/app.jar"]
