package main

import (
  "net/http"
  "time"
  "os"
)

func sayHello(w http.ResponseWriter, r *http.Request) {
  hostname, err := os.Hostname()
  if err != nil {
    panic(err)
  }
  message := "Date:      " + time.Now().String() +
             "\nHostname:  " + hostname +
             "\nMessage:   Hello from Golang!"
  w.Write([]byte(message))
}

func main() {
  http.HandleFunc("/", sayHello)
  if err := http.ListenAndServe(":5000", nil)
  err != nil {
    panic(err)
  }
}
