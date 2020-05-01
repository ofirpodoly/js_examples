const longestWord2 = function(list){
    let longest = list[0]
  	for (let i = 0; i < list.length; i++) { 
      if(longest.length < list[i].length) {
            longest = list[i]
        }    
    } 
  return longest;
}; 
var mylist = ["cat", "dog", "mouse"] 
console.log(longestWord2(mylist));
