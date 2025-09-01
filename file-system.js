const fs = require('fs');

// Create welcome.txt if it does not exist
fs.writeFileSync('welcome.txt', 'Hello Node');

// Read and display content
const data = fs.readFileSync('welcome.txt', 'utf8');
console.log(data);