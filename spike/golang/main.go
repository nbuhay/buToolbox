package main

import (
  "net/http"
  "time"
  "os"
  "encoding/json"
  "fmt"
)

type response struct {
  Date string `json:date`
  Hostname string `json:hostname`
  Client string `json:client`
  Msg string `json:msg`
}

func sayHello(w http.ResponseWriter, r *http.Request) {
  hostname, err := os.Hostname()
  if err != nil {
    panic(err)
  }
  date := time.Now().String()
  client := r.RemoteAddr
  msg := `Hello from Golang!`

  resPayload := &response{
    Date: date,
    Hostname: hostname,
    Client: client,
    Msg: msg}

  fmt.Printf(date + ": hostname " + hostname + ": client " +  client +"\n")
  w.Header().Set("Content-Type", "application/json")
  json.NewEncoder(w).Encode(resPayload)
}

func main() {
  http.HandleFunc("/", sayHello)
  if err := http.ListenAndServe(":5000", nil)
  err != nil {
    panic(err)
  }
}
