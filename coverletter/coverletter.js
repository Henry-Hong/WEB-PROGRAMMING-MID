let colors = ["red", "orange", "pink"];
let speed = 1.0;

window.onload = function () {
  let myname = document.querySelectorAll(".title-box h1");
  myname.forEach((e, i) => {
    e.style.color = colors[i];
    e.style.transition = speed++ + "s";
  });
};
