let btn = document.querySelector("nav .brgBtn")
let list = document.querySelector("nav .burgerMenu .btns")
btn.addEventListener('click', ()=>{
   list.classList.toggle('show')
}, false)

let nav = document.querySelector("nav span")

window.onscroll = () => {
   if (window.scrollY >= 100) {
      nav.classList.add("miniVersion")
   } else {
      nav.classList.remove("miniVersion")
   }
}

let array = document.querySelectorAll("nav .burgerMenu .btns .cards .list h3")
Array.from(array).forEach((el, index) => {
   el.addEventListener("click",() => {
         el.parentNode.classList.toggle("showList")

         Array.from(array).forEach((e, i) => {
            if (i !== index) {
               e.parentNode.classList.remove("showList")
            }
         })
      },
      false
   )
})