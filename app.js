/*
 A[0] = 3
 A[1] = 1
 A[2] = 2
 A[3] = 4
 A[4] = 3

 P = 1, difference = |3 − 10| = 7
 P = 2, difference = |4 − 9| = 5
 P = 3, difference = |6 − 7| = 1
 P = 4, difference = |10 − 3| = 7
 */

function generatePrevPos(arr, index) {
  let result = 0;
  for(let i=0;i<=index;i++) {
    result = result + arr[i];
  }

  return result;
}

function generateNextPos(arr, index) {
  let result = 0;

  for(let i=index+1;i<arr.length;i++) {
    result = result + arr[i];
  }

  return result;
}

function generateArr(array) {
  return array.map((element, index) => {
    return Math.abs(generatePrevPos(array, index)-generateNextPos(array, index));
  });
}

function generateArrayWithDiff(array) {
  const result = [];

  for (let i=0; i<=array.length-1; i++) {
    const prevPositions = array.slice(0, i+1);
    const nextPositions = array.slice(i+1, array.length);

    const prevSum = prevPositions.reduce((prev, current) => prev + current, 0);
    const nextSum = nextPositions.reduce((prev, current) => prev + current, 0);

    result.push(Math.abs(prevSum-nextSum));
  }

  return result;
}

function solution(array) {
  const arrayWithDiff = generateArrayWithDiff(array);

  const solution = arrayWithDiff.sort((a,b) => a-b).slice(0,1);

  return solution[0];
}


function solution2(array) {
  return Math.min.apply(null, generateArr(array));
}

// N(N*N) + LogN

console.time('Solution 1');
console.log(solution([3, 1, 2, 4, 3]) === 1);
console.timeEnd('Solution 1');

console.time('Solution 2');
console.log(solution2([3, 1, 2, 4, 3]) === 1);
console.timeEnd('Solution 2');

console.log(solution2([23, 12, 34, 1, 3, 0, -1], 2) === 2)
console.log(solution2([1001, 1002, 1003, 1004, 1005, 1006], 3) === 9)
console.log(solution2([143,
  -376,
  715,
  658,
  5,
  355,
  661,
  60,
  -118,
  679,
  -96,
  835,
  759,
  -434,
  737,
  -85,
  -78,
  -879,
  -686,
  437,
  51,
  399,
  -969,
  366,
  -481,
  761,
  -192,
  -394,
  508,
  -154,
  701,
  -734,
  381,
  -846,
  -648,
  -810,
  206,
  930,
  402,
  -347,
  306,
  356,
  462,
  608,
  775,
  -402,
  -472,
  956,
  -813,
  -657,
  903,
  -924,
  -755,
  236,
  764,
  5,
  79,
  970,
  264,
  -972,
  408,
  418,
  -418,
  944,
  -954,
  980,
  -521,
  355,
  -488,
  48,
  -921,
  -213,
  -967,
  -16,
  -557,
  -834,
  497,
  -628,
  -938,
  827,
  423,
  -238,
  -357,
  114,
  889,
  -492,
  -744,
  -567,
  -750,
  -998,
  672,
  795,
  405,
  -766,
  214,
  780,
  991,
  -142,
  -531,
  871]) === 40);

console.log(solution2([-991,
  -387,
  911,
  667,
  -478,
  -825,
  703,
  750,
  -734,
  144,
  876,
  -716,
  -622,
  330,
  993,
  761,
  570,
  -391,
  121,
  848,
  -382,
  -298,
  188,
  647,
  -327,
  986,
  -390,
  796,
  -391,
  348,
  298,
  -486,
  -609,
  -617,
  -399,
  903,
  481,
  -514,
  153,
  76,
  -247,
  737,
  367,
  395,
  996,
  367,
  995,
  -472,
  -912,
  -526,
  507,
  -927,
  -982,
  -279,
  806,
  -891,
  -842,
  428,
  -909,
  88,
  62,
  -45,
  -498,
  601,
  -981,
  -962,
  -569,
  -759,
  -93,
  -811,
  -404,
  -756,
  -235,
  -673,
  -306,
  -156,
  -177,
  140,
  -123,
  620,
  222,
  712,
  -454,
  -118,
  -723,
  294,
  44,
  996,
  -448,
  -714,
  -584,
  -447,
  -1,
  -717,
  -553,
  -616,
  -632,
  -795,
  -68,
  989]) === 96);