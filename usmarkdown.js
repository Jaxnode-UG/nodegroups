
//currentintiatives.md

// ## United States

// ### Florida
// Location | Event | Website | Contact Point
// -------- | ----- | ------- | -------------
// Jacksonville | JaxNode | <https://www.jaxnode.com/> | Twitter: [@jaxnode](https://twitter.com/jaxnode)


const fs = require('fs');


const stateObj = {
    CA: 'California',
    IN: 'Indiana',
    PA: 'Pennsylvania',
    MA: 'Massachusetts',
    NY: 'New York',
    NH: 'New Hampshire',
    MD: 'Maryland',
    TX: 'Texas',
    FL: 'Florida',
    UT: 'Utah',
    IL: 'Illonois',
    DC: 'District of Columbia',
    MO: 'Missouri',
    MN: 'Minnesota',
    ME: 'Maine',
    GA: 'Georgia',
    AZ: 'Arizona',
    NC: 'North Carolina',
    OR: 'Oregon'
}

fs.readFile('nonusnodegroups.json', 'utf-8', (err, data) => {
    const groupObj = JSON.parse(data);
    const groups = groupObj[0];
    Object.keys(groups).forEach(function(key) {
        console.log(`## ${key}`);
        console.log('Location | Event | Website | Contact Point');
        console.log('-------- | ----- | ------- | -------------');
        let keyGroup = uniq(groups[key]);
        keyGroup.forEach(item => {
           console.log(`${item.city} | ${item.name} | [https://meetup.com/${item.urlname}](https://meetup.com/${item.urlname}) | ${item.manager}`); 
        });
    });
});

function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item.urlname) ? false : (seen[item.urlname] = true);
    });
}
