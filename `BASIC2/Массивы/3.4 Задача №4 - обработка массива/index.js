(function sumInputNumbers() {
    var heap = [],
        tmp;
    do {
        tmp = prompt('Type number', '');
        if (tmp === '' || tmp === null || isNaN(tmp)) break;
        heap.push(+tmp);
    } while (true);
    console.log(heap.reduce((a, e) => a + e));
})();
sumInputNumbers();