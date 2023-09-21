function myFunction() {
  var x = document.querySelector('.sticky');
  var y = document.querySelector('.menu-popup');
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
    x.style.opacity = "1";
    y.style.visibility = "hidden";
    y.style.opacity = "0";
  } else {
    x.style.visibility = "hidden";
    x.style.opacity = "0";
    y.style.visibility = "visible";
    y.style.opacity = "1";
  }
}

function clousePopup() {
  var x = document.querySelector('.sticky');
  var y = document.querySelector('.menu-popup');
  if (y.style.visibility === "visible") {
    y.style.visibility = "hidden";
    y.style.opacity = "0";
    x.style.visibility = "visible";
    x.style.opacity = "1";
  } 
}

function openArticle1() {
  let sortArticle1 = document.querySelector('.short-article1');
  let fullArticle1 = document.querySelector('.article1');

  sortArticle1.classList.add('hidden');
  fullArticle1.classList.remove('hidden');
  fullArticle1.classList.add('show');
}

function openArticle2() {
  let sortArticle2 = document.querySelector('.short-article2');
  let fullArticle2 = document.querySelector('.article2');

  sortArticle2.classList.add('hidden');
  fullArticle2.classList.remove('hidden');
  fullArticle2.classList.add('show');
}