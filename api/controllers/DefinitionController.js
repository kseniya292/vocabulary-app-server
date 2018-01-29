/**
 * DefinitionController
 *
 * @description :: Server-side logic for managing definitions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 const app_id = '3e23ba37';
 const app_key = '90da04772846856a4fc02a7146753d12';
 
 var request = require('request');

module.exports = {
  define: function (req, res) {
  const word = req.body.definition;

  const options = {
    url: 'https://od-api.oxforddictionaries.com/api/v1/entries/en/' + word,
    headers: {
      'app_id': '3e23ba37',
      'app_key': '90da04772846856a4fc02a7146753d12'
    },
  };

  function callback(error, response, body) {
    if (error) {
      res.send(error);
    }
    else {
      const responseBody = JSON.parse(body);
      res.send(responseBody);
    }
  }

  request(options, callback);

	}
};

