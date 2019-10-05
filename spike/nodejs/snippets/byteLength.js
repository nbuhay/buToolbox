let test = {
      message: 'Hello world!',
      date: Date.now()
    }
  , KB = 1024
  , byteLength = Buffer.byteLength(JSON.stringify(test), 'utf8')

console.log(`Byte Length (KB): ${byteLength/KB}`);