// const set1 = new Set(["sumit","sumit","amit","anil","anish"]); 
// const set2 = new Set("fooooooood"); 
// const set3 = new Set([10, 20, 30, 30, 40, 40]); 
//  const set4 = new Set(); 

//  console.log(set3)


 //example 2

// var set1 = new Set(); 
// set1.add(10); 
// set1.add(20); 
// set1.add(30).add(40).add(50); 
// console.log(set1); 


//third example

// using Set.protoype.delete(value) 
// creating set it contains 
// f, o , d, i, e 
const set1 = new Set("foooodiiiieee"); 
  
// deleting e from the set 
// it prints true 
console.log(set1.delete('e')); 
  
// set contains f, o, d, i 
console.log(set1); 
  
// deleting an element which is  
// not in the set 
// prints false 
console.log(set1.delete('g')); 



