console.log('hello');

//yeild undefined
let hello = "hello";
console.log(global.hello);

//comes with node automatically 
let path = require('path');

//__dirname gives full directory path 
//__filename gives full path with filename 
//path.basename(__filename) gives only current file 