const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("changeColor")
const color = document.querySelector(".color")
const stp = document.getElementById("stopColor")


 let intervalID;
 
 function start(){
    let hexColor = '#';
    for(let i=0;i<6;i++){
        hexColor += hex[getrandomNumber()]
    }
    color.textContent=hexColor
    document.body.style.backgroundColor= hexColor
    document.getElementById("changeColor").style.backgroundColor= hexColor;
    document.getElementById("stopColor").style.backgroundColor= hexColor; 
    intervalID = setTimeout(start,1000)
    
 }
   function stop(){
    clearTimeout(intervalID)
   }
 
  function getrandomNumber(){
    return  Math.floor(Math.random()* hex.length)
 }

  
    