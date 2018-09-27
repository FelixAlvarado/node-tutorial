//process.stdout.write(string) is same is console log

process.stdout.write('what is your name \n');


//on listens for data being sent to terminal and sends data waits for user to type info in
process.stdin.on('data',data =>{
    console.log(data.toString().trim());
});