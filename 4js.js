function  maximumPath(mat)
{
	let out = -1;
	for(let i = 0; i < M; i++)
		out = Math.max(out, mat[0][i]);

	for(let i = 1; i < N; i++)
	{
		out = -1;
		for(let j = 0; j < M; j++)
		{
			if (j > 0 && j < M - 1)
				mat[i][j] += Math.max(mat[i - 1][j],
							Math.max(mat[i - 1][j - 1],
									mat[i - 1][j + 1]));
			else if (j > 0)
				mat[i][j] += Math.max(mat[i - 1][j],
									mat[i - 1][j - 1]);
			else if (j < M - 1)
				mat[i][j] += Math.max(mat[i - 1][j],
									mat[i - 1][j + 1]);
			out = Math.max(mat[i][j], out);
		}
	}
	return out;
}
let mat = [ [ 10, 10, 2, 0, 20, 4 ],
			[ 1, 0, 0, 30, 2, 5 ],
			[ 0, 10, 4, 0, 2, 0 ],
			[ 1, 0, 2, 20, 0, 4 ] ];
let N = 4, M = 6;
console.log(maximumPath(mat));