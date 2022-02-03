const newman = require('newman');
newman.run({
    collection: require('./Collection/Transaction.postman_collection.json'),
    environment: require('./Collection/Dmoney_LIVE_ENV.postman_environment.json'), 
    iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', 
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});