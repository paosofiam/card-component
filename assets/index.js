//console.log(data);
const numberx1 = document.getElementById("resultReaction");
const numberx2 = document.getElementById("resultMemory");
const numberx3 = document.getElementById("resultVerbal");
const numberx4 = document.getElementById("resultVisual");
var w = 0;
var x = 0; //  set your counter to 1
var y = 0;
var z = 0;

myLoop1();
myLoop2();
myLoop3();
myLoop4();
getattribute();

function myLoop1() {
  setTimeout(function () {
    numberx1.innerHTML = w;
    w++;
    if (w <= data[0].score) {
      myLoop1();
    }
  }, 15);
}
function myLoop2() {
  setTimeout(function () {
    numberx2.innerHTML = x;
    x++;
    if (x <= data[1].score) {
      myLoop2();
    }
  }, 15);
}
function myLoop3() {
  setTimeout(function () {
    numberx3.innerHTML = y;
    y++;
    if (y <= data[2].score) {
      myLoop3();
    }
  }, 15);
}
function myLoop4() {
  setTimeout(function () {
    numberx4.innerHTML = z;
    z++;
    if (z <= data[3].score) {
      myLoop4();
    }
  }, 15);
}

function getattribute() {
  var ids1 = ["element1", "element2", "element3", "element4"];
  var ids2 = ["img1", "img2", "img3", "img4"];
  for (i = 0; i <= 4; i++) {
    var idx = document.getElementById(ids1[i]);
    idx.innerHTML = data[i].category;
    var idz = document.getElementById(ids2[i]);
    idz.src = data[i].icon;
  }
}
