var arr = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];

function filter() {

    var modifiedarr = arr.filter(function (number) {
        return number > 0;
    });
    
    alert(modifiedarr);
}
filter();