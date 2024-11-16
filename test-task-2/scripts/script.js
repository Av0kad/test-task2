const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openBtn.addEventListener("click", () =>{
    modal.classList.add("open");
})
closeBtn.addEventListener("click", () =>{
    modal.classList.remove("open");
})


document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
      const accordionBody = button.nextElementSibling;
      const icon = button.querySelector('.icon');
  
      button.classList.toggle('active');
  
      if (button.classList.contains('active')) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
        icon.textContent = '-';
      } else {
        accordionBody.style.maxHeight = 0;
        icon.textContent = '+';
      }
    });
  });