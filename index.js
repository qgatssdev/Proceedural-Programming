
function dot_product(v1, v2) {
  let ps = 0;
  for (i = 0; i < v1.length; i++) {
    L1 = v1[i];
    for (x = 0; x < v2.length; x++) {
      L2 = v2[x];
    }
  }
  ps += L1 * L2;

  if (ps === 0) {
    console.log('The dot product is ' + ps + ' and it is Orthogonal');
  } else {
    console.log('The dot product is equals to ' + ps);
  }
}

dot_product([3, 3, 6], [7, 6, 4]);
dot_product([5, 0], [0, 9]);
