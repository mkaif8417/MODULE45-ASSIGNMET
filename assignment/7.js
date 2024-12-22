let multiplerequest=async ()=>{
    let response1=await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data1=response1.json()
    console.log(data1.promiseresult);
    
    let response2=await fetch("https://jsonplaceholder.typicode.com/posts/1")
    let data2=response2.json()
    // console.log(data2);
    const objec={
        todo:data1,
        post:data2
    }
    return objec;
}
multiplerequest().then((overalldata)=>{
    console.log(overalldata);
    
})