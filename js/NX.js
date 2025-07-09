document.addEventListener("DOMContentLoaded", function () {

/* footer */
    document.addEventListener("scroll", function () {
      document.getElementById("footer").style.height="0px";

      setTimeout(function(){document.getElementById("footer").style.height="69px";},350);
});

if (navigator.userAgent.toLowerCase().includes("WifiWebAuthApplet")) {
  /* it has its own :p */
  document.getElementById("footer").style.display = "none";  
} else {
  document.getElementById("footer").style.display = "block";  
      /* https://stackoverflow.com/a/37020542 */

}
/* footer */


})
