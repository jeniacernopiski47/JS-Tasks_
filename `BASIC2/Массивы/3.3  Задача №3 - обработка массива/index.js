const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor(( styles.length - 1 ) / 2 )] = "Классика";
alert(styles.shift( 0 )); //Удаляет первый элемент массива!
styles.unshift("Реп", "Регги"); //Добовляет 1 или более элемент массива ва начало!
console.log(styles);