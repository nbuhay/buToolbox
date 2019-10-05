var AWS = require('aws-sdk')
  , fs = require('fs')
  , s3 = new AWS.S3();

// read in local file
fs.readFile('./s3.test.txt', (err, data) => {

  // convert file contents to binary buffer
  var base64data = new Buffer(data, 'binary')
  
  // get Date and create a simple format for building the S3 object name
  var date = new Date()
    , formattedDate =  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  // build post body
  var params = {
    Body: base64data,
    Bucket: 'nodejs-aws-sdk-object-upload',
    Key: `${formattedDate}-s3.test.txt`,
    Tagging: 'name=test-object-upload'
  };

  // make put request
  s3.putObject(params, (error, res) => {
    if (error) {
      console.error(`Error with S3 Upload: ${error}`);
    } else {
      console.log(res);
      console.log('S3 Upload Successful!');
    }
  });

});