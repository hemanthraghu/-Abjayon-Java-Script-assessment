function majorityCount(myArray, n)
{
	let max = 0;
	let index = -1; 
	
	for(let i = 0; i < n; i++)
	{
		let count = 0;
		for(let j = 0; j < n; j++)  
		{
			if (myArray[i] == myArray[j])
				count++;
		}

		if (count > max)
		{
			max = count;
			index = i;
		}
	}

	if (max > n / 2)
		console.log(myArray[index]);
	else
	console.log("No Majority Element");
}

let myArray = [3, 3, 4, 2, 4, 4, 2, 4, 4];
let n = myArray.length;
let myArray1=[3, 3, 4, 2, 4, 4, 2, 4];
let l=myArray1.length;
majorityCount(myArray, n);
majorityCount(myArray1,l);