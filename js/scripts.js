var a = prompt('a='),
	b = prompt('b='),
	value = (a*a)+(2*a*b)-(b*b);
alert('Wynik działania (a * a) + (2 * a * b) - (b * b) = ' + value);
console.log('Wynik działania (a * a) + (2 * a * b) - (b * b) = ' + value);

if (value < 0) {
	console.log('wynik ujemny');
}
else if (value > 0) {
	console.log('wynik dodatni');
}
else {
	console.log('wynik równy zero');
}
// if (value > 0){
// 	console.log('wynik dodatni');
// }
// if (value < 0){
// 	console.log('wynik ujemny');
// }
// if (value == 0){
// 	console.log('wynik równy zero');
// }