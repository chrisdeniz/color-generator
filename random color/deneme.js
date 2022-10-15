let colors = ["red","green","purple","yellow","wheat","orange","blue"];
const btn = document.getElementById("changeColor")
const color = document.querySelector(".color")
 setInterval(function(){
    let colora = ''
    const randomNumber = getrandomNumber()
    for(let i=0;i<9999;i++){
        colora += colors[getrandomNumber()]
    }
    document.body.style.backgroundColor = colors[randomNumber];
    document.getElementById("changeColor").style.backgroundColor= colors[randomNumber];
    color.textContent = colors[randomNumber]
},600);
function getrandomNumber(){
    return  Math.floor(Math.random()* colors.length)
 }
