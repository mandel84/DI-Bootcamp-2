const { readFile, writeFile } = require('./fileManager');


const helloWorldPath = './Hello World.txt';
const byeWorldPath = './Bye World.txt';

readFile(helloWorldPath, (err, data) => {
  if (err) {
    console.error('Error reading Hello World.txt');
    return;
  }
  
  console.log('Content of Hello World.txt:', data);

  const newContent = 'Writing to the file';
  writeFile(byeWorldPath, newContent, (err) => {
    if (err) {
      console.error('Error writing to Bye World.txt');
      return;
    }
    
    console.log('Successfully wrote to Bye World.txt');
    
   
    readFile(byeWorldPath, (err, newData) => {
      if (err) {
        console.error('Error verifying Bye World.txt');
        return;
      }
      
      console.log('New content of Bye World.txt:', newData);
    });
  });
});
