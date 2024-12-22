

const getdata=async ()=>{
    console.log("getting the data");
    let response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data=response.json();
    console.log(data);
    
}
getdata()