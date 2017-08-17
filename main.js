$(document).ready(function(){

  //stores the inputs from the user to calculate later
  let inputs =[""];
  // string to store current input
  let totalString;
  // operators array for validation without the .
  let operators1 = ["+","-","/","*","."];
  //operators array with the .
  let operators2=["."];
  // numbers for validation
  let nums =[0,1,2,3,4,5,6,7,8,9];

  let screenLimit = 18;

  function getValue(input){
    //log out an error mssg in console if theres already another dot before a dot : ..8
    if(operators2.includes(inputs[inputs.length-1]===true) && input ===".") {
      console.log("ERROR no duplicate '.' ");
    }
    //
    else if (inputs.length ===1 && operators1.includes(input)===false){
      inputs.push(input);
    }
    //check the 1st spot to avoid it starting withan operator. so that you can have 1+1+1 but avoid having g8++8 or 9*/1 lets check that we have a number or "input" infront of it first and not an operator, then you can add that input
    else if(operators1.includes(inputs[inputs.length-1])===false) {
    inputs.push(input);
    //check to add a number, if the input includes
  } else if(nums.includes(Number(input))) {
    inputs.push(input);
   }
   update();
  }
  function update(){
    totalString = inputs.join("");
    $(".answer").html(totalString);
    $("#entry").html(totalString);
  }
  function getTotal() {
    totalString = inputs.join("");
    $(".answer").html(eval(totalString));
  }
  $("button").click(function(){
  if (this.id === "ac") {
    inputs = [""];
    update();
  } else if (this.id === "ce") {
    inputs.pop();
    update();
  } else if (this.id === "=") {
    getTotal();
  } else if (inputs.length > screenLimit) {
    $(".answer").html('Wooaw dude ! Digit limit exceeded');
  }
  else {
    if(inputs[inputs.length-1].indexOf("+","-","/","*",".") === -1){
      getValue(this.id);
    } else {
      getValue(this.id);
    }
  }
  });
});

// array[array.length - 1] used to acces the last item in the array

//given
// $("button").click(function(){
//($(this).id
//} if you click a button it will return the id of the item you clicked
