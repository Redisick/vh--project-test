const navToggle = document.querySelector('.nav-toggle');
const navToggleClose = document.querySelector('.nav-toggle-close');
const navLinks = document.querySelectorAll('.nav-link');

const nav = document.getElementById('sidebar');
const toggle = document.getElementById('toggle');
const navList = document.getElementById('nav-list');

document.onclick = function(e){
    if (!navList.contains(e.target) && e.target !== nav && !toggle.contains(e.target)){
        document.body.classList.remove('nav-open');
    }
}

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navToggleClose.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
       document.body.classList.remove('nav-open');
    });
});

  