var sidenav = document.getelementById("sidebar");
sidenav.focus();

function hovernav(navoption) {
    navoption.style.backgroundColor = "#ffffff41";
    navoption.style.color = "#ffe4e3";
}

function leavenav(navoption) {
    navoption.style.backgroundColor = "";
    navoption.style.color = "";
}
