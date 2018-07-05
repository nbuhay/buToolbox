FROM centos:centos7
LABEL maintainer="nbuhay@gmail.com"
EXPOSE 9000
RUN yum update -y && \
    yum install -y \
      java-1.8.0-openjdk-devel \
      java-1.8.0-openjdk
RUN curl https://raw.githubusercontent.com/nbuhay/bu-toolbox/master/spike/java/Server.java > Server.java && \
    javac Server.java
CMD [ "java", "Server" ]