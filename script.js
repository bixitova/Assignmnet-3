function qalyn() {
  var num1 = Number(document.getElementById("education").value);
  console.log(num1);
  var result = 500;
  result *= num1;

  var num2 = Number(document.getElementById("networth").value);
  result *= num2;

  var num3 = document.getElementsByClassName('skills');
  for (i = 0; i < 4; i++) {
    if (num3[i].checked === true) {
      result += parseFloat(num3[i].value);
    }
  }

  var num4 = document.forms.age;
  for (i = 0; i < num4.length; i++) {
    if (num4[i].checked) {
      result *= parseFloat(num4[i].value);
    }
  }

  var num5 = document.getElementsByClassName('reputation');
  console.log(num5);
  for (i = 0; i < 2; i++) {
    if (num5[i].checked === true) {
      result *= parseFloat(num5[i].value);
    }
  }
  if (num5[2].checked === true){
    result -= parseFloat(num5[2].value);
  }
  localStorage.setItem("result", result);
  return false;
}
