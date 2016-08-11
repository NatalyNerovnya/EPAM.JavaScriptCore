for (var i = 0; i < 5; i++) {
	objects[i] = {
		count: random(1, 10)
	}
	//variable which definde the type of object
	var typeOfObject = random(1, 3);
	if (typeOfObject == 1) {
		objects[i].getCount1 = function() {
			return objects[i].count;
		};
	}
		else if (typeOfObject == 2) {
			objects[i].getCount2 = function() {
				return objects[i].count;
			};
		}
			else {
				objects[i].getCount3 = function() {
					return objects[i].count;
				};
			}

	console.log("type = " + typeOfObject + ", count = " + objects[i].count);
}