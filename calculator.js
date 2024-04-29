let num1 = 10;
let num2 = 5;

console.log("Sum:", num1 + num2)
console.log("Difference:", num1 - num2)
console.log("Product:", num1 * num2)
console.log("Quotient:", num1 / num2)

console.log("Updated num1:", num1 += 3)
console.log("Updated num2:", num2 -= 1)

console.log("Is num1 equal to num2?", num1 == num2 ? 'Yes' : 'No')
console.log("Is num1 greater than num2?", num1 > num2 ? 'Yes' : 'No')
console.log("Is num1 not equal to num2?", num1 != num2 ? 'Yes' : 'No')

console.log("Are both numbers positive?", num1>0 && num2>0 ? 'Yes' : 'No')
console.log("Is at least one number even?", num1%2==0 || num2%2==0 ? 'Yes': 'No')