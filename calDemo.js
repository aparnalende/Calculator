var disp = document.getElementById('display');

function onScreen(x){
  disp.value += x;
  if(x === 'c'){
    disp.value = '';
  }
}

function answer(){
  var x = disp.value;
  x = eval(x);
  disp.value = x;
}

function change(){
  var num = disp.value;
  if(num < 0){
    var newNum = Math.abs(num);
  }
  else{
    newNum = -Math.abs(num);
  }
  disp.value = newNum;
}

function backspace(){
  var num = disp.value;
  var len = num.length-1;
  var n = num.substring(0, len);
  disp.value = n;
}