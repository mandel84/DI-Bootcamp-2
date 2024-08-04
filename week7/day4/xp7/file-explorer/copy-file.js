const fs = require('fs');

const sourceFilePath = 'source.txt';
const destinationFilePath = 'destination.txt';

fs.readFile(sourceFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading source file:', err);
        return;
    }

    fs.writeFile(destinationFilePath, data, (err) => {
        if (err) {
            console.error('Error writing to destination file:', err);
            return;
        }
        console.log('Content copied from source.txt to destination.txt successfully.');
    });
});
