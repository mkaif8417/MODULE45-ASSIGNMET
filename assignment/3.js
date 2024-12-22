function ageindays(obj,callback){

let fullname=obj.firstname+" "+obj.lastname
let ageid=obj.age*365;
callback(fullname,ageid)}

 function print(fullname,ageid){
    console.log(`The person's fullname is ${fullname} and their age in days is ${ageid}.`);
    
}

ageindays({firstname:"mohd",lastname:"kaif",age:23},print)



