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
console.log(validateInput(453));


// TODO: Create a function that demonstrates multiple error types 
function testScore(number) {
    try {
        if (typeof number !== 'number') {
            throw new Error('Input must be a number');
        }
        if (number < 0 || number > 100) {
            throw new Error('Input must be a number between 0 and 100');
        }
        if (number.trim() === '') {
            throw new Error('Input cannot be empty');
        }
        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    }
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
stringManipulation("frog");


// TODO: Create helper functions for array operations 
function convertArray(arr) {
    let changedArray = arr.toString();
    return console.log(changedArray);
}

const vehicleTYPES = ["car", "motorcycle", "truck"];
convertArray(vehicleTYPES)