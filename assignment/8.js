let getdata=async ()=>{
    let response=await fetch("https://jsonplaceholder.typicode.com/posts")
   
   let data=response.json()
   console.log(data);
   
}
getdata()
