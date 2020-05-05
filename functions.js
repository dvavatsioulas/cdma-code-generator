function hadamard(n) {
  tempArray = {};
  tempArray[1] = [1];
  tempArray[2] = [[1, 1],[1, -1]]
  return h(n);
}

function h(order) {
  if(tempArray[order]) {
    return tempArray[order];
  } else {
    var positive = order > 4 ? h(order - 4) : h(2);
    var antOrder = order > 4 ? order - 4 : 2;


    var result = positive

    for(var i = 0, a = 0; a < antOrder ; i += 1, a += 1){
      for(var j = 0, b = antOrder; b < order; j += 1, b += 1) {
        result[a].push(positive[i][j]);
      }
    }

    for(var i = 0, a = antOrder; a < order; i += 1, a += 1){
      result.push([]);
      for(var j = 0, b = 0; b < antOrder; j += 1, b += 1) {
        result[a].push(positive[i][j]);
      }
    }

    for(var i = 0, a = antOrder; a < order; i += 1, a += 1){
      for(var j = 0, b = antOrder; b < order; j += 1, b += 1) {
        result[a].push(-1*positive[i][j]);
      }
    }
    tempArray[order] = result;
    return result;
  }
}