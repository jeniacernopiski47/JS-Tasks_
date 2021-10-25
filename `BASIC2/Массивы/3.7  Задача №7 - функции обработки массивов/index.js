var myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function extract(arr) {
    for (i = 0; i < arr.length; ++i) {
        console.log(arr[i]);
    }
    return myarr;
}

console.log(extract(myarr.slice(2,5)));





