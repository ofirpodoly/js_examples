const isNumber = function(value){
  let indicator = ""
    if(!Number.isNaN(value)) {
  	indicator += "True" }
    else 
      	indicator += "False" 
   return indicator
}; 
console.log(isNumber("seven"));
