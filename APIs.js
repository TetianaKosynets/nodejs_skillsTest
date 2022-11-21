const request = require('request');

request('https://api.publicapis.org/entries', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          var json = JSON.parse(body);
          var entries = json.entries;
          var entriesSorted = entries.sort((a, b) => a.API.normalize().localeCompare(b.API.normalize()));
          var list = [];
          entriesSorted.forEach(element => {
              var apis = element.API;
              list.push(apis);
          });

          var i = list.length-1;
          var sortedList = [];
          while (i > 0) {
              sortedList.push(list[i]);
              i--;
            }
            
            console.log(sortedList);   
        }
      });