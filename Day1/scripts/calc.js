for (var i = 0; i < data.length; i++){
	// if element of array isn't undefinded or isn't equal to null(undefinded or null elements have no changes)
	if(data[i] != undefined){
		//take the value of element
		var intValue = Number(data[i]);
		//if value is equal to zero - add 10
		if(intValue === 0){
			data[i] = intValue + 10;
		} 
		//if value is greater than 100 - subtract 100
		else if(intValue > 100){
			data[i] = intValue - 100;
		}
		//to all other value add 100
		else{
			data[i] = intValue + 100;
		}	
	}
}



// 1.	Если значение элемента равно 0 – добавить 10
// 2.	Если значение элемента больше 100 – вычесть 100
// 3.	Если значение элемента меньше 100 – добавить 100
// 4.	Если значение элемента не является числом (значение в кавычках 
// 	рассматривать как число) – не производить никаких изменений
