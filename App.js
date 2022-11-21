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
          var entriesSorted = entries.sort((a, b) => a.API.normalize().localeCompare(b.API.normalize()));
          var list = [];
          var allCategories = [];
          entriesSorted.forEach(element => {
              var apis = element.API;
              list.push(apis);
           
              if (element.Category === result.Category)
              allCategories.push(element.Category);
          });

          var limit = allCategories.length;
          
          var i = list.length-1;
          var sortedList = [];
          while (i > 0) {
              sortedList.push(list[i]);
              i--;
            }
          console.log(limit);
        }

        

      });

      
    
});
