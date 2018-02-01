/**
 * DefinitionController
 *
 * @description :: Server-side logic for managing definitions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 const app_id = '3e23ba37';
 const app_key = '90da04772846856a4fc02a7146753d12';
 
 var rp = require('request-promise');

module.exports = {
  define: function (req, res) {
  const word = req.body.definition;

  const options = {
    url: 'https://od-api.oxforddictionaries.com/api/v1/entries/en/' + word,
    headers: {
      'app_id': '3e23ba37',
      'app_key': '90da04772846856a4fc02a7146753d12'
    },
    // json: true // Automatically parses the JSON string in the response
  };

  rp(options)
    .then(function (response) {
        res.send(response);
    })
    .catch(function (err) {
      // if (err.statusCode === 404) {
      //   res.send(err.statusCode);
      // } else {
        res.send(err.statusCode);
      // }
    });

	}
};

