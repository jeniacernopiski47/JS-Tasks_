var studentList = [
  { name: "Ivan", marks: [8, 7, 6, 5, 8] },
  { name: "Adrian", marks: [9, 8, 8, 7, 8] },
  { name: "Andrei", marks: [6, 8, 9, 7, 7] },
  { name: "Alex", marks: [10, 9, 9, 8, 10] },
  { name: "Maxim", marks: [10, 10, 10, 10, 9] }
];
var max = studentList.reduce(( prev, cur ) => {
  if (prev.b > cur.b) {
    return prev
  }
  return cur;
})
var averages = studentList.map(s => {
  return {
    name: s.name,
    av: s.marks.reduce((a, i) => a + i) / s.marks.length
  };
});
console.log(studentList, averages);
console.log(max);

