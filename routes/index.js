var express = require('express');
var router = express.Router();

/* GET home page. */
var TwitterText = [];
console.log('The Bot is Running!');
var Twit = require('twit');
var T = new Twit({
    consumer_key: 'AayOBhgG6Jy63toIE0Eno19YS',
    consumer_secret: 'exgf3RbS7p7Spba3vFQx4rlfWHHDrEfa7s6iZrTbcS6ADbvheJ',
    access_token: '826739371-3mKMZLEtUFOa2bgSHRZljbx2AkIcs9M2XjorDayK',
    access_token_secret: 'a6N6izccToYdI5mr58WOVy7FtSXkXOC33PabXVJQpfJAa',
    timeout_ms: 60 * 100,
});
// parameters to be passed into the get request
var params = {
    q: '#AAPL',
    count: 10,
    lang: 'en'
};
// Callback function for the get request
function getData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
        TwitterText.push(tweets[i].text);
        //documents.write(tweets[i].text);
    }
}
T.get('search/tweets', params, getData);


router.get('/', function(req, res) {
  res.render('index', { title: TwitterText[0] });
});

module.exports = router;
