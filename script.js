let button = document.querySelector("#toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
   if (document.documentElement.scrollTop > 20) {
      button.style.display = "block";
   } else {
      button.style.display = "none";
   }
}

function scrollToTop(){
   document.documentElement.scrollTop = 0;
}