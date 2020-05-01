const maximumArray = function(list){
    let maximum = list[0]
  	for (let i = 0; i < list.length; i++) {  
      if(maximum < list[i]) {
            maximum = list[i]
        }    
    } 
  return maximum;
}; 
var mylist = [2, 6, 3, 1, 5, 0] 
console.log(maximumArray(mylist));
