
// console.log(process.platform);
// console.log(process.cpuUsage());
// console.log(process.cwd())

// let c=0;
// setInterval(()=>{
//     console.log(c++);
// },1000)

// process.on('SIGINT',function(){
//     console.log('\n exiting application, bye bye');
//     process.exit()
// })

var input_stdin="";
var input_stdin_array="";
var input_currentline=0;

process.stdin.on('data', function(data){
    console.log(`\n\n input is ${data}`)
    input_stdin+=data;
})

process.stdin.on('end', function(){
    input_stdin_array=input_stdin.split("\n");
    main();
})

process.on("SIGINT",()=>{
    main();
    process.exit()
})

function main(){
    console.log(input_stdin);
}