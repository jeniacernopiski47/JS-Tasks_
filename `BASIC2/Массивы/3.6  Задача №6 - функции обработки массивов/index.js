var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.splice(4, 1, "0", "0", "0");
console.log(arr);


// 2 вариант

var arr = [];
arr[0] = "1";
arr[1] = "2";
arr[2] = "3";
arr[3] = "4";
arr[4] = "5";
arr[5] = "6";
arr[6] = "7";
arr[7] = "8";
arr[8] = "9";
console.log(arr.join());
arr.splice(4, 0, "0", "0", "0");
console.log(arr.join());