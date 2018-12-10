const SlackWebhook = require('slack-webhook');

const slack = new SlackWebhook(process.env.SLACK_HOOK_URL);

class SlackApi {

    static send(text, attachments, username, icon){
        slack.send({
            text: text,
            attachments: attachments,
            username: username,
            icon_emoji: icon,
        });
    }

}

module.exports = SlackApi;
