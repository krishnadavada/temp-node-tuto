// const amount=3;
// if(amount<10){
//     console.log("small number");
// }
// else{
//     console.log("large number");
// }
// console.log(`hey its my first node!!!`)

// //Global Variables : 
// console.log("_ _dirname : ",__dirname)
// console.log("_ _filename : ",__filename)
// // console.log("module : ",module)
// // console.log("process : ",process)

//module os
const os=require('os')

//info about current user
const user=os.userInfo()
console.log(user)

//method returns the system uptime in seconds
const upt=os.uptime()
console.log(upt)


const currentos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
    hostname:os.hostname()
}

console.log(currentos)