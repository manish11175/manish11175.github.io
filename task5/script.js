(function(){
const login_container=document.querySelector(".login-container");
const Loginbutton=document.getElementById("login-btn");
Loginbutton.addEventListener('click',()=>{
    login_container.classList.add("show")
    login_container.classList.remove("hide")
})

const closeButton=document.getElementById("close");
closeButton.addEventListener('click',()=>{
    login_container.classList.remove("show")
    login_container.classList.add("hide")
});
}());