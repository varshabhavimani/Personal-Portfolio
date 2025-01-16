
/* ------------- toggle bar -----------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick=() =>{
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}
/* ------------- scroll section active link----------------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};
/* ------------- scroll js----------------*/
ScrollReveal({
    distance : '80px',
    duration : 2000,
    delay : 200,
});
ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.image,.skills-container,.resume-img,.contact form',{origin:'buttom'});
ScrollReveal().reveal('.home-content h1,.about-image',{origin:'left'});
ScrollReveal().reveal('.home-content h3,.about-content',{origin:'right'});

/* ------------- typed js----------------*/

const typed = new Typed('.multiple-txt',{
    strings : ['Web developer','Java developer','Frontend developer'],
    typeSpeed:70,
    backSpeed : 70,
    backDelay : 1000,
    loop:true,
}); 