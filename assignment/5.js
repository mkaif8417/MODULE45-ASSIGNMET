function greet(name){
    return new Promise((resolve)=>{
        resolve(`Hello ${name}`)
    })
}

greet("Mohd kaif").then((msg)=>{
    console.log(msg);
    
})
