var colors = ["#f44336", "#2196f3", "#009688", "#ffc107", "#9e9e9e", "#795548"];
//var colors = ["#FF9AA2", "#FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", "#C7CEEA"];

//total matching colors played, total non-matching colors played, total matching colors captured, total non-matching colors captured
var counts = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

var level = 1;

var boxr0c1 = document.getElementById("boxr0c1");
var boxr0c2 = document.getElementById("boxr0c2");
var boxr0c3 = document.getElementById("boxr0c3");
var boxr0c4 = document.getElementById("boxr0c4");
var boxr0c5 = document.getElementById("boxr0c5");
var boxr0c6 = document.getElementById("boxr0c6");
var boxr1c1 = document.getElementById("boxr1c1");
var boxr1c2 = document.getElementById("boxr1c2");
var boxr1c3 = document.getElementById("boxr1c3");
var boxr1c4 = document.getElementById("boxr1c4");
var boxr1c5 = document.getElementById("boxr1c5");
var boxr1c6 = document.getElementById("boxr1c6");
var boxr2c1 = document.getElementById("boxr2c1");
var boxr2c2 = document.getElementById("boxr2c2");
var boxr2c3 = document.getElementById("boxr2c3");
var boxr2c4 = document.getElementById("boxr2c4");
var boxr2c5 = document.getElementById("boxr2c5");
var boxr2c6 = document.getElementById("boxr2c6");
var boxr3c1 = document.getElementById("boxr3c1");
var boxr3c2 = document.getElementById("boxr3c2");
var boxr3c3 = document.getElementById("boxr3c3");
var boxr3c4 = document.getElementById("boxr3c4");
var boxr3c5 = document.getElementById("boxr3c5");
var boxr3c6 = document.getElementById("boxr3c6");
var boxr4c1 = document.getElementById("boxr4c1");
var boxr4c2 = document.getElementById("boxr4c2");
var boxr4c3 = document.getElementById("boxr4c3");
var boxr4c4 = document.getElementById("boxr4c4");
var boxr4c5 = document.getElementById("boxr4c5");
var boxr4c6 = document.getElementById("boxr4c6");
var boxr5c1 = document.getElementById("boxr5c1");
var boxr5c2 = document.getElementById("boxr5c2");
var boxr5c3 = document.getElementById("boxr5c3");
var boxr5c4 = document.getElementById("boxr5c4");
var boxr5c5 = document.getElementById("boxr5c5");
var boxr5c6 = document.getElementById("boxr5c6");

boxr3c1.addEventListener("animationiteration", iteration);

boxr4c1.addEventListener("click", toggleboxr4c1);
boxr4c2.addEventListener("click", toggleboxr4c2);
boxr4c3.addEventListener("click", toggleboxr4c3);
boxr4c4.addEventListener("click", toggleboxr4c4);
boxr4c5.addEventListener("click", toggleboxr4c5);
boxr4c6.addEventListener("click", toggleboxr4c6);

function iteration() {
  var percentage = 0;
  if (level >= 1) {
    if (boxr3c1.style.backgroundColor == boxr4c1.style.backgroundColor) {
      counts[0][0]++;
      if (boxr4c1.style.boxShadow != "") {
        counts[0][2]++;
      }
    } else {
      counts[0][1]++;
      if (boxr4c1.style.boxShadow != "") {
        counts[0][3]++;
      }
    }
    if (counts[0][0] > 0) {
      percentage = Math.round((counts[0][2] / counts[0][0]) * 100);
    } else {
      percentage = 0;
    }
    boxr4c1.innerText = counts[0][2] - counts[0][3] + " (" + counts[0][2] + "-" + counts[0][3] + ") [" + counts[0][2] + "/" + counts[0][0] + " (" + percentage + "%)]";
    if (level == 1 && counts[0][2] - counts[0][3] == 10) {
      boxr5c1.innerHTML = boxr4c1.innerText;
      counts = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      level = 2;
    }
    boxr3c1.style.backgroundColor = boxr2c1.style.backgroundColor;
    boxr2c1.style.backgroundColor = boxr1c1.style.backgroundColor;
    boxr1c1.style.backgroundColor = boxr0c1.style.backgroundColor;
    boxr0c1.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
  }
  if (level >= 2) {
    if (boxr3c2.style.backgroundColor == boxr4c2.style.backgroundColor) {
      counts[1][0]++;
      if (boxr4c2.style.boxShadow != "") {
        counts[1][2]++;
      }
    } else {
      counts[1][1]++;
      if (boxr4c2.style.boxShadow != "") {
        counts[1][3]++;
      }
    }
    if (counts[1][0] > 0) {
      percentage = Math.round((counts[1][2] / counts[1][0]) * 100);
    } else {
      percentage = 0;
    }
    boxr4c2.innerText = counts[1][2] - counts[1][3] + " (" + counts[1][2] + "-" + counts[1][3] + ") [" + counts[1][2] + "/" + counts[1][0] + " (" + percentage + "%)]";
    if (level == 2 && counts[0][2] - counts[0][3] >= 10 && counts[1][2] - counts[1][3] >= 10) {
      boxr5c2.innerHTML = boxr4c1.innerText + "<br>" + boxr4c2.innerText;
      counts = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      level = 3;
    }
    boxr3c2.style.backgroundColor = boxr2c2.style.backgroundColor;
    boxr2c2.style.backgroundColor = boxr1c2.style.backgroundColor;
    boxr1c2.style.backgroundColor = boxr0c2.style.backgroundColor;
    boxr0c2.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
  }
  if (level >= 3) {
    if (boxr3c3.style.backgroundColor == boxr4c3.style.backgroundColor) {
      counts[2][0]++;
      if (boxr4c3.style.boxShadow != "") {
        counts[2][2]++;
      }
    } else {
      counts[2][1]++;
      if (boxr4c3.style.boxShadow != "") {
        counts[2][3]++;
      }
    }
    if (counts[2][0] > 0) {
      percentage = Math.round((counts[2][2] / counts[2][0]) * 100);
    } else {
      percentage = 0;
    }
    boxr4c3.innerText = counts[2][2] - counts[2][3] + " (" + counts[2][2] + "-" + counts[2][3] + ") [" + counts[2][2] + "/" + counts[2][0] + " (" + percentage + "%)]";
    if (level == 3 && counts[0][2] - counts[0][3] >= 10 && counts[1][2] - counts[1][3] >= 10 && counts[2][2] - counts[2][3] >= 10) {
      boxr5c3.innerHTML = boxr4c1.innerText + "<br>" + boxr4c2.innerText + "<br>" + boxr4c3.innerText;
      counts = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      level = 4;
    }
    boxr3c3.style.backgroundColor = boxr2c3.style.backgroundColor;
    boxr2c3.style.backgroundColor = boxr1c3.style.backgroundColor;
    boxr1c3.style.backgroundColor = boxr0c3.style.backgroundColor;
    boxr0c3.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
  }
  if (level >= 4) {
    if (boxr3c4.style.backgroundColor == boxr4c4.style.backgroundColor) {
      counts[3][0]++;
      if (boxr4c4.style.boxShadow != "") {
        counts[3][2]++;
      }
    } else {
      counts[3][1]++;
      if (boxr4c4.style.boxShadow != "") {
        counts[3][3]++;
      }
    }
    if (counts[3][0] > 0) {
      percentage = Math.round((counts[3][2] / counts[3][0]) * 100);
    } else {
      percentage = 0;
    }
    boxr4c4.innerText = counts[3][2] - counts[3][3] + " (" + counts[3][2] + "-" + counts[3][3] + ") [" + counts[3][2] + "/" + counts[3][0] + " (" + percentage + "%)]";
    if (level == 4 && counts[0][2] - counts[0][3] >= 10 && counts[1][2] - counts[1][3] >= 10 && counts[2][2] - counts[2][3] >= 10 && counts[3][2] - counts[3][3] >= 10) {
      boxr5c4.innerHTML = boxr4c1.innerText + "<br>" + boxr4c2.innerText + "<br>" + boxr4c3.innerText + "<br>" + boxr4c4.innerText;
      counts = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      level = 5;
    }
    boxr3c4.style.backgroundColor = boxr2c4.style.backgroundColor;
    boxr2c4.style.backgroundColor = boxr1c4.style.backgroundColor;
    boxr1c4.style.backgroundColor = boxr0c4.style.backgroundColor;
    boxr0c4.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
  }
  if (level >= 5) {
    if (boxr3c5.style.backgroundColor == boxr4c5.style.backgroundColor) {
      counts[4][0]++;
      if (boxr4c5.style.boxShadow != "") {
        counts[4][2]++;
      }
    } else {
      counts[4][1]++;
      if (boxr4c5.style.boxShadow != "") {
        counts[4][3]++;
      }
    }
    if (counts[4][0] > 0) {
      percentage = Math.round((counts[4][2] / counts[4][0]) * 100);
    } else {
      percentage = 0;
    }
    boxr4c5.innerText = counts[4][2] - counts[4][3] + " (" + counts[4][2] + "-" + counts[4][3] + ") [" + counts[4][2] + "/" + counts[4][0] + " (" + percentage + "%)]";
    if (level == 5 && counts[0][2] - counts[0][3] >= 10 && counts[1][2] - counts[1][3] >= 10 && counts[2][2] - counts[2][3] >= 10 && counts[3][2] - counts[3][3] >= 10 && counts[4][2] - counts[4][3] >= 10) {
      boxr5c5.innerHTML = boxr4c1.innerText + "<br>" + boxr4c2.innerText + "<br>" + boxr4c3.innerText + "<br>" + boxr4c4.innerText + "<br>" + boxr4c5.innerText;
      counts = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
      level = 6;
    }
    boxr3c5.style.backgroundColor = boxr2c5.style.backgroundColor;
    boxr2c5.style.backgroundColor = boxr1c5.style.backgroundColor;
    boxr1c5.style.backgroundColor = boxr0c5.style.backgroundColor;
    boxr0c5.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
  }
  if (level >= 6) {
    if (boxr3c6.style.backgroundColor == boxr4c6.style.backgroundColor) {
      counts[5][0]++;
      if (boxr4c6.style.boxShadow != "") {
        counts[5][2]++;
      }
    } else {
      counts[5][1]++;
      if (boxr4c6.style.boxShadow != "") {
        counts[5][3]++;
      }
    }
    if (counts[5][0] > 0) {
      percentage = Math.round((counts[5][2] / counts[5][0]) * 100);
    } else {
      percentage = 0;
    }
    boxr4c6.innerText = counts[5][2] - counts[5][3] + " (" + counts[5][2] + "-" + counts[5][3] + ") [" + counts[5][2] + "/" + counts[5][0] + " (" + percentage + "%)]";
    if (level == 6 && counts[0][2] - counts[0][3] >= 10 && counts[1][2] - counts[1][3] >= 10 && counts[2][2] - counts[2][3] >= 10 && counts[3][2] - counts[3][3] >= 10 && counts[4][2] - counts[4][3] >= 10 && counts[5][2] - counts[5][3] >= 10) {
      boxr5c6.innerHTML = boxr4c1.innerText + "<br>" + boxr4c2.innerText + "<br>" + boxr4c3.innerText + "<br>" + boxr4c4.innerText + "<br>" + boxr4c5.innerText + "<br>" + boxr4c6.innerText;
      boxr0c1.style.animation = "";
      boxr1c1.style.animation = "";
      boxr2c1.style.animation = "";
      boxr3c1.style.animation = "";
      boxr0c2.style.animation = "";
      boxr1c2.style.animation = "";
      boxr2c2.style.animation = "";
      boxr3c2.style.animation = "";
      boxr0c3.style.animation = "";
      boxr1c3.style.animation = "";
      boxr2c3.style.animation = "";
      boxr3c3.style.animation = "";
      boxr0c4.style.animation = "";
      boxr1c4.style.animation = "";
      boxr2c4.style.animation = "";
      boxr3c4.style.animation = "";
      boxr0c5.style.animation = "";
      boxr1c5.style.animation = "";
      boxr2c5.style.animation = "";
      boxr3c5.style.animation = "";
      boxr0c6.style.animation = "";
      boxr1c6.style.animation = "";
      boxr2c6.style.animation = "";
      boxr3c6.style.animation = "";
    }
    boxr3c6.style.backgroundColor = boxr2c6.style.backgroundColor;
    boxr2c6.style.backgroundColor = boxr1c6.style.backgroundColor;
    boxr1c6.style.backgroundColor = boxr0c6.style.backgroundColor;
    boxr0c6.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
  }
  boxr4c1.style.boxShadow = "";
  boxr4c2.style.boxShadow = "";
  boxr4c3.style.boxShadow = "";
  boxr4c4.style.boxShadow = "";
  boxr4c5.style.boxShadow = "";
  boxr4c6.style.boxShadow = "";
}

