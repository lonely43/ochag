//docs
{
   let imgs = document.querySelectorAll(".docsBlock .documents .doc img")
   imgs.forEach((e, i) => {e.addEventListener('click', ()=>{popupShow(e, i)},false)})
   let count = 0;

   function popupShow(e, i) {
      let src = e.src
      count = i
      document.querySelector(".docsBlock .popupContainer img").src = src;
      document.querySelector(".docsBlock .popupContainer").style.display = "block";
   }
   function nextImg() {
      if (count >= imgs.length-1) {
         document.querySelector(".docsBlock .popupContainer img").src = imgs[0].src;
         return (count = 0);
      }
      document.querySelector(".popupContainer img").src = imgs[count + 1].src;
      return count++;
   }
   function prevImg() {
      if (count <= 0) {
         document.querySelector(".docsBlock .popupContainer img").src = imgs[imgs.length-1].src;
         return (count = imgs.length-1);
      }
      document.querySelector(".docsBlock .popupContainer img").src = imgs[count - 1].src;
      return count--;
   }

   document.querySelector(".docsBlock .closeBtn").addEventListener(
      "click",
      () => {
         document.querySelector(".docsBlock .popupContainer").style.display = "none";
      },
      false
   );
   document.querySelector(".docsBlock .nextBtn").addEventListener(
      "click",
      () => {
         nextImg();
      },
      false
   );
   document.querySelector(".docsBlock .prevBtn").addEventListener(
      "click",
      () => {
         prevImg();
      },
      false
   );
}