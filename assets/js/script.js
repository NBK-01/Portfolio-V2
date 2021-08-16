// alert("Hey there! viewing this webpage on desktop is recommended")

let aboutBtn = document.querySelector(".abt-btn")
var aboutPage = 'about.html'

aboutBtn.addEventListener("click", function(){
    document.location.replace(aboutPage);
})