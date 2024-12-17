const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  console.log('Request received');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const port = 3000;

const onError = (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1);
  } else {
    console.error(`An error occurred: ${err.message}`);
    process.exit(1);
  }
};

const onListening = () => {
  console.log(`Server listening on port ${port}`);
};

server.on('error', onError);
server.on('listening', onListening);

server.listen(port); 