function toggleboxr4c1() {
  if (boxr4c1.style.boxShadow == "") {
    boxr4c1.style.boxShadow = "0px 0px 80px #cfcfc4 inset";
  } else {
    boxr4c1.style.boxShadow = "";
  }
}

function toggleboxr4c2() {
  if (boxr4c2.style.boxShadow == "") {
    boxr4c2.style.boxShadow = "0px 0px 80px #cfcfc4 inset";
  } else {
    boxr4c2.style.boxShadow = "";
  }
}

function toggleboxr4c3() {
  if (boxr4c3.style.boxShadow == "") {
    boxr4c3.style.boxShadow = "0px 0px 80px #cfcfc4 inset";
  } else {
    boxr4c3.style.boxShadow = "";
  }
}

function toggleboxr4c4() {
  if (boxr4c4.style.boxShadow == "") {
    boxr4c4.style.boxShadow = "0px 0px 80px #cfcfc4 inset";
  } else {
    boxr4c4.style.boxShadow = "";
  }
}

function toggleboxr4c5() {
  if (boxr4c5.style.boxShadow == "") {
    boxr4c5.style.boxShadow = "0px 0px 80px #cfcfc4 inset";
  } else {
    boxr4c5.style.boxShadow = "";
  }
}

function toggleboxr4c6() {
  if (boxr4c6.style.boxShadow == "") {
    boxr4c6.style.boxShadow = "0px 0px 80px #cfcfc4 inset";
  } else {
    boxr4c6.style.boxShadow = "";
  }
}

