const productExceptSelf = (input) => {
    const result = []
    let left = 1;
    let right = 1;

    for (let i = 0; i < input.length; i++) {
        result[i] = left;
        left = left * input[i];
    }

    for (let i = input.length - 1; i >= 0; i--) {
        result[i] = result[i] * right;
        right = right * input[i];
    }

    return result;
};

module.exports = productExceptSelf;
