const toggleNav = document.querySelector('.navbar-icon')
const menuBar = document.querySelector('.navbar')
toggleNav.addEventListener('click', (e)=>{
    e.preventDefault();
    menuBar.classList.toggle('activeNav')
})