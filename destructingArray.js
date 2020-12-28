let sales = {
    item: "banana",
    price: "2000",
    discount: "5%"
    
}

const arr = [1,2,3,{name: "mutoni"},sales];
// console.log(arr[4]);
const [zero,one,two,three,four,five]= arr;
console.log(three);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment