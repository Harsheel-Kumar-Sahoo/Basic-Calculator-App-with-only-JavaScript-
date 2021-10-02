onEvent("StartBtn", "click", function( ) {
    setScreen("screen2");
  });
  onEvent("AddBtn", "click", function( ) {
    var number1 = getNumber("no_input1");
    var number2 = getNumber("no_input2");
    var addResult = number1 + number2;
    setText("ResultLabel", "Sum is " + addResult);
  });
  onEvent("SubBtn", "click", function( ) {
    var number1 = getNumber("no_input1");
    var number2 = getNumber("no_input2");
    var subResult = number1 - number2;
    setText("ResultLabel", "Difference is " + subResult);
  });
  onEvent("MulBtn", "click", function( ) {
    var number1 = getNumber("no_input1");
    var number2 = getNumber("no_input2");
    var mulResult = number1 * number2;
    setText("ResultLabel", "Product is " + mulResult);
  });
  onEvent("DivBtn", "click", function( ) {
    var number1 = getNumber("no_input1");
    var number2 = getNumber("no_input2");
    var divResult = number1 / number2;
    setText("ResultLabel", "Quotient is " + divResult);
  });
  
  