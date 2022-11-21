const request = require('request');
request('https://api.publicapis.org/entries', function (error, response, body) {
  if (!error && response.statusCode == 200) {    
    var json = JSON.parse(body);
    var entries = json.entries;
    var list = [];
    entries.forEach(element => {
        var apis = element.API;
        list.push(apis);
    });
    var sorted = list.sort();
    console.log(sorted); 
  }
})