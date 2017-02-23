const fs = require('fs');
const _ = require('highland');

let collector = [];


const nodefiles = [...Array(28).keys()].map(x => `node${x}.json`);
const nodejsfiles = [...Array(30).keys()].map(x => `nodejs${x}.json`);

const combinedfiles = nodefiles.concat(nodejsfiles);
//console.log(combinedfiles);
//f.country === 'US' && 
let counter = 0;
var readFile = _.wrapCallback(fs.readFile);
var data = _(combinedfiles) // Creates a stream from an array of filenames
    .map(readFile)      // Maps each filename into a Highland stream that reads from that file.
    .merge()
    .map(JSON.parse)
    .flatten()
    .filter(f => f.next_event !== undefined && f.country !== 'US' && (f.name.includes('node') || f.name.includes('Node') || f.name.includes('NODE')))
    .map(m => ({ name: m.name, urlname: m.urlname, lat: m.lat, lon: m.lon, manager: m.organizer.name, country: m.country, city: m.city, state: m.state }))
    .uniq()
    .group(c => c.country)
    //.each(_.log)
    .each(e => collector.push(e))
    .done(d => {
        
        fs.writeFile('nonusnodegroups.json', JSON.stringify(collector));
        
    });
    //.pipe(writeStream);
//const myArray = data.toArray();
