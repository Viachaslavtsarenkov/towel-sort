
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }
  let result = []; 
  for (let i = 0; i < matrix.length; ++i){
    for (let j = 0; j < matrix[i].length; ++j){
      if (i % 2 === 0){
        result.push(matrix[i][j]);
      } else{
        let k = matrix[i].length - (1 + j);
          result.push(matrix[i][k]);
      }

    }
  }
  return result;
}
