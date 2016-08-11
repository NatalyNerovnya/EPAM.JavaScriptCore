for (var i = data.length - 1; i >= 0; i--){
//create new variable to store the value to log in console
	var value;

//if element of array is undefinded - variable in console is "не определено"
	if(data[i] === undefined){
		value = "не определено";
		}
//if element of array is null - variable in console is "не указано"
		else if(data[i] === null){
			value = "не указано";
		}
//in other ways value in console will be value of the element of the array
		else{
			value = data[i];
		}
//write string with value in console
	console.log("data[ " + i + " ] = " + value);
}

// Файл “log.js” должен выводить в консоль браузера измененные данные массива по 
// следующим правилам:
// 1.	Выводить значения элемента в следующем формате: “data[{0}]={1}”, где
//  {0} – порядковый номер элемента в массиве, {1} – строковое представление 
//  элемента массива (см. п.2)
// 2.	Строковое представление элемента массива определяется следующим образом:
// 2.1.	Если значение не определено (undefined) – выводить строку “не определено”
// 2.2.	Если значение не указано (null) – выводить строку “не указано”
// 2.3.	Во всех остальных случаях выводить числовое значение
