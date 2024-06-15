var element;
// element = document.getElementById("blogging-box").innerHTML;
// element = document.getElementById("footer-sidebar").attributes;
//  document.getElementById("breadcrumbs").innerHTML = "<h1>wow</h1>";
 
 document.getElementById("breadcrumbs").setAttribute("style","border:5px dotted yellow");
 element = document.getElementById("breadcrumbs").getAttribute("class");

 document.querySelector("#breadcrumbs").innerHTML = "<h1>HELLO</h1>";

//  element = document.querySelectorAll("ul")[1].innerHTML;
// element = document.querySelectorAll("#breadcrumbs h1");
 document.querySelector("#breadcrumbs").style.backgroundColor = "pink";
 document.querySelector("#breadcrumbs").style.color = "blue";
 element = document.querySelector("#breadcrumbs").style.color;

console.log(element);