//------------ Task 1-------------

// function reverseStr(str) {
//     var reverseString = str.split("").reverse().join("")
    
//     return reverseString;
// }
// console.log(reverseStr("Hello World"));

//------------Task 2--------------
let arr=[2,34,54,23,12,22]
//------------Reduce--------------
// let sum =0;
// for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
// }
// console.log(sum);
//---------Map-----------
// for (let index = 0; index < arr.length; index++) {
//      arr[index]*=3;
//  }
//  console.log(arr);
//------------Find-------------
// for (let index = 0; index < arr.length; index++) {
//           if(arr[index] > 5){
//               console.log(arr[index])
//               break;
//         }
//   }
//------------Filter----------
//
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index] > 5){
//         console.log(arr[index])
//     }
// }
//-----------Every-----------
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index] > 5){
//         console.log(true);
//     }
//     else {
//         console.log(false);
//         break;
//     }
// }
//----------Some--------------
// var some=false;
// for (let index = 0; index < arr.length; index++) {
//     if(arr[index] > 5){
//             some=true;
//             break;
//         }   
//     }
// console.log(some);
//----------LastIndexOf-----------
for (let index = arr.length-1; index >= 0; index--) {
    if(arr[index]==5){
        console.log(index);
        break;
    }
}