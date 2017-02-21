
const fetch = require('node-fetch');
const fs = require('fs');

const state = 0;

// javascript

getGroups(state);

function getGroups(state) {
    fetch('https://api.meetup.com/find/groups?&sign=true&photo-host=public&filter=all&text=nodejs&radius=global&page=20&offset=' + state + '&key=' + process.env.meetupapi_key)
    .then(r => r.json())
    .then(res => {
        fs.writeFile('nodejs' + state + '.json', JSON.stringify(res), (err, result) => {
           if (err) {
               console.error(err);
           } 
        });
        if (res.length == 20) {
            state++;
            getGroups(state);
        }
    });
}