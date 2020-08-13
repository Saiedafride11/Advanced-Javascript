// function sum (frist , second){
//     var result = frist + second;
//     return result;
// }
// const output = sum ( 3 ,7)
// console.log(output)


// function sum (frist , second){
//     var result = frist + second;
//     console.log(result)
//     return result;
// }
// const output = sum ( 3 ,7)
// console.log(output)


//  global and global bonus working
// let bonus = 20;
// function sum (frist , second){
//     var result = frist + second + bonus;
//     console.log(bonus)
//     return result;
// }
// const output = sum ( 3 ,7);
// console.log(bonus)
// console.log(output)


// // let and const global no working
// let bonus = 20;
// function sum (frist , second){
//     var result = frist + second + bonus;
//     // console.log(bonus);
//     if(result > 9){
//         let mood = "Happy";
//         // const mood = "Happy";
//         mood = "cranky";
//         mood = "Franky";
//         console.log(mood)
//     }
//     console.log(mood)
//     return result;
// }
// const output = sum ( 3 ,7);
// // console.log(bonus)
// // console.log(output)



// let and const global no working but var working
let bonus = 20;
function sum (frist , second){
    var result = frist + second + bonus;
    // console.log(bonus);
    if(result > 9){
        // let mood = "Happy";
        // const mood = "Happy";
        var mood = "Happy";
        mood = "cranky";
        mood = "Franky";
        console.log(mood)
    }
    console.log(mood)
    return result;
}
const output = sum ( 3 ,7);
// console.log(bonus)
// console.log(output)