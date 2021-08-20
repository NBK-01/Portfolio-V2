// alert("Hey there! viewing this webpage on desktop is recommended")

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });




let aboutBtn = document.querySelector(".abt-btn")
let aboutBtnMobile = document.querySelector(".abt-btn-mobile")
var aboutPage = 'about.html'

aboutBtnMobile.addEventListener("click", function(){
  document.location.replace(aboutPage);
})

aboutBtn.addEventListener("click", function(){
    document.location.replace(aboutPage);
})