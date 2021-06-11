function rowWithMaximun1s( mat){
	M = mat.length
	N = (mat[0]).length
	maxIndex = 0
	index=N-1;

	for (let i=0;i<M;i++){
		if (index >=0 && mat[i][index]==1){
			index-=1
			maxIndex = i
		}
	}
	if (maxIndex==0 && mat[0][N-1]==0){
		return 0;
	}
	return maxIndex

}
mat = [[0, 0, 0, 1],
	[0, 1, 1, 1],
	[1, 1, 1, 1],
	[0, 0, 0, 0]]
console.log (
	rowWithMaximun1s(mat))