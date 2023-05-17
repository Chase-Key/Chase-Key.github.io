const wrapper2 = document.querySelector('.wrapper-2');
const wrapper1a = document.querySelector('.wrapper-1a');
const wrapper1b = document.querySelector('.wrapper-1b');
const wrapper1c = document.querySelector('.wrapper-1c');
const wrapper1d = document.querySelector('.wrapper-1d');

const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const btnLogin = document.querySelector('.btnLogin-popup');
const btnAbout = document.querySelector('.btnAbout-popup');
const btnProficiency = document.querySelector('.btnProficiency-popup');
const btnProject = document.querySelector('.btnProject-popup');
const btnContact = document.querySelector('.btnContact-popup');

const iconClose = document.querySelector('.icon-close');
const iconClose1a = document.querySelector('.icon-close-1a');
const iconClose1b = document.querySelector('.icon-close-1b');
const iconClose1c = document.querySelector('.icon-close-1c');
const iconClose1d = document.querySelector('.icon-close-1d');


// --- 1a 'About' ---
btnAbout.addEventListener('click', ()=> {
    wrapper1a.classList.add('about-popup');
});

iconClose1a.addEventListener('click', ()=> {
    wrapper1a.classList.remove('about-popup');
});


// --- 1b 'Proficiency' ---
btnProficiency.addEventListener('click', ()=> {
    wrapper1b.classList.add('proficiency-popup');
});

iconClose1b.addEventListener('click', ()=> {
    wrapper1b.classList.remove('proficiency-popup');
});


// --- 1c 'Projects' ---
btnProject.addEventListener('click', ()=> {
    wrapper1c.classList.add('project-popup');
});

iconClose1c.addEventListener('click', ()=> {
    wrapper1c.classList.remove('project-popup');
});


// --- 1d 'Contact' ---
btnContact.addEventListener('click', ()=> {
    wrapper1d.classList.add('contact-popup');
});

iconClose1d.addEventListener('click', ()=> {
    wrapper1d.classList.remove('contact-popup');
});


// --- 2 ---
registerLink.addEventListener('click', ()=> {
    wrapper2.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper2.classList.remove('active');
});

btnLogin.addEventListener('click', ()=> {
    wrapper2.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper2.classList.remove('active-popup');
});

