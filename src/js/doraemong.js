var 눈알 = function (selector) {
  var 눈 = document.querySelector(selector),
    눈동자 = 눈.querySelector(".눈동자"),
    눈영역 = 눈.getBoundingClientRect();
  var 눈알굴리기 = function (mouseX, mouseY) {
    var 라디안 = Math.atan2(mouseY - (눈영역.y + 눈영역.height * 0.5), mouseX - (눈영역.x + 눈영역.width * 0.5));
    눈동자.style.transform = "rotate(" + ((180 * 라디안) / Math.PI - 90) + "deg)";
  };
  return { 눈알굴리기: 눈알굴리기 };
};

var 왼눈 = 눈알(".눈-1");
var 오른눈 = 눈알(".눈-2");

window.addEventListener("mousemove", function (e) {
  왼눈.눈알굴리기(e.pageX, e.pageY);
  오른눈.눈알굴리기(e.pageX, e.pageY);
});
