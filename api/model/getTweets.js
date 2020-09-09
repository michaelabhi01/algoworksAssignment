const settings = require('../../settings');
const Twit = require('twit');

const T = new Twit({
    consumer_key: settings.keys.consumer_key,
    consumer_secret: settings.keys.consumer_secret,
    access_token: settings.keys.access_token,
    access_token_secret: settings.keys.access_token_secret,
});

exports.getTweets = (req, res) => {

    return new Promise((resolve, reject) => {

        var options = {
            screen_name: req.body.username,
            user_id: req.body.username,
            // count: 10
        };

        var tweetsResult = [];
        T.get('statuses/user_timeline', options, function(err, data) {
            if (err) {
                reject(err);
            }
            for (var i = 0; i < data.length; i++) {
                tweetsResult[i] = data[i].text;
            }
            resolve(tweetsResult);
        }).catch(err => {
            reject(err);
        });
    })
}