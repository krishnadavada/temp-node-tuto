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