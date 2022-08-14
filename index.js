document.querySelectorAll(".btn")[0].addEventListener("click", function() {
  var m = 1 + Math.floor(Math.random() * 6);
  document.querySelector(".img").setAttribute("src", "images/dice" + m + ".png");
  document.querySelector(".heading").innerHTML = "You Got" + " " + m;
});
var i = 1;
document.querySelectorAll(".btn")[1].addEventListener("click", function() {
  if (i % 2 != 0) {
    document.body.style.backgroundColor = "#000000";
    document.querySelector(".heading").style.color = "white";
    i++;
  } else {
    document.body.style.backgroundColor ="#ffffff";
    document.querySelector(".heading").style.color = "black";
    i++;
  }
});
