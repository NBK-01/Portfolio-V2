// alert("Hey there! I'm working on a new portfolio, ")



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  
let contactBtn = document.querySelector(".contact-btn")
let contactBtnMobile = document.querySelector(".contact-btn-mobile")
var contactPage = 'contact.html'

contactBtnMobile.addEventListener("click", function(){
  document.location.replace(contactPage);
})

contactBtn.addEventListener("click", function(){
    document.location.replace(contactPage);
})



