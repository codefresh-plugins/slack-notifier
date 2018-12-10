const SlackWebhook = require('slack-webhook');

if (!process.env.SLACK_HOOK_URL) {
    console.error('SLACK_HOOK_URL env variable should be present');
    process.exit(1);
}

const slack = new SlackWebhook(process.env.SLACK_HOOK_URL);

const attachments = process.env.SLACK_ATTACHMENTS ? JSON.parse(process.env.SLACK_ATTACHMENTS) : undefined;

if (!process.env.SLACK_TEXT && !attachments) {
    console.error('SLACK_TEXT or SLACK_ATTACHMENTS env variable should be present');
    process.exit(1);
}

slack.send({
    text: process.env.SLACK_TEXT,
    attachments: attachments,
    username: process.env.SLACK_USER_NAME,
    icon_emoji: process.env.SLACK_ICON_EMOJI,
});
