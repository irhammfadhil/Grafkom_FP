 function tempe(){
 // var a = random(0,50); 
 // purekey = ["p","a","p","a","m","a","m","a"];

 // return purekey; 
 // 
 var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
  var path=[];
  for(var i =0;i<8;i++){
    path[i]=possible[Math.floor(Math.random() * 30) + 0];
  } 
// console.log(path);
return path;

} 
module.exports.leleGoreng = tempe;