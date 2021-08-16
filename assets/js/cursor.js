let mouseCursor = document.querySelector(".cursor");

let navLinks = document.querySelectorAll("#nav-item");

let introText = document.querySelectorAll(".intro-text");

window.addEventListener('mousemove', cursor);

function cursor(e) {
mouseCursor.style.top = e.pageY + 'px';
mouseCursor.style.left = e.pageX + 'px';
}


navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow");
    });
    link.addEventListener('mouseout', () => {
        mouseCursor.classList.remove("link-grow");
    })

});

introText.forEach(text => {
    text.addEventListener('mouseover', () => {
        mouseCursor.classList.add("link-grow-text");
    });
    text.addEventListener('mouseout', () => {
        mouseCursor.classList.remove("link-grow-text");
    });

});