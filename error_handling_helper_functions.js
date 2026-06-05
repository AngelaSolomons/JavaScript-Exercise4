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


