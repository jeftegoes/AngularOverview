FROM maven:3.9.9-eclipse-temurin-23-alpine AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package


FROM openjdk:23-jdk
WORKDIR /app
COPY --from=build /app/target/products-api-0.0.1-SNAPSHOT.jar .
RUN echo $(ls)
ENTRYPOINT ["java", "-jar", "products-api-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080