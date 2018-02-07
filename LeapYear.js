/**
 * Author: Ntuthuko Mthiyane
 * Date: 07/02/2018
 * Description: This code checks if a given year is a leap year or not, the year must be >= 1582,
 * Formula to calculate leap year https://support.microsoft.com/en-us/help/214019/method-to-determine-whether-a-year-is-a-leap-year
 * @param {*} year 
 */

function getLeapYear(year){
    if(year>=1582){
        if(year%4==0 && year%100==0){
            if(year%400==0){
                return  "Leap year";
            }
            else{
                return "Not leap year";
            }
        }
        else if(year%4==0 && year%100!=0){
                return "Leap year";
        }
        //If the year is not divisibe by 4 than it is not leap year
        else{
            return "Not leap year";
        }
    }
    else{
        return `${year} is less than 1582, please enter a year >= than 1582.`;
    }
}