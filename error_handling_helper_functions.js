// Khanya G created functions validateInput(input) and testScore(number)
// TODO: Create a function that validates user input 
function validateInput(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input.trim() === '') {
        throw new Error('Input cannot be empty');
    }
    return true;
}
try {
    console.log(validateInput(123));
} catch (error) {
    console.log(error.message);
}


// TODO: Create a function that demonstrates multiple error types 
function validateTestScore(score) {
    if (typeof score !== "number") {
        throw new Error("Input must be a number");
    }
    if (score < 0) {
        throw new Error("Input must be greater than or equal to 0");
    }
    if (score > 100) {
        throw new Error("Input must be less than or equal to 100");
    }
    return true;
}
try {
    console.log(validateTestScore(200));
} catch (error) {
    console.log(error.message);
}


// Angela S created functions stringManipulation(str) and convertArray(arr) 
// TODO: Create a collection of helper functions for string manipulation
function stringManipulation(str) {
    try {
        if (typeof str !== "string") {
            throw new Error("Input must be a string");
        }
        if (str.trim() === '') {
            throw new Error("Input cannot be empty");
        }
        return str.toUpperCase();

    } catch (error) {
        console.error(error.message);
    }
}
console.log(stringManipulation("frog"));


// TODO: Create helper functions for array operations 
function convertArray(arr) {
    let changedArray = arr.toString();
    return console.log(changedArray);
}

const vehicleTYPES = ["car", "motorcycle", "truck"];
convertArray(vehicleTYPES)