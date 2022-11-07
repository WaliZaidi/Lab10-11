function sumMultiple(num1, num2, num3) {
    var sum = 0;
    for (var i = 0; i < num3; i++) {
        if (i % num1 === 0 || i % num2 === 0) {
            sum += i;
        }
    }
    return sum;
}

module.exports = sumMultiple;