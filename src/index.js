
exports.min = function min (array) {
  let res;
  !array || array.length === 0  ? res = 0 : res = Math.min(...array)
  return res;
}

exports.max = function max (array) {
  let res;
  !array || array.length === 0  ? res = 0 : res = Math.max(...array)
  return res;

}

exports.avg = function avg (array) {
  let res;
  if (!array || array.length === 0) {
    res = 0;
  } else {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    res = sum / array.length
  }
  return res;

}
