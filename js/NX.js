document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("sidenav").focus();
  
/* footer */

 /* https://stackoverflow.com/a/37020542 */
document.addEventListener("scroll", function () 
{
      document.getElementById("footer").style.height="0px";
});


if (navigator.userAgent.toLowerCase().includes("wifiwebauthapplet")) {
  /* it has its own :p */
  document.getElementById("footer").style.display = "none";  
} else {
  document.getElementById("footer").style.display = "block";  

}
/* footer */


})



function closenav() {
  changetitlesize(); document.getElementById("pagehead").style.height="65px";
    document.getElementById("pagehead").style.width="1050px"; document.getElementById("sectiontitle").style.fontSize="28px";
  document.getElementById("tempcover").style.display="none";
   document.getElementById("sidenav").style.transition=".2s ease-in-out";
   document.getElementById("contentaftersidenav").style.transition=".2s ease-in-out";
    document.getElementById("titlelist").style.margin="auto";
    document.getElementById("sidenav").style.width="85px"; document.getElementById("sidenav").style.maxWidth="85px"; document.getElementById("sidenavlinks").style.display="none"; document.getElementById("sidenavcover").style.display="block";
    document.getElementById("contentaftersidenav").style.marginLeft="60px"; document.getElementById("contentaftersidenav").style.width="1280px"; document.getElementById("contentaftersidenav").style.maxWidth="1280px";
    document.getElementById("innerContent").style.maxWidth="1175px"; 
}

function opennav() {
  document.getElementById("pagehead").style.width="760px"; document.getElementById("sectiontitle").style.fontSize="22px";
  document.getElementById("pagehead").style.height="55px";
  var bgofside = document.getElementById("sidenav").style.backgroundColor;
  document.getElementById("tempcover").style.backgroundColor= bgofside;
  document.getElementById("tempcover").style.display="block";
  changetitlesizeback();
  document.getElementById("sidenav").style.transition=".5s ease-in-out";
  document.getElementById("contentaftersidenav").style.transition=".5s ease-in-out";
      document.getElementById("sidenavcover").style.display="none";
    document.getElementById("sidenav").style.width="410px"; document.getElementById("sidenav").style.maxWidth="410px";
   document.getElementById("contentaftersidenav").style.marginLeft="410px"; document.getElementById("contentaftersidenav").style.width="870px"; document.getElementById("contentaftersidenav").style.maxWidth="870px";
document.getElementById("innerContent").style.maxWidth="815px";
    document.getElementById("innerContent").style.paddingLeft="55px"; 
    setTimeout(showlinksforgoodanim,100); function showlinksforgoodanim() {document.getElementById("sidenavlinks").style.display="block"; document.getElementById("tempcover").style.display="none";}
}


function changetitlesize() {
const titlelist = document.getElementById('titlelist');

if (titlelist) {
  titlelist.style.transformOrigin = 'top left';
  titlelist.style.transform = 'scale(1.4)';
}

}

function changetitlesizeback() {
const titlelist = document.getElementById('titlelist');

if (titlelist) {
  titlelist.style.transformOrigin = 'top';
  titlelist.style.transform = 'scale(1)';
}

}