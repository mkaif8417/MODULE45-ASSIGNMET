function objects(books,callback){
let newlist=[];
let a=books.map((books)=>books.title)
newlist.push(...a)
callback(newlist)
}

function calfun(newlist){
newlist.sort();
console.log("sorted book title:",newlist);

}

objects([{
    title:"rich dad",
    author:"kaif",
    year:2002
},{
    title:"god and love",
    author:" mohd kaif",
    year:2005
},{
    title:"hello",
    author:"sumit",
    year:2004
}],calfun)