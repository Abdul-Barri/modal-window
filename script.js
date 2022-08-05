"use strict";

const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", function () {
        modal.classList.remove("hidden");
    });
}
