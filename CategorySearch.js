const prompt = require('prompt');
const request = require('request');

prompt.start();

prompt.get(['Category', 'Limit'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Category: ' + result.Category);
    console.log('Limit: ' + result.Limit);

    request('https://api.publicapis.org/entries', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var json = JSON.parse(body);
          var entries = json.entries;
          var allCategories = [];
          entries.forEach(element => {
              if (element.Category === result.Category)
                allCategories.push(element.Category);
          });

          var limit = allCategories.length;

          if (limit > 0)
             console.log(allCategories[0],limit); 
           else
             console.log("No results");   
        }
      });    
});
