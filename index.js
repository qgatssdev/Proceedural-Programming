function dot_product(v1, v2) {
  let ps = 0;
  for (i = 0; i < 2; i++) {
    ps += v1[i] * v2[i];
  }
  if (ps === 0) {
    console.log('The dot product is ' + ps + ' and it is Orthogonal');
  } else {
    console.log('The dot product is equals to ' + ps);
  }
}

dot_product([3, 5], [7, 9]);
dot_product([5, 0], [0, 9]);
