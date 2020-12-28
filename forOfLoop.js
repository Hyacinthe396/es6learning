// const arr =["a","b","c","d"];
// for (alphabet of arr) {
//     // console.log(alphabet);
// }

// const arr2 = [1,2,3,4,5];
// let sum = 0;
// for (i of arr2) {

//     sum = sum + i;
// }
// console.log(sum);

const arr1 = [1,2];
const arr2 = [3,4];
const arr3 = [5,6];
let sum = 0;
let sub;

for (mix1 of arr1){
    for ( mix2 of arr2){
        for (mix3 of arr3){
            sum = sum + mix1 + mix2 + mix3;
            sub = mix1 - mix2 -mix3;
        }
    }

}
console.log(sum);
console.log(sub);