function start() {
  level = 1;
  speed = 0.75;
  boxr0c1.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
  boxr1c1.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
  boxr2c1.style.backgroundColor = colors[Math.floor(Math.random() * 6)];
  boxr3c1.style.backgroundColor = "";
  boxr4c1.style.backgroundColor = colors[0];
  boxr5c1.style.backgroundColor = colors[0];
  boxr0c1.style.animation = "boxr0c1 " + speed + "s infinite";
  boxr1c1.style.animation = "boxr1c1 " + speed + "s infinite";
  boxr2c1.style.animation = "boxr2c1 " + speed + "s infinite";
  boxr3c1.style.animation = "boxr3c1 " + speed + "s infinite";
  boxr4c2.style.backgroundColor = colors[1];
  boxr5c2.style.backgroundColor = colors[1];
  boxr0c2.style.animation = "boxr0c2 " + speed + "s infinite";
  boxr1c2.style.animation = "boxr1c2 " + speed + "s infinite";
  boxr2c2.style.animation = "boxr2c2 " + speed + "s infinite";
  boxr3c2.style.animation = "boxr3c2 " + speed + "s infinite";
  boxr4c3.style.backgroundColor = colors[2];
  boxr5c3.style.backgroundColor = colors[2];
  boxr0c3.style.animation = "boxr0c3 " + speed + "s infinite";
  boxr1c3.style.animation = "boxr1c3 " + speed + "s infinite";
  boxr2c3.style.animation = "boxr2c3 " + speed + "s infinite";
  boxr3c3.style.animation = "boxr3c3 " + speed + "s infinite";
  boxr4c4.style.backgroundColor = colors[3];
  boxr5c4.style.backgroundColor = colors[3];
  boxr0c4.style.animation = "boxr0c4 " + speed + "s infinite";
  boxr1c4.style.animation = "boxr1c4 " + speed + "s infinite";
  boxr2c4.style.animation = "boxr2c4 " + speed + "s infinite";
  boxr3c4.style.animation = "boxr3c4 " + speed + "s infinite";
  boxr4c5.style.backgroundColor = colors[4];
  boxr5c5.style.backgroundColor = colors[4];
  boxr0c5.style.animation = "boxr0c5 " + speed + "s infinite";
  boxr1c5.style.animation = "boxr1c5 " + speed + "s infinite";
  boxr2c5.style.animation = "boxr2c5 " + speed + "s infinite";
  boxr3c5.style.animation = "boxr3c5 " + speed + "s infinite";
  boxr4c6.style.backgroundColor = colors[5];
  boxr5c6.style.backgroundColor = colors[5];
  boxr0c6.style.animation = "boxr0c6 " + speed + "s infinite";
  boxr1c6.style.animation = "boxr1c6 " + speed + "s infinite";
  boxr2c6.style.animation = "boxr2c6 " + speed + "s infinite";
  boxr3c6.style.animation = "boxr3c6 " + speed + "s infinite";
}

start();