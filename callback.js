function hello(callback){
   console.log("world")
   callback()
}
 
function hii(){
    console.log("hii")
}

hello(hii)