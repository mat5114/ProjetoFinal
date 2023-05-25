var request = require('request');

var options = {
  uri: 'https://anilist.co/api/v2/oauth/token',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  json: {
    'grant_type': 'authorization_code',
    'client_id': '12795',
    'client_secret': '92zZ8KcvrmLHcKZk1zlpVJmV9zDw3wU22SaM6nbB',
    'redirect_uri': 'http://127.0.0.1:5500', // http://example.com/callback
    'code': 'def50200b65bbe6a7ebe2e3a93f07338e3a36b6ba6005efd59da2ba7435cb81746ec70dabe3a0aff3884d84e2437120bfd5cb115d088baa21d53ab08fe8587c5c5d988bcb5847a0e54b67f9d6304ea499a019a16fd8be7eab37e84d9daf960f120ab9bfcff9877d7d212d53af6082c825f81a0e86dd08265879a9ff5a5104298879c1f9e0c5ef8fa17232a6e1a9781eb493c6969f6e1652ee8d4ea41695efe5824723b1c2ee0a57da05d961a2c099ba03b0ad56b627f082c03f6ac5dc0d782c4437769a096c690d7c6e2094c8ad5a723b94d117b651d912173256c118451329fe07f54ee03dc327d67c1096394614241d4fad7f2be31d26c01517f6c5da8961d503fef3016ffc40ac635c40df735073a56c58d187ecab197f91f6e298295688e4528b8c78c3991d989d509e6eaf1afbc06b8b82dcf9d793f03246c2a88094eb586da4ed3a622487e624dd7ffaa3724249156bb27b3f641816d60499e097ce1aa', // The Authorization Code received previously
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
    console.log(body.access_token);
  }
});

var options = {
  uri: 'https://graphql.anilist.co',
  method: 'POST',
  headers: {
    'Authorization': 'Bearer ' + 8ik1zBieKgV4FxLHeybRj7L4dnyOIpi1tKfHMyQ2,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  json: {
    'query': query,
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.data);
  }
});
