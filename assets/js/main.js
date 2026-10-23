    
(function() {
  "use strict";

    // Scroll to top button
    const scrollBtn = document.getElementById("scrollTopBtn");

    // Show button when scrolling down 100px
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    };

    // Scroll to top on click
    scrollBtn.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });


 // auto hide on page load with fade
  window.addEventListener('load', () => {
    const pre = document.getElementById('preloader');
    if(!pre) return;
    // allow any finishing animations (optional)
    setTimeout(() => {
      pre.classList.add('hidden');
      pre.setAttribute('aria-hidden','true');
    }, 10); // tweak delay if you want
  });

  // if you navigate SPA-style, call hidePreloader() after app boot
  function hidePreloader() {
    const pre = document.getElementById('preloader');
    if(!pre) return;
    pre.classList.add('hidden');
    pre.setAttribute('aria-hidden','true');
  }




})();