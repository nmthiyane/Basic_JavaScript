/**
 * Author: Ntuthuko Mthiyane
 * Date: 07/02/2018
 * Description: This program generates 2 random numbers between 1 - 6 inclusively, them prints out their sum.
 */

function getRandomNumber(){
    //Math random returns numner between 0 - 1, so multiply by 6 and add 1 so number is never 0 to make it between 1-6         
    const firstRandom = Math.floor(Math.random()*6) + 1;
    const secondRandom = Math.floor(Math.random()*6) + 1;
    return `Sum: ${var1 + var2}`;
}

console.log(getRandomNumber());


