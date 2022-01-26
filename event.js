
const EventEmitter= require('events');

const emitter = new EventEmitter();

emitter.on("sendMessage",(...arg)=>{
    console.log('You are trying to send some information',arg);
})

emitter.emit("sendMessage");

setInterval(()=>{
    emitter.emit("sendMessage",1,2,3);
},1000)