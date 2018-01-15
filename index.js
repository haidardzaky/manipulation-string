var lowerbutton = document.getElementById("lowerCase");
var upperbutton = document.getElementById("upperCase");
var titlebutton = document.getElementById("titleCase");



function textlowercase(){
  var lower = document.getElementById("input1").value.toLowerCase();
  document.getElementById("result").innerHTML = lower;
}

function textuppercase(){
  var upper = document.getElementById("input1").value.toUpperCase();
  document.getElementById("result").innerHTML = upper;
}

function titleCase() {
  var str = document.getElementById("input1").value.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  strjoin = str.join(' ');
  document.getElementById("result").innerHTML = strjoin;
}



lowerbutton.addEventListener("click", textlowercase);
upperbutton.addEventListener("click", textuppercase);
titlebutton.addEventListener("click", titleCase);
