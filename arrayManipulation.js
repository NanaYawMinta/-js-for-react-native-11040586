function processArray(numbers){
    return numbers.map(num => {
        if (num % 2 === 0){
            return num * num;
        }
        else {
            return num * 3;
        }
        
        
    });
}


const numbers = [1,2,3,4,5,6,7,8,9];
const result = processArray(numbers);
console.log(result);


function formatArrayString(strings,numbers){
    return strings.map((str,index) => {
        if (numbers[index] %  2 ===0) {
            return str.toUpperCase();
        }
        else {
            return str.toLowerCase();
        }
        
    });
}

const strings = ["Hello", "JavaScript", "you", "are", "welcome"];
const formattedStrings = formatArrayString(strings, result);
console.log(formattedStrings);