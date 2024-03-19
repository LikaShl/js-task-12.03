const point = document.getElementById("circle");
let x = Number(point.style.left);
let y = Number(point.style.top);

function goUp() {
  if (y > 0) {
    y -= 50;
  } else y += 450;
  point.style.top = y + "px";
}

function goDown() {
  if (y < 450) {
    y += 50;
  } else {
    y -= 450;
  }
  point.style.top = y + "px";
}

function goLeft() {
  if (x > 0) {
    x -= 50;
  } else x += 450;
  point.style.left = x + "px";
}
function goRight() {
  if (x < 450) {
    x += 50;
  } else {
    x -= 450;
  }
  point.style.left = x + "px";
}

function changeBackground() {
  const body = document.getElementById("body");
  let a = Math.round(Math.random() * 250);
  let b = Math.round(Math.random() * 250);
  let c = Math.round(Math.random() * 250);
  body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}
