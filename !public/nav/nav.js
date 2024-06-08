let btn = document.querySelector("nav .brgBtn")
let list = document.querySelector("nav .list")
btn.addEventListener('click', ()=>{
   list.classList.toggle('show')
}, false)