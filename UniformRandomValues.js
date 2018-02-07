/**
 * Author: Ntuthuko Mthiyane
 * Date: 07/02/2018
 * Description: This program generates a given number of random numbers between 0 -1 , prints them out, gets min and max and their average
 * @param {*} numValues 
*/
 
function uniformRandomValues(numValues){
   
    let sum = 0;
    let average = 0;
    let randomValues = [];   //to store the random values

    //generate numberVlaues random numbers and increment sum
    for(let i=0; i<numValues; i++ ){
        randomValues[i] = Math.random();
        sum += randomValues[i]
    }
    
    //use built in min and max to get from the list (takes a rest parameter)
    return `Random numbers:   ${randomValues} \nAverage: ${sum/numValues} \n
            Minimum: ${Math.min(...randomValues)} \nMinimum: ${Math.min(...randomValues)}
            Maximum: ${Math.max(...randomValues)}`;
}

console.log(uniformRandomValues(5));