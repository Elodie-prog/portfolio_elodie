const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

function toggleButton() {
    navList.classList.toggle('show');
}
hamburgerButton.addEventListener('click', toggleButton);

// end of hamburguer
dedito()

function dedito() {
console.log('dedito')
  
    function trackScroll() {
        console.log('trackScroll')
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('scrollToTopBtn');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('scrollToTopBtn');
      }
    }
  
    function backToTop() {
        console.log ('backToTop')
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.scrollToTopBtn');
    console.log('scrollToTopBtn')
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
}

    
   // end of scroll to top buttom

   function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }