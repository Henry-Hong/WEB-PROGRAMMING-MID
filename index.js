function move(obj, time) {
  $(obj)
    .stop()
    .animate(
      {
        left: -800,
        top: 0,
      },
      time
    )
    .animate(
      {
        left: 0,
        top: 0,
      },
      time
    );
}
$(document).ready(function () {
  setInterval(function () {
    move($("img"), 3000);
  }, 6000);
});
