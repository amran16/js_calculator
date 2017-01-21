$(document).ready(function() {

  var result = '';
  updateScreen(0);

  $('.button').on('click', function(evt) {
    var buttonPressed = $(this).html();
     //console.log(buttonPressed);
     //console.log(typeof(buttonPressed));

    if (buttonPressed === "C") {
      result = '';
    } else if (buttonPressed === '.') {
      result += '.';
    } else if (buttonPressed === '.' && buttonPressed === '.' ) {
      result = 'error';
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
    } else if (buttonPressed === "+/-") {
      result *= -1;
    } else if(buttonPressed === '1/x') {
      result =  1/result;
    } else if(buttonPressed === '√x'){
      result = Math.sqrt(result);
    } else if(buttonPressed === 'x^2') {
       result = Math.pow(result, 2)
    } else if(buttonPressed === '%') {
       result =  result/100;
    } else if(buttonPressed === '∏') {
       result =  Math.PI;
    }else if (buttonPressed === '→') {
      result = result.slice(0,-1);
    } else if (buttonPressed === '=') {
        result = eval(result);
        //result = evaluate(result);
    }
    updateScreen(result);
  });
});


// function updateScreen(displayLimit) {
//
//  displayLimit = document.getElementById('result').value;
//
//   try {
//     if(displayLimit.length > 20) throw ('Your input is too long!');
//   } catch (err) {
//      $('#result').html("Error!!!");
//   } finally {
//      $('#result').html(displayLimit);
//   }
// }

 function updateScreen(displayLimit) {
   //console.log(displayLimit); //result is undefined in here
   console.log(typeof(displayLimit));

   if(displayLimit.length > 20){
     $('#result').html('Your input is too long!');
   } else{
       $('#result').html(displayLimit);
   }
}

// function evaluate(input) {
//
// 		try {
// 			var finalResult = eval(input);
//       console.log(typeof(finalResult));
//       $('#result').html(finalResult);
// 		}
//
// 		catch(e) {
// 			// catches user input errrors, such as 5 * + - / 10
// 			// console.log("There was an error");
//        $('#result').html("Error!!!");
//
// 		}
//
// 	};
