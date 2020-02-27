var divleft = document.getElementsByClassName("face");
var divright = document.getElementsByClassName("face2");
var angle = 0;
var angle2 = 0;
document.onwheel = function (e) {
  if (e.deltaY) {
    // console.log(divleft);

    e.preventDefault();
    angle += e.deltaY < 0 ? 10 : -10;
    angle2 += e.deltaY < 0 ? -10 : 10;

    divleft[0].style.transform = "rotate(" + angle + "deg)";
    divright[0].style.transform = "rotate(" + angle2 + "deg)";
  }
};
