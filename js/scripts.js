var a = prompt('a='),
	b = prompt('b='),
	value = (a*a)+(2*a*b)-(b*b);


if (value > 0){
	console.log('wynik dodatni');
}
if (value < 0){
	console.log('wynik ujemny');
}
if (value == 0){
	console.log('wynik równy zero');
}