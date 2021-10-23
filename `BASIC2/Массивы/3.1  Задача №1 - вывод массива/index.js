// FIRST_OPRION FOR//
const numbers = [10, 22, 30];
for (var i = 0; i < numbers.length; i++) {
  console.log( numbers[i] );
}

//SECOND_OPTION MAP//
const sweetArray = [2, 3, 4, 5, 35];
const sweeterArray = sweetArray.map(sweetItem => {
  return sweetItem * 2;
})
console.log(sweeterArray);

//THIRD_OPTION forEach//
const myNumbers = [1, 2, 3, 4, 5, 6];
myNumbers.forEach(el => console.log( el) );

//FOURTH_OPTION while//
const first_list = [5, 6, 7, 8, 9, 10];
let t = 0;
while (t < first_list.length) {
  console.log( first_list[t] );
  t++;
}


//FIVE_OPTION do while//
const list = [20, 30, 40, 50, 60, 70, 80];
let b = 0;
do {
  console.log( list[b] );
  b = b + 1;
} while (b < list.length);