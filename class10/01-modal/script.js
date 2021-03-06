// grab all the elements

const toggle = document.getElementById('toggle')
const close = document.getElementById('close')
const open = document.getElementById('open')
const modal = document.getElementById('modal')
const navbar = document.getElementById('navbar')


console.log(modal);

//toggle nav bar
toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav');
    document.body.addEventListener('click', closeNavBar)
})


//show the modal
open.addEventListener('click', () => { modal.classList.add('show-modal') })
//hide the modal 
close.addEventListener('click', () => { modal.classList.remove('show-modal') })

// hide the modal on outside click 
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('modal-container') : false)