
const fs = require('fs');

var main = [];

fs.readdir('./', (err, files) => {
    const nodefiles = files.filter(f => f.substring(0,4) === 'node' && f !== 'node_modules');
    const mainArray = nodefiles.reduce((arr, f) => {
        const data = fs.readFileSync(f);
        const allgroups = JSON.parse(data);
        const groups = allgroups.filter(g => g.country === 'US' && g.next_event !== undefined);
        //arr.concat(groups);
        for (const item of groups) {
            arr.push(item);
        }
        //console.log('arr.length: ' + arr.length);
        return arr;
    }, []);
    mainArray.forEach(r => console.log(`"${r.name}","${r.urlname}","${r.lat}","${r.lon}","${r.organizer.name}"`));
});

