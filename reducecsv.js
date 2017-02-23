
const fs = require('fs');
const _ = require('highland');

let writeStream = fs.createWriteStream('test.json', 'utf-8')

function createLine(line) {
    //Company	First Name	Last Name	Email
    return line.name + ', ' + line.urlname + ', ' + line.lat + ', ' + line.lon + ', ' + line.Organizer + '\n';
}


_(fs.createReadStream('mygroups.csv', 'utf-8'))
    .split('\n')
    .map(line => line.split(',') )
    .map(obj => ({
        'name': obj[0],
        'urlname': obj[1],
        'lat': obj[2],
        'lon': obj[3],
        'Organizer': obj[4]
    }))
    .uniqBy(function(a, b) { return a.urlname === b.urlname; })
    .map(createLine)
    .pipe(writeStream);
    
