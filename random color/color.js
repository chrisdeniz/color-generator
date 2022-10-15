let colors = ["red","green","purple","yellow","wheat","orange","blue"];
const btn = document.getElementById("changeColor")
const color = document.querySelector(".color")



btn.addEventListener('click', function(){
    const randomNumber = getrandomNumber()
    document.body.style.backgroundColor = colors[randomNumber];
    document.getElementById("changeColor").style.backgroundColor= colors[randomNumber];
    color.textContent = colors[randomNumber]
       

});
 function getrandomNumber(){
    return  Math.floor(Math.random()* colors.length)
 }
    


