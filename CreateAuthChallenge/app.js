console.log('Loading');

exports.handler = function (event, context) {

    if (event != null) {
        console.log('event = ' + JSON.stringify(event));
    }
    else {
        console.log('No event object');

    }

    if (event.request.challengeName == 'CUSTOM_CHALLENGE') {
        event.response.publicChallengeParameters = {};
        event.response.publicChallengeParameters.answer = 6;
        event.response.privateChallengeParameters = {};
        event.response.privateChallengeParameters.answer = 6;
        event.response.challengeMetadata = 'SIMPLE_CHALLENGE';
    }

    console.log('event = ' + JSON.stringify(event));

    context.done(null, event);  // SUCCESS with message
};
