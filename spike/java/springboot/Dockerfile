FROM centos:centos7
LABEL maintainer="nbuhay@gmail.com"
EXPOSE 8080
RUN yum update -y && \
    yum install -y \
      java-1.8.0-openjdk-devel \
      java-1.8.0-openjdk
COPY target/gs-rest-service-0.1.0.jar gs-rest-service-0.1.0.jar
CMD [ "java", "-jar", "gs-rest-service-0.1.0.jar" ]