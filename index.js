
//TASK 1: Find the second largest number in an array of numbers.
const numbers = [23, 45, 67, 89, 12, 90, 44];

function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current > largest) {
      secondLargest = largest;
      largest = current;
    } else if (current > secondLargest && current !== largest) {
      secondLargest = current;
    }
  }

  return secondLargest;
}

const result = findSecondLargest(numbers);
console.log("The second largest number is:", result);

//TASK 2: Returns unique elements.
const getUnique = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

const a = [1, 2, 3];
const b = [2, 3, 4];

console.log(getUnique(a, b));


//TASK 3: Student score analysis.

let students = [
  { name: 'Alice', age: 22, scores: [78, 85, 92] },
  { name: 'Bob', age: 20, scores: [88, 90, 76] },
  { name: 'Charlie', age: 21, scores: [95, 80, 85] }
];

let topStudentName = '';
let highestAvg = 0;

students.forEach(student => {
  let total = 0;
  student.scores.forEach(score => total += score);
  let average = total / student.scores.length;

  if (average > highestAvg) {
    highestAvg = average;
    topStudentName = student.name;
  }
});
console.log(`Top Student: ${topStudentName} with an average score of ${highestAvg.toFixed(2)}`);