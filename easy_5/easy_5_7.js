function multiplyList(array1, array2) {
  let product = [];

  array1.forEach((item, index) => {
    product.push(item * array2[index]);
});
  console.log(product);

}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]