var sidenav = document.getElementById("sidebar");
sidenav.focus();

function hovernavoption(number) {
   if (number == 1) {
    document.getElementById("featured-navopt").classList.add("selectednav");
   }
      if (number == 2) {
    document.getElementById("recentreleases-navopt").classList.add("selectednav");
   }
         if (number == 3) {
    document.getElementById("recentreleases-navopt").classList.add("selectednav");
   }
         if (number == 4) {
    document.getElementById("greatdeals-navopt").classList.add("selectednav");
   }
         if (number == 5) {
    document.getElementById("bestsellers-navopt").classList.add("selectednav");
   }
         if (number == 6) {
    document.getElementById("comingsoon-navopt").classList.add("selectednav");
   }
         if (number == 7) {
    document.getElementById("nso-navopt").classList.add("selectednav");
   }
         if (number == 8) {
    document.getElementById("entercode-navopt").classList.add("selectednav");
   }
}

function unhovernavoption(number) {
   if (number == 1) {
    document.getElementById("featured-navopt").classList.remove("selectednav");
   }
      if (number == 2) {
    document.getElementById("recentreleases-navopt").classList.remove("selectednav");
   }
         if (number == 3) {
    document.getElementById("recentreleases-navopt").classList.remove("selectednav");
   }
         if (number == 4) {
    document.getElementById("greatdeals-navopt").classList.remove("selectednav");
   }
         if (number == 5) {
    document.getElementById("bestsellers-navopt").classList.remove("selectednav");
   }
         if (number == 6) {
    document.getElementById("comingsoon-navopt").classList.remove("selectednav");
   }
         if (number == 7) {
    document.getElementById("nso-navopt").classList.remove("selectednav");
   }
         if (number == 8) {
    document.getElementById("entercode-navopt").classList.remove("selectednav");
   }
}