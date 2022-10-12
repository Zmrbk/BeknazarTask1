// Task1 from Beknazar
/* Вывести правильную и обратную диагональ(уже не 
помню так ли они называются) квадратной 
матрицы(двумерный массив)

1 2 3
4 5 6
7 8 9

Правильная 1 5 9
Обратная 3 5 7

Матрица может быть другой, а элементы не всегда по 
порядку но всегда с равными высотой и шириной */

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function matrixFunc(matrix) {
  const resultOne = [];
  const resultTwo = [];
  for (let i = 0; i < matrix.length; i++) {
    resultOne.push(matrix[i][i]);
    resultTwo.push(matrix[i][matrix.length - 1 - i]);
  }
  console.log(resultOne);
  console.log(resultTwo);
}
matrixFunc(matrix);
