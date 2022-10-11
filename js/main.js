"use strict";
document.querySelector('.burger i').addEventListener('click', e => {
    e.target.classList.toggle('fa-xmark');
    e.target.classList.toggle('fa-bars');
    document.querySelector('.head-nav').classList.toggle('active');
})
