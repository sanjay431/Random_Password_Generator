//I will come back and finish rhis

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


const genratePass = document.getElementById("main")
const pass1 = document.getElementById("pass1")
const pass2 = document.getElementById("pass2")


let passwordlength = 12

function getrandomchar()  {
    let randomchar = characters[Math.floor(Math.random()*characters.length)]
    return randomchar;
}
let characterRandom=getrandomchar()

  
function getrandompass() {
    let randompass = ""
    for (let i=0;i<passwordlength;i++){
        randompass += getrandomchar()
    }
    return randompass 
}
//so it can be copied later
let password1 = ""
let password2 = ""

genratePass.addEventListener("click",function(){
    
    password1 = getrandompass()
    password2 = getrandompass()

   
    pass1.textContent= password1
    pass2.textContent= password2

})
pass1.addEventListener('click',function() {
    navigator.clipboard.writeText(password1)
    alert("Copied:" + password1)
})
pass2.addEventListener('click',function() {
    navigator.clipboard.writeText(password2)
    alert("Copied:"+ password2)
})
