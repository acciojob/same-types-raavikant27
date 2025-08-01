function isSameType(value1, value2) {
  // Check if both are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Check if types are the same
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");

// Convert to numbers if possible
const num1 = Number(value1);
const num2 = Number(value2);

// If conversion results in NaN, keep original value
const finalValue1 = isNaN(num1) ? value1 : num1;
const finalValue2 = isNaN(num2) ? value2 : num2;

alert(isSameType(finalValue1, finalValue2));
