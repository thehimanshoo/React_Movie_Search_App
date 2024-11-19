var request = require('request');

const options = {
    url: 'https://api.metadefender.com/v4/url/https%3A%2F%2Fanysize.shop%2Ffiles%2Fupload%2F46d7e6ce8d7826d94c7e161d4c1f8680425f3b8efe7cc96dd62eb25a7a1b02f0',
    headers: {
        'apikey': '61a717a0fb89a1cb67fd6f47a09f0805'
    }
};

request(options, function(error, response, body) {
    console.log(JSON.stringify(body));
});
