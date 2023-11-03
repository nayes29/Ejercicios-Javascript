/* Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

function calculateSumAndProduct(numbers) {
  let sum = 0;
  let product = 1;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    product *= numbers[i];
  }

  return { sum, product };
}

const numbers = [1, 2, 3, 4];
const result = calculateSumAndProduct(numbers);

console.log(`The sum is ${result.sum}. The product is ${result.product}.`);

