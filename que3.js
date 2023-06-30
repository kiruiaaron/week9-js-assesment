
//Write a JavaScript program to find the leap years in a given range of years.

function leapYear(st_year, end_year) {
    let range = [];
    for (let i = st_year; i <= end_year; i++)
    {
         range.push(i);
    }
    let leapYears = [];

range.forEach(
function(year)
{ 
   if (findLeapYear(year)) 
   leapYears.push(year);
});

return leapYears;
 }

function findLeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return year;
    } else {
            return false;
    }
}

console.log(leapYear(2016,2023));