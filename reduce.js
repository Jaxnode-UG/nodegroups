
const files = ['one', 'two', 'three', 'four'];

const newfiles = files.reduce((arr, f) => {
    if (f !== 'two') {
        arr.push(f);
    }
    return arr;
}, []);

console.log(newfiles);