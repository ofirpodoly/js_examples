const arrayMean = function(list){
    let number = list[0]
  	for (let i = 0; i < list.length; i++) { 
            number = (list[0] + list[i])    
    } 
  return number / list.length;
}; 
var mylist = [4, 5, 6] 
console.log(arrayMean(mylist));
