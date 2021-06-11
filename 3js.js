function maximumValue(a, b, c)
{
	return Math.max(Math.max(a, b), c);
}
function minimumValue(a, b, c)
{
	return Math.min(Math.min(a, b), c);
}
function smallestDifference(myArray1, myArray2, myArray3,l)
{
	myArray1.sort(function(a, b){return a - b});
	myArray2.sort(function(a, b){return a - b});
	myArray3.sort(function(a, b){return a - b});
	let res_min = 0, res_max = 0, res_mid = 0;
	let i = 0, j = 0, k = 0;
	let diff = 2147483647;
		
	while (i < l && j < l && k < l)
	{
		let sum = myArray1[i] + myArray2[j] + myArray3[k];
		let max = maximumValue(myArray1[i], myArray2[j], myArray3[k]);
		let min = minimumValue(myArray1[i], myArray2[j], myArray3[k]);
		if (min == myArray1[i])
			i++;
		else if (min == myArray2[j])
			j++;
		else
			k++;

		if (diff > (max - min))
		{
			diff = max - min;
			res_max = max;
			res_mid = sum - (max + min);
			res_min = min;
		}
	}

	console.log(res_max + ", " + res_mid + ", " + res_min);
}
	
let myArray1 = [5, 2, 8];
let myArray2 = [10, 7, 12];
let myArray3 = [9, 14, 6];

let l = myArray1.length;

smallestDifference(myArray1, myArray2, myArray3, l);
let arr1= [15, 12, 18, 9]
let arr2 = [10, 17, 13, 8]
let arr3 = [14, 16, 11, 5]
let n = arr1.length;
smallestDifference(arr1, arr2, arr3, n);