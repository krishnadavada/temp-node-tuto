const {readFileSync,writeFileSync}=require("fs")

console.log('start')
const first=readFileSync('./content/first.txt','utf-8')
console.log(first)

const second=readFileSync('./content/second.txt','utf-8')

console.log(second)

// writeFileSync('./content/newCreated.txt',
//     `here is the result : ${first},${second}`
// )
writeFileSync('./content/newCreated.txt',
    `here is the result : ${first},${second}`,
    {flag:'a'}//append mode
)
console.log('done with this task')
console.log('starting the next one')