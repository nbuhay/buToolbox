### Description

Example usage of local DynamoDB integration with the Node.js aws-sdk.

Source code obtained from official AWS Node.js and DynamoDB [documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.html).

### Runbook

1. Install local DynamoDB for Ubuntu
  ```bash
  # install Java prereq
  # http://www.webupd8.org/2012/09/install-oracle-java-8-in-ubuntu-via-ppa.html
  add-apt-repository -y ppa:webupd8team/java
  apt-get update
  apt-get -y install default-jre
  apt-get install -y python-software-properties
  
  # install and start local DynamoDB
  # https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html
  wget https://s3-us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.tar.gz
  tar -xf dynamodb_local_latest.tar.gz
  java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb &
  
  # test curl against local dynamodb
  aws dynamodb list-tables --endpoint-url http://localhost:8000
  ```
  
2. Create the `Movies` table in the local DynamoDB instance.
  ```bash
  node MoviesCreateTable.js
  ```
3. All movie data is contained in `moviedata.json`.  Load the data into the `Movies` table.
  ```bash
  node MoviesLoadData.js
  ```
4.  `put` then`get` an object.
  ```bash
  node MoviesItemOps01.js # put
  node MoviesItemOps02.js # get
  ```
5. `update` the object unconditionally. `update` the object with an atomic counter.  `update` the object conditionally.
  ```bash
  node MoviesItemOps03.js # update unconditionally
  node MoviesItemOps04.js # update with atomic counter
  node MoviesItemOps05.js # update conditionally
  ```
6. `delete` the object.
  ```bash
  node MoviesItemOps06.js # delete
  ```
7. `query` by condition and with a projection expression
  ```bash
  node MoviesQuery01.js # query condition
  node MoviesQuery02.js # query projection expression
  ```
8. `scan` the entire `Movies` table, filter results.
  ```bash
  node MoviesScan.js # scan and filter
  ```
9. Delete the `Movies` table from the local DynamoDB instance.
  ```bash
  node MoviesDeleteTable.js
  ```
