const minimumArray = function(list){
    let minimum = list[0]
  	for (let i = 0; i < list.length; i++) {  
      if(minimum > list[i]) {
            minimum = list[i]
        }    
    } 
  return minimum;
}; 
var mylist = [2, 6, 3, 1, 5, 0] 
console.log(minimumArray(mylist));
