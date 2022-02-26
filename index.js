// Code your solutions in this file
// writeCards()
// 1) returns an array of thank you messages
// for each name provided to the function
function writeCards(names) {
    return names.map((name) => `Thank you, ${name}, for the wonderful surprise gift!`);
}
function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}



    //   1) invokes console.log 
    //   once for each number, 
    //   counting down from the number provided to zero