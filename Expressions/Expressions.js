function task1(){
	var input = my_value("oddOrEven");
	var output = (input % 2) == 0 ? input + " is even" : input + " is odd";  

	my_print("task1-answer", output);
}

function task2(){
	var input = my_value("divided");
	var output = input % 35 == 0 ? input + " can be divided" : input + " can't be divided";

	my_print("task2-answer", output);
}

function task3(){
	var width = my_value("width");
	var height = my_value("height");

	my_print("task3-answer", width * height);
}

function task4(){
	var input = my_value("is-seven");
	input = Math.floor(input / 100);

	var output = input % 10 == 7 ? "third digit is 7" : "third digit is not 7";

	my_print("task4-answer", output);
}

function task5(){
	var input = my_value("3th-bit");
	var number = 3;

	temp = (1 << number) & input;
	var res = temp >> number;

	my_print("task5-answer", res == 1 ? true + ": third digit is 1" : false + ": third bit is 0");
}

function task6(){
	var x = my_value("number-x");
	var y = my_value("number-y");

	my_print("task6-answer", (x*x + (y-5)*(y-5)) < 25 ? "(" + x + "; " + y + ")" + " is in circle K(0: 5)" : 
														"(" + x + "; " + y + ")" + " is not in circle K(0: 5)");
}

function task7(){
	var input = my_value("is-prime");
	if (input == 0 || input == 1) {
		my_print("task7-answer", input + " is not prime");
		return;
	}

	for(var i = 2; i <= (input/2); i++){
		if(input % i == 0)
		{
			my_print("task7-answer", input + " is not prime");
			return;
		}			
	}

	my_print("task7-answer", input + " is prime(not Optimus)");
}

function task8(){
	var a = my_value("number-a");
	a = parseFloat(a);
	var b = my_value("number-b");
	b = parseFloat(b);
	var h = my_value("number-h");

	my_print("task8-answer", "Area is: " + ((a+b)*h)/2);
}

function task9(){
	var x = my_value("point-x");
	var y = my_value("point-y");
	var XL = -1;
	var YL = 1;
	var XR = 5;
	var YR = -1;

	var inCircle = (x-1)*(x-1) + (y-1)*(y-1) < 9;
	var inRectangle = !((x > XL && x < XR) && (y < YL && y > YR));

	my_print("task9-answer", inCircle && inRectangle);
}
