// ЗАДАНИЕ

//    Создать двумерный массив разменостью 10 на 10 элементов
//    Заполнить массив случайными числами, используя функцию rand (см. ниже)
//
//    function rand(startNum, endNum) {
//      return Math.floor(startNum + Math.random() * ((endNum + 1) - startNum));
//    }
//
//    Получить результирующий массив, состоящий из элементов, лежащих на гранях матрицы,
//    размером 10 на 10 элементов. Либо «обойти массив по периметру».
//    Обходить массив по часовой стрелке от точки 0-0

//    Решение:

function rand(min, max) {
  return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
}

function createMultidimensionalArray(arrSize, minNumber, maxNumber) {
  var arr = [],
    arrSize = arrSize || 10,
    minNumber = minNumber || 0,
    maxNumber = maxNumber || 100,
    i,
    j;

  for (i = 0; i < arrSize; i++) {
    arr[i] = [];

    for (j = 0; j < arrSize; j++) {
      arr[i][j] = rand(minNumber, maxNumber);
    }
  }

  return arr;
}

function createArr(reverse) {
  var reverse = reverse || undefined,
    arr = createMultidimensionalArray(),
    FIRST_ELEMENT = 0,
    len = arr.length,
    diagonal = [],
    result = [],
    bottom = [],
    right = [],
    left = [],
    top = [],
    i;

  for (i = 0; i < len; i++) {
    var ARR_INNER_LEN = arr[i].length,
      SECOND_ELEMENT = FIRST_ELEMENT + 1,
      LAST_ELEMENT = ARR_INNER_LEN - 1;

    if (reverse === 'reverse') {
      top = arr[FIRST_ELEMENT].slice( SECOND_ELEMENT, LAST_ELEMENT );
      left.push( arr[i][FIRST_ELEMENT] );
      right.push( arr[i][LAST_ELEMENT] );
      bottom = arr[LAST_ELEMENT].slice( SECOND_ELEMENT, LAST_ELEMENT );

    } else if (reverse === 'clockwise') {
      top = arr[FIRST_ELEMENT].slice();
        if (i > FIRST_ELEMENT && i < LAST_ELEMENT) {
          left.push(arr[i][FIRST_ELEMENT]);
          right.push(arr[i][LAST_ELEMENT]);
        }
      bottom = arr[LAST_ELEMENT].slice();

    } else if (reverse === 'triangle') {
      top = arr[FIRST_ELEMENT].slice();
      if (i > FIRST_ELEMENT && i < LAST_ELEMENT) {
        right.push( arr[i][LAST_ELEMENT] );
        diagonal.push( arr[i][i] );
      } else if (i === LAST_ELEMENT) {
        right.push( arr[i][LAST_ELEMENT] );
      }
    } else if (reverse === 'triangle-reverse') {
      if (i === FIRST_ELEMENT) {
        diagonal.push(arr[i][FIRST_ELEMENT]);
      } else if (i > FIRST_ELEMENT && i < LAST_ELEMENT) {
        left.push( arr[i][FIRST_ELEMENT] );
        diagonal.push( arr[i][i] );
      } else {
        bottom = arr[i].slice();
      }
    }
  }

  console.table(arr);

  switch (reverse) {
    case 'reverse':
      result = result.concat( left, bottom, right.reverse(), top.reverse() );
      console.log('top = ' + top);
      console.log('left = ' + left);
      console.log('bottom = ' + bottom);
      console.log('right = ' + right);
      break;

    case 'clockwise':
      result = result.concat( top, right, bottom.reverse(), left.reverse() );
      console.log('top = ' + top);
      console.log('right = ' + right);
      console.log('bottom = ' + bottom);
      console.log('left = ' + left);
      break;

    case 'triangle':
      result = result.concat( top, right, diagonal.reverse() );
      console.log('top = ' + top);
      console.log('right = ' + right);
      console.log('diagonal = ' + diagonal);
      break;

    case 'triangle-reverse':
      result = result.concat( bottom, diagonal.reverse(), left );
      console.log('bottom = ' + bottom);
      console.log('diagonal = ' + diagonal);
      console.log('left = ' + left);
      break;

    default:
      createSpiral(arr);
  }

  console.log(result);
}

var result = [];

function createSpiral(arr, count) {
  var newArr = arr.slice(),
      len = newArr.length,
      LAST_ELEMENT = len - 1,
      FIRST_ELEMENT = 0,
      bottom = [],
      right = [],
      left = [],
      top = [],
      i;

  var n = len / 2,
      count = 0;

  if (count < n) {
    for (i = 0; i < len; i++) {
      if (i === FIRST_ELEMENT) {
        top = newArr[i].slice();
      } else if (i > FIRST_ELEMENT && i < LAST_ELEMENT) {
        left.push( newArr[i].shift() );
        right.push( newArr[i].pop() );
      } else {
        newArr.shift();
        bottom = newArr.pop();
      }
    }

    result = result.concat(top, right, bottom.reverse(), left.reverse() );

    return createSpiral(newArr, count++);

  } else {
    return result;
  }
}