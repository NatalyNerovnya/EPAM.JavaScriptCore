var type1 = 0;
var type2 = 0;
var type3 = 0;
for (var i = 0; i < objects.length; i++) {
	//check weather such method exsist in the object
	if (objects[i].getCount1) {
		type1 += objects[i].getCount1();
	}
	else if (objects[i].getCount2) {
		type2 += objects[i].getCount2();
	}
	else {
		type3 += objects[i].getCount3();
	}
}

console.log( "count 1 = " + type1);
console.log( "count 2 = " + type2);
console.log( "count 3 = " + type3);