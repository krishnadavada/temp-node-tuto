const { error } = require("console")
const {readFile,writeFile}=require("fs")

console.log("start")
readFile('./content/first.txt','utf-8',(error,result)=>{
    if(error){
        console.log(error)
        return
    }
console.log(result)
    readFile('./content/second.txt','utf-8',(error,result)=>{
        if(error){
            console.log(error)
            return
            }
            console.log(result)
        })
})
writeFile('./content/newAsync.txt',`new created file with aynchronus fs...`,(err,result)=>{
    if(err){
        console.log(err)
        return
        }
        console.log(result)
        console.log('done with this task')

})

// const second=readFile('./content/second.txt','utf-8')

// console.log(first)
// console.log(second)

// writeFileSync('./content/newCreated.txt',
//     `here is the result : ${first},${second}`
// )
// writeFile('./content/newCreated.txt',
//     `here is the result : ${first},${second}`,
//     {flag:'a'}//append mode
// )