//Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

const sumOfDifferentDataTypes = (diffTypes)=>{
    let total=0;
    for (let i =0;i<diffTypes.length;i++){
        if(typeof diffTypes[i] ==='number'){
            total =diffTypes[i]+total;
        }

    }
    return total
}

const sum =sumOfDifferentDataTypes([2, "11", 3, "a2", false, 5, 7, 1]);
console.log(sum)

const sum1 =sumOfDifferentDataTypes([2, 3, 0, 5, 7, 8, true, false]);
console.log(sum1)