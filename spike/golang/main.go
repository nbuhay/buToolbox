package main

import (
  "net/http"
  "time"
)

func sayHello(w http.ResponseWriter, r *http.Request) {
  message := time.Now().String() + ": Hello from Golang!"
  w.Write([]byte(message))
}

func main() {
  http.HandleFunc("/", sayHello)
  if err := http.ListenAndServe(":5000", nil)
  err != nil {
    panic(err)
  }
}
