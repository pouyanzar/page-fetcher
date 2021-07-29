const fs = require('fs');
const request = require('request');
const fetcher = (url, path) => {
  request(url, (error, response, body) => {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    writer(body, path);
  });
  
};

const writer = (content, path) => {
  fs.writeFile(path, content, err => {
    if (err) {
      console.log(err);
      return;
    }
  });
  message(content, path);
};
const message = (content, path) => {
  let size = content.length;
  console.log(`Downloaded and saved ${size} to ${path}`);
};
fetcher(process.argv[2], process.argv[3]);


