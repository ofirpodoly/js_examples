const greet = function(name) {
  return "hello, " + name;
};

const isNumber = function(value){
  let indicator = ""
  let valueAsNumber = Number(value);
  if (Number.isNaN(valueAsNumber)) {
  	indicator += "False"
  } else {
    indicator += "True" 
  }
  return indicator;
}; 


let functions = [greet, isNumber];

function runExercise() {
	let selector = document.getElementById('exercise-selector');
	let pickedFunction = functions[selector.value - 1];

	let inputField = document.getElementById('input-text');

	let result = pickedFunction(inputField.value);

	let resultField = document.getElementById('result')
	resultField.innerText = result;
}
