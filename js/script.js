const sr = ScrollReveal({
    distance: '65px',
    duration: 2500,
    delay: 450,
    reset: true
})

sr.reveal('.koneko-text',{delay:200, origin:'top'})
sr.reveal('.koneko-img',{delay:450, origin:'top'})
sr.reveal('.icons',{delay:550, origin:'left'})
sr.reveal('.scroll-down',{delay:550, origin:'right'})
sr.reveal('footer',{delay:550, origin:'bottom'})

let mybutton = document.getElementById("scroll");
// // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 5|| document.documentElement.scrollTop >= 5) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}