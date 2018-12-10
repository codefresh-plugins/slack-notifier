const SlackWebhook = require('slack-webhook');

// 'https://hooks.slack.com/services/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'
const slack = new SlackWebhook(process.env.SLACK_HOOK_URL);

// slack.send('some text');

// SLACK_TEXT="The latest changes have been deployed";
// SLACK_USER_NAME="CodeFresh";
// SLACK_ICON_EMOJI=":white_check_mark:";
// SLACK_FALLBACK="Deployed to Staging environment";
// SLACK_COLOR="good";
// SLACK_PRETEXT="Added XYZ to feature-104";
// SLACK_AUTHOR_NAME="Auto Deploy Robot";
// SLACK_AUTHOR_LINK="https://cloudposse.com/wp-content/uploads/sites/29/2018/02/small-cute-robot-square.png";
// SLACK_AUTHOR_ICON="https://cloudposse.com/wp-content/uploads/sites/29/2018/02/small-cute-robot-square.png";
// SLACK_TITLE="Environment Updated";
// SLACK_TITLE_LINK="http://demo1.cloudposse.com";
// SLACK_THUMB_URL="https://cloudposse.com/wp-content/uploads/sites/29/2018/02/SquareLogo2.png";
// SLACK_FOOTER="Helm Deployment";
// SLACK_FOOTER_ICON="https://cloudposse.com/wp-content/uploads/sites/29/2018/02/kubernetes.png";


// slack.send({
//     text: SLACK_TEXT,
//     attachments: [
//         {
//             "fallback": SLACK_FALLBACK,
//             "color": SLACK_COLOR,
//             "pretext": SLACK_PRETEXT,
//             "author_name": SLACK_AUTHOR_NAME,
//             "author_link" : SLACK_AUTHOR_LINK,
//             "author_icon" : SLACK_AUTHOR_ICON,
//             "title": SLACK_TITLE,
//             "title_link": SLACK_TITLE_LINK,
//             "thumb_url" : SLACK_THUMB_URL,
//             "footer" : SLACK_FOOTER,
//             "footer_icon" : SLACK_FOOTER_ICON,
//             "fields": [
//                 {
//                     "title": "Project",
//                     "value": "Awesome Project",
//                     "short": true
//                 },
//                 {
//                     "title": "Environment",
//                     "value": "production",
//                     "short": true
//                 },
//                 {
//                     "fallback": "Book your flights at https://flights.example.com/book/r123456",
//                     "actions": [
//                         {
//                             "type": "button",
//                             "name": "travel_request_123456",
//                             "text": "Book flights 🛫",
//                             "url": "https://flights.example.com/book/r123456",
//                             "style": "primary",
//                             "confirm": "Really?"
//                         },
//                         {
//                             "type": "button",
//                             "name": "travel_cancel_123456",
//                             "text": "Cancel travel request",
//                             "url": "https://requests.example.com/cancel/r123456",
//                             "style": "danger"
//                         }
//                     ]
//                 }
//             ]
//         }
//     ],
//     username: SLACK_USER_NAME,
//     icon_emoji: SLACK_ICON_EMOJI
// });


slack.send({
  text: process.env.SLACK_TEXT,
  attachments: process.env.ATTACHMENTS,
  username: process.env.SLACK_USER_NAME,
  icon_emoji: process.env.SLACK_ICON_EMOJI,
});
