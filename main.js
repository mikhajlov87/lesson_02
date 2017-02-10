    //Задача I:

/*
    2) есть 2 перменные;
    var a = 10;
    var b = 20;
    поменять значения переменных местами;
    с использованием третьей переменной (и без :) - опционально)
*/

    //Решение 1:
function reverseVariables() {
  // без использования третей переменной
  var a = 10,
      b = 20;

  a = [a, b];
  b = a[0];
  a = a[1];
  console.log(a, b);
}

    //Решение 2:
function reverseWithAnotherVar() {
  // с использованием третьей переменной
  var a1 = 10,
      b1 = 20,
      c;

  c = 10;
  a1 = b1;
  b1 = c;
  c = null;
  console.log(a1, b1);
}

//    Задача II

/*
    Создать массив на 30 элементов,
    все элементы которого будут являться
    случайными числами в диапазоне от 0 до 100;
*/

//    Решение:
function createRandomNumber(min, max) {
  var random = min - 0.5 + Math.random() * (max - min + 1);
  random =  Math.round(random);
  return random;
}

function createArrRandNum() {
  var arr = new Array(30),
      len = arr.length,
      num,
      i;

  for (i=0; i<len; i++){
    num = createRandomNumber(0, 100);
    arr.splice(i, 1, num);
  }

  return arr;
}

// Задача III

/*
    Насписать скрипт, повторяющий принцип работы метода indexOf
    (в массиве из дз3 ищем, например, число 77, если находим,
    выводится его индекс. если не находим - выводится -1)
    var index = -1;
    ищем по массиву, если находим, то перезаписываем переменную index
    остaнавливаем цикл
    выводим значение переменной index
*/

// Решение:
function findIndex(arr, num) {
  var index = -1,
      len = arr.length,
      i;

  for (i=0; i<len; i++) {
    if (num === arr[i]) {
      index = i;
      break;
    }
  }

  console.log(index);
}