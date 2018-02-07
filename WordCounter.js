/**
 * Author: Ntuthuko Mthiyane
 * Date: 07/02/2018
 * Description: This program calculates how many times each word appears in a given file. It ignores cases and punctuations.
 * It returns the words with their number of appearances listed in incremented order.
 * @param {*} fileName 
*/

function fileReader(fileName){  
    /*
    using maps: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    */
    let fs = require('fs');
    let contents = fs.readFileSync(fileName, 'utf8');     //read file
    // cleaning the string
    contents = contents.replace(/[^A-Za-z0-9_]/g," ");    //remove special cases and punctuation
    contents = contents.toLocaleLowerCase();             //make same case so easy to compare
    let strings = contents.split(" ");                   // remove spaces and place on array
    let dic = new Map();                                 //  map to store keys and values like a dictionary
    let sortedKeyValue;                                 // To store the key and value to return

    //Iterate through the strings and add to map or increase count.
    for(let i=0; i<strings.length; i++){
        if(strings[i] != ''){                                  //Don't consider empty strings
            if(dic.has(strings[i])){
                let count = dic.get(strings[i]) + 1;         // get the current value and add 1
                dic.set(strings[i], count)                  // edit the valUe in the map
            }
            else{
                dic.set(strings[i], 1);                    //If key doesn't exist, add and make count 1
            }
        }  
    }
    
    // sorting the map
    dic[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => a[1] - b[1]);
    }
    // iterating through the dictionary and printing value and key.
    for (var [key, value] of dic) {
        sortKeyValue += `${key} : ${value}`;
    }

    return sortedKeyValue;
}

console.log(fileReader("TomSawyer.txt"));