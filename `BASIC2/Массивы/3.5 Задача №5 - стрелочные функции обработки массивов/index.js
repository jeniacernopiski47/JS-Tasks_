var someArray = [12, 13, 14, 16];

function convert(arr) {
    for (i = 0; i < arr.length; ++i) {
        console.log(arr[i] * arr[i]);
    }
    return arr * arr;
}

console.log( convert(someArray) );
