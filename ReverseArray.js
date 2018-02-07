/**
 * Author: Ntuthuko Mthiyane
 * Date: 07/02/2018
 * Description: This program reverses a given array without creating an editional array or using any built-in reverse functionality
 * @param {*} array 
 */

function reverseArray(array){  //takes in an array
    //Only iterate half of the list so to not reverse a reverse
    for(let i=0; i<array.length/2; i++){
        let tempValue = array[i];  //store a value to use later
        //Swapping the values
        array[i] = array[array.length-1-i]; 
        array[array.length-1-i] = tempValue;                          
    }
    return array;
}

console.log(reverseArray([1,2,3,4,5]));