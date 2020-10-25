module.exports = 
function reverse (n) {

    n = Math.abs(n);
    let string = n.toString();
    let result = '';

    for (let i = 0; i < string.length; i++) {
        result = result + string[string.length - i-1];
    }

    return parseInt(result);
}

// console.log(reverse(-3768));


