function random(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

document.addEventListener("keydown", (event) => {
  event = event ? event : window.event;
  var keyPressed = String.fromCharCode(event.keyCode);
  console.log(event.keyCode);
  console.log(keyPressed);
  var keyElement;
  if (event.keyCode === 16 && event.location === 1) {
    keyElement = document.getElementById("k16_2");
  } else if ((48 <= event.keyCode && event.keyCode <= 57) || (65 <= event.keyCode && event.keyCode <= 90)) {
    keyElement = document.getElementById(keyPressed);
  } else {
    keyElement = document.getElementById(`k${event.keyCode}`);
  }

  keyElement.classList.add("hit");
  keyElement.addEventListener("animationend", () => {
    keyElement.classList.remove("hit");
  });
  keyElement.style.backgroundColor = `rgb(${random(50, 255)}, ${random(50, 255)}, ${random(50, 255)})`;
});
