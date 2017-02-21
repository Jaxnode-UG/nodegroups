
const fs = require('fs');

var main = [];

fs.readdir('./', (err, files) => {
    const nodefiles = files.filter(f => f.substring(0,4) === 'node' && f !== 'node_modules');
    nodefiles.forEach(f => {
        fs.readFile(f, (err, data) => {
            if (err) console.error(err);
            const allgroups = JSON.parse(data);
            //console.log(groups.length);
            const groups = allgroups.filter(g => g.country === 'US');
            
            groups.forEach(g => {
                console.log(`id: ${g.id}, name: ${g.name}, link: ${g.link}, country: ${g.country}`);
            });
            main.push(groups);
        })    
    });
});