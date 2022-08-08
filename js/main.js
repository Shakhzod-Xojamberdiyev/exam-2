var elOpenModalBtn = document.querySelector(".bottom__bt");
var elModal = document.querySelector(".modal");
var elCloseModalBtn = document.querySelector(".modal__close-btn");

elOpenModalBtn.addEventListener("click" , function(){
    elModal.classList.add("modal-open")

});
elCloseModalBtn.addEventListener("click" , function(){
    elModal.classList.remove("modal-open");
});