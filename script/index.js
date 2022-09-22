"use strict";

// Global

const ratingNumbers = Array.from(document.querySelectorAll('.rating-number'));
const submit = document.getElementsByClassName('submit')[0];
const ratingWindow = document.getElementsByClassName('rating-window')[0];
const resultWindow = document.getElementsByClassName('result-window')[0];
const resultMessage = document.querySelector('.result');

// Selecting a number

ratingNumbers.forEach(rating => {
    rating.addEventListener('click', (e) => {
        ratingNumbers.forEach((rating) => {
            rating.classList.remove('active');
        });
        rating.classList.toggle('active');
    });
});

// Showing result window and message

submit.addEventListener('click', () => {
    ratingNumbers.forEach((rating) => {
        if (rating.classList.contains("active")) {
            const resultNumber = document.querySelector('.active');
            ratingWindow.style.display = "none";
            resultWindow.style.display = "block";
            resultMessage.textContent = `You selected ${resultNumber.textContent} out of 5`;
        }
    });
});
