let navToggle = document.querySelector('.hamburger');
let closeMenu = document.querySelector('.menufullscreen-svg');

let fullScreenMenu = document.querySelector('.menufullscreen');
let main = document.querySelector('.main');


navToggle.addEventListener('click', () => {
    main.classList.add('invisible');
    fullScreenMenu.classList.add('visible');
})

closeMenu.addEventListener('click', ()=>{
    fullScreenMenu.classList.remove('visible');
    main.classList.remove('invisible');

} )