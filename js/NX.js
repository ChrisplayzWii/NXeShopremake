var loadedin = 0;



function fullyloadedin() {
loadedin = 1;
initialloadintoeshop();

var content = document.getElementById('content'); 
content.onmouseover = function() {
  movenavformaincontent();
};


}


function initialloadintoeshop() {
  // first page they see
  changecontentfornav('2');
    var sidebar2 = document.getElementById("sidelinks");
    sidebar2.focus();
/*
        var sidebar3 = document.getElementById("search-navopt");
    sidebar3.focus();
    */
}


function movebacknav() {
    var sidebar2 = document.getElementById("sidelinks");
    sidebar2.focus();
        var sidebar3 = document.getElementById("search-navopt");
    sidebar3.focus();
document.getElementById("sidebar").style.width="480px";
document.getElementById("sidebar").style.overflow="hidden";
document.getElementById("sidelinks").style.display="block";
document.getElementById("sidebarcoverwhenmoved").style.display="none";
changetitlesizeback();
}


function movenavformaincontent() {
document.getElementById("sidebar").style.width="60px";
document.getElementById("sidebar").style.overflow="hidden";
document.getElementById("sidebarcoverwhenmoved").style.display="block";
document.getElementById("sidelinks").style.display="none";
changetitlesize();
}

function changetitlesize() {
const titlelist = document.getElementById('titleslist');

if (titlelist) {
  titlelist.style.transformOrigin = 'top left';
  titlelist.style.transform = 'scale(1.2)';
}

document.getElementById("sectiontitle").style.fontSize="28px";
}

function changetitlesizeback() {
const titlelist = document.getElementById('titleslist');

if (titlelist) {
  titlelist.style.transformOrigin = 'top left';
  titlelist.style.transform = 'scale(1)';
}

document.getElementById("sectiontitle").style.fontSize="23px";
}


function changecontentfornav(cont) {

 if (cont ==  1) {

   var titleofcatalog = document.getElementById("sectiontitle"); var catalog = document.getElementById("titleslist");
    if (titleofcatalog) {  titleofcatalog.innerText="Search/Browse"; } 

/*
    if (catalog) {
     catalog.innerHTML=
      `

      `;
     }
*/
 }
  if (cont ==  2) {

 var titleofcatalog = document.getElementById("sectiontitle"); var catalog = document.getElementById("titleslist");
    if (titleofcatalog) { titleofcatalog.innerText="Featured"; }

/*
    if (catalog) {
     catalog.innerHTML=
      `

      `;
     }
*/
 }
  if (cont ==  3) {

    var titleofcatalog = document.getElementById("sectiontitle"); var catalog = document.getElementById("titleslist");
    if (titleofcatalog) { titleofcatalog.innerText="Recent Releases"; }

/*
    if (catalog) {
     catalog.innerHTML=
      `

      `;
     }
*/
 }
  if (cont ==  4) {
    var titleofcatalog = document.getElementById("sectiontitle"); var catalog = document.getElementById("titleslist");
    if (titleofcatalog) { titleofcatalog.innerText="Great Deals";} 

/*
    if (catalog) {
     catalog.innerHTML=
      `

      `;
     }
*/
 }
  if (cont ==  5) {
    var titleofcatalog = document.getElementById("sectiontitle"); var catalog = document.getElementById("titleslist");
    if (titleofcatalog) { titleofcatalog.innerText="Best Sellers"; }

/*
    if (catalog) {
     catalog.innerHTML=
      `

      `;
     }
*/
  }
  if (cont ==  6) {
    var titleofcatalog = document.getElementById("sectiontitle"); var catalog = document.getElementById("titleslist");
    if (titleofcatalog) { titleofcatalog.innerText="Coming Soon"; }

/*
    if (catalog) {
     catalog.innerHTML=
      `

      `;
     }
*/
 }
  if (cont ==  7) {
    var titleofcatalog = document.getElementById("sectiontitle"); var catalog = document.getElementById("titleslist");
    if (titleofcatalog) { titleofcatalog.innerText="Nintendo Switch Online"; }

/*
    if (catalog) {
     catalog.innerHTML=
      `

      `;
     }
*/
 }
  if (cont ==  8) {
    var titleofcatalog = document.getElementById("sectiontitle"); var catalog = document.getElementById("titleslist");
    if (titleofcatalog) { titleofcatalog.innerText="Redeem Code"; }

/*
    if (catalog) {
     catalog.innerHTML=
      `

      `;
     }
*/
 }

}

