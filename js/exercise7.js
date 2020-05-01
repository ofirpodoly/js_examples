const longestWord = function(list){
    let longest = list[0].length
  	for (let i = 0; i < list.length; i++) { 
      if(longest < list[i].length) {
            longest = list[i].length
        }    
    } 
  return longest;
}; 
var mylist = ["cat", "dog", "mouse"] 
console.log(longestWord(mylist));
