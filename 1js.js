function leftRotate(myArray , d , n) {
	for (i = 0; i < d; i++)
		leftRotatebyOne(myArray, n);
}

function leftRotatebyOne(myArray , n) {
	var i, temp;
	temp = myArray[0];
	for (i = 0; i < n - 1; i++)
		myArray[i] = myArray[i + 1];
	myArray[n - 1] = temp;
}

function printArray(myArray , n) {
	for (i = 0; i < n; i++)
		document.write(myArray[i] + " ");
}
	var myArray = [1 ,2 ,3 ,4 ,5  ];
	d=2
	n=5
	leftRotate(myArray, d, n);
	console.log(myArray);