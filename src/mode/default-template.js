
const SlackApi = require('../slack-api');

const template = {
            "fallback":"Image push",
            "color":"good",
            "pretext":"Image pushed to repository",
            "author_name": process.env.CF_COMMIT_AUTHOR,
            "author_link":"https://cloudposse.com/wp-content/uploads/sites/29/2018/02/small-cute-robot-square.png",
            "author_icon":"https://cloudposse.com/wp-content/uploads/sites/29/2018/02/small-cute-robot-square.png",
            "thumb_url":"https://cloudposse.com/wp-content/uploads/sites/29/2018/02/SquareLogo2.png",
            "footer":"test",
            "fields":[
                {
                    "title":"Project",
                    "value":"Awesome Project",
                    "short":true
                },
                {
                    "title":"Environment",
                    "value": process.env.CF_BRANCH_VERSION_NORMALIZED,
                    "short":true
                }
            ]
        };

class DefaultTemplateMode {

    static send() {
        console.log('Choose default-template mode');

        SlackApi.send(process.env.SLACK_TEXT, [template], process.env.SLACK_USER_NAME, process.env.SLACK_ICON_EMOJI);
    }

}

module.exports = DefaultTemplateMode;
