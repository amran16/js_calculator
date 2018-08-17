$(document).ready(function() {

  var result = '';
  updateScreen(0);

  $('.button').on('click', function(evt) {

    var buttonPressed = $(this).html();

    if (buttonPressed === 'C') {
      result = '';
    } else if (buttonPressed === '.') {
      result += '.';
    } else if (buttonPressed === '0') {
      result += '0';
    } else if (Number(buttonPressed)) {
      result += buttonPressed;
    } else if (buttonPressed === '+') {
      result += '+';
    } else if (buttonPressed === '-')  {
      result += '-';
    } else if (buttonPressed === 'x'){
      result += '*';
    } else if(buttonPressed === '/'){
      result += '/';
    } else if (buttonPressed === '+/-') {
      result *= -1;
    } else if(buttonPressed === '1/x') {
      result =  1/result;
    } else if(buttonPressed === '√x'){
      result = Math.sqrt(result);
    } else if(buttonPressed === 'x^2') {
       result = Math.pow(result, 2)
    } else if(buttonPressed === '%') {
       result =  result/100;
    } else if(buttonPressed === 'π') {
       result =  Math.PI;
    }else if (buttonPressed === '→') {
      result = result.slice(0, -1);
    } else if (buttonPressed === '=') {
      result = ouputResult(result);
    }
    updateScreen(result);
  });
});

 function updateScreen(displayLimit) {

   if(displayLimit.length > 20){
     $('#result').html('Your input is too long!');
     clear();
   }else{
       $('#result').html(displayLimit);
   }
   if(displayLimit === 'Error!'){
       clear();
   }
}

function ouputResult(input) {
    try {
       return eval(input);
    }
    catch(err) {
       return 'Error!';
    }
}

function clear(){
    setTimeout(function(){
      document.getElementById('result').innerHTML = '';
    }, 2000);
  }
