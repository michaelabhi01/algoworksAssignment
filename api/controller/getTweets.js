const getTweets = require('../model/getTweets');

exports.tweets = (req, res) => {

    var pageNo = req.query.page; //As per pagination we need to get the page to show tweets of that page no.

    getTweets.getTweets(req, res)
        .then(response => {

            const pageCount = Math.ceil(response.length / 10); //Here I divided by 10 coz we need to show maximum 10 tweets per page so here we find total no. of page.
            let page = parseInt(pageNo);
            if (!page) { page = 1; } //To show tweets of first page by default, if there is no page no. is provided through query string.
            if (page > pageCount) {
                page = pageCount //To show last page tweets, If we get page no. greater than the number of pages present.
            }
            res.json({
                "pageNo": page,
                "pageCounts": pageCount,
                "tweets": response.slice(page * 10 - 10, page * 10)
            });
        })

}