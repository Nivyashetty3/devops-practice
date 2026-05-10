const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from Day 6 CI/CD! Auto-deployed via GitHub Actions.\n');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
