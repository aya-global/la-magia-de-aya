// js/script.js

// DARK MODE

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  // حفظ الوضع

  if(document.body.classList.contains("dark-mode")){

    localStorage.setItem("theme","dark");

    darkModeBtn.innerHTML = "☀️";

  }else{

    localStorage.setItem("theme","light");

    darkModeBtn.innerHTML = "🌙";

  }

});

// استرجاع الوضع عند إعادة فتح الموقع

window.addEventListener("load", () => {

  const savedTheme = localStorage.getItem("theme");

  if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

    darkModeBtn.innerHTML = "☀️";

  }

});


// SMOOTH SCROLL EFFECT

document.querySelectorAll("a").forEach(link => {

  link.addEventListener("mouseenter", () => {

    link.style.transition = "0.3s";

  });

});


// SIMPLE FADE ANIMATION

const cards = document.querySelectorAll(
  ".product-card, .review-card"
);

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 50){

      card.style.opacity = "1";
      card.style.transform = "translateY(0)";

    }

  });

});

// البداية

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s";

});