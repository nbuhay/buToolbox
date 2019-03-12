FROM golang:latest
MAINTAINER Nicholas Buhay
# Build: docker build -t nbuhay/spike-golang .
# Run:   docker run -d -p 5000:5000 --restart=always nbuhay/spike-golang

EXPOSE 5000

RUN git clone https://github.com/nbuhay/bu-toolbox.git
RUN go build bu-toolbox/spike/golang/main.go

CMD ["/go/main"]