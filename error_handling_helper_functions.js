function validateInput(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    if (input.trim() === '') {
        throw new Error('Input cannot be empty');
    }

    return true;
}

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

