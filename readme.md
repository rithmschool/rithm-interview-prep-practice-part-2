### Preparing for the Rithm School Timed Coding Challenge

Congratulations on making it past the timed coding challenge! It's time to practice a bit with some more problems to make sure you're ready to continue learning more.

To best prepare for the final stage of the Rithm School interview, make sure that you can solve each of these functions. You can also download a zip file with all of these functions and an HTML file that you can open to run automated tests to ensure you have solved the problem correctly.

[Download a zip file containing tests and practice problems here](https://github.com/rithmschool/rithm-interview-prep-practice-part-2/archive/master.zip)

### Running the tests for each practice problem

Once you download the zip file containing the tests and practice problems, unzip the file and take a look at the contents of the folder. You will see that there is a JavaScript file for each problem that you need to solve.

You will also see that there is a `readme.md` file which contains instructions for each problem (you can also find these instructions below).

To make sure that you have solved each problem correctly, there is a file called `tests.js` which contain automated tests that will let you know if your solution is correct. Do not modify any code inside here, you do not need to write any tests yourself! To run these tests, open up the `index.html` file in a browser and when you do, you will see a series of red Xs which indicate that tests are failing.

When you open the `index.html` file, we recommend you click on the Spec List so that you can see each function and the tests associated with it. From there, you can click on an individual function to see only the tests for that specific function.

Once you have solved the problem correctly, the tests will pass and you will see green text instead of red.

We also recommend clicking on the Options button and unchecking the box for "run tests in random order".

Each of the tests check the example input and output that we provide for each problem, so if a test is failing, try the examples we provide for each function to make sure they are all working.

### How to work through the practice problems

Before continuing to the list of problems, it's essential you develop some good habits around programming and practicing problem solving.

- Don't start coding right away, take some time to write down your thoughts and problem solving process
- **Do not** look at the solution before solving the problem!
- Make sure to run the tests for each practice problem.

### calculateMonthlyOrders

Write a function called `calculateMonthlyOrders` that accepts an array of objects. Each object has a property for a month in the year and a value which is a number
The function should return the total value for each property in each object.

Examples:

```js

let orders = [{
  Feburary: 1,
  March: 2,
  April: 2
},
{
  April: 1,
  May: 2,
  June: 2
}]

calculateMonthlyOrders(orders) // 10;

let orders = [{
  January: 100,
  February: 200,
  March: 300,
  April: 400,
  May: 500,
  June: 600,
  July: 700,
  August: 800,
  September: 900,
  October: 1000,
  November: 1100,
  December: 1200,
},
{
  January: 200,
  February: 300,
  March: 400,
  April: 500,
  May: 600,
  June: 700,
  July: 800,
  August: 900,
  September: 1000,
  October: 1100,
  November: 1200,
  December: 1300,
}];

calculateMonthlyOrders(orders); // 16800
```

### collectOddsAndEvens

Write a function called `collectOddsAndEvens` that accepts an array of positive integers and returns an object with the count of odd numbers and the count of even numbers. The keys in the object should be "odd" and "even".

Examples:

```js
collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// { odd: 5, even: 4, });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// { odd: 5, even: 5, });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
// { odd: 6, even: 5,});

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
// { odd: 6, even: 6 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
// { odd: 7, even: 6 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
// { odd: 7, even: 7 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// { odd: 8, even: 7 });

collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
// { odd: 8, even: 8 });
```

### countIfHasValue

Write a function called `countIfHasValue` which accepts an object where all of the values are arrays. The function should count the number of times the value exists  in any of the arrays.

Examples:

```js
let obj = {
  a: [1, 10, 3],
  b: [4, 1, 7],
  c: [7, 7, 7],
  d: [10, 7, 12]
};
countIfHasValue(obj, 1) // 2
countIfHasValue(obj, 7) // 4
countIfHasValue(obj, 10 // 1
countIfHasValue(obj, 13 // 0
```

### countValidNumsInString

Write a function called `countValidNumsInString` which counts the number of valid numbers in a string.

Examples:

```js
countValidNumsInString("") // 0
countValidNumsInString("1") // 1
countValidNumsInString("12") // 2
countValidNumsInString("12abc3") // 3
countValidNumsInString("1s2d3dsadas4") // 4
countValidNumsInString("512,3,4!?!") // 5
countValidNumsInString("123456") // 6
```

### divideObject

Write a function called `divideObject` that accepts an object where the values are either strings or numbers. The function should return an array of arrays. The first subarray should contain a total of all of the numbers and the second subarray should contain a number which is the total of all the characters of all the strings.

Examples:

```js
divideObject({
  first: "hi",
  second: "hello",
  third: "hey",
  fourth: 2,
  fifth: "fun",
  sixth: 10,
})
// [ [12], [13] ]
```

### findFirstAndLastIndex

Write a function called `findFirstAndLastIndex` that should accept an array and a number and return a new array with the first index is the index where that number is **first** found and the second index is the index where that number is **last** found. If the number does not exist at least twice, the function should return `-1`

Examples:

```js
findFirstAndLastIndex([1, 2, 3, 4, 5], 3) // -1
findFirstAndLastIndex([1, 2, 2, 2, 5], 12) // -1
findFirstAndLastIndex([1, 2, 2, 2, 5], 2) // [1, 3]
```

### findFirstMove

Write a function called `findFirstMove`. This function accepts an array of arrays of moves and a move. It should return an array with the index of the first move in the array of arrays of moves.

Examples:

```js
let moves = [
  ["a", "b", "c"],
  ["d", "a", "f"],
  ["g", "h", "h"],
];

findFirstMove(moves, "a"); // [0, 0]);
findFirstMove(moves, "h"); // [2, 1]);
findFirstMove(moves, "z"); // -1);
```

### findHighestPriorityTodo

Write a function called `findHighestPriorityTodo` which accepts an array of objects, each of which has a 'priority' property as well as a 'task' property. The function should return a array where the first index is the task and the second index is the priority.

Examples:

```js

let todos = [{
  task: "Eat",
  priority: 18,
},
{
  task: "Sleep",
  priority: 22,
},
{
  task: "Solve problems",
  priority: 17,
}];

findHighestPriorityTodo(todos); // ["Sleep", 22]

let todos = [{
  task: "Task 1",
  priority: 1,
},
{
  task: "Task 2",
  priority: 2,
},
{
  task: "Task 3",
  priority: 3,
}];

findHighestPriorityTodo(todos); // ["Task 3", 3]
```

### inMatrix

Write a function called `inMatrix` which accepts an array of arrays and a value. The function should return `true` if that value is in the matrix.

Examples:

```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
inMatrix(matrix, 5) // true
inMatrix(matrix, 8) // true
inMatrix(matrix, 10) // false
```

### replaceAfter

Write a function called `replaceAfter` that accepts an array an index and it removes two elements starting at that index and adds the strings "Hello", "world" instead. The function should return the array

Examples:

```js
replaceAfter(["1", "2", "a", "b", "3", "4"], 2)
// ["1", "2", "Hello", "world", "3", "4"]

replaceAfter(["a", "b", "c"], 0)
// ["Hello", "world", "c"]
```

### reverseValues

Write a function called `reverseValues`, which accepts an array of numbers and return a new array with the values reversed. If a value is an even number, do not add the current number, skip the next two numbers and continue.

Examples:

```js
reverseValues([1, 1, 3, 3, 2]) // [1, 1]
reverseValues([1, 3, 5, 7]) // [7, 5, 3, 1]
reverseValues([1, 3, 4, 7]) // [7]
reverseValues([11, 13, 15, 20, 1, 1]) // [1, 1, 11]
reverseValues([4, 5, 1, 1, 2, 1, 1]) // [1, 1, 5]
reverseValues([2, 2, 2]) // []
```

### robotInstructions

Write a function called `robotInstructions` which accepts an array of moves, the options for the moves are "U", "D", "L", "R", the function should return an object with each move and the total number of times each move appears.

Examples:

```js
robotInstructions(["U", "D", "L", "R"])
// { "U": 1, "D": 1, "L": 1, "R": 1 })

robotInstructions(
  ["U", "D", "L", "R", "U", "D", "L", "R", "U", "D", "L", "R"]
)
// { "U": 3, "D": 3, "L": 3, "R": 3 })
```

### scheduleCheck

Write a function called `scheduleCheck` which accepts two objects which have a key for each day of the week and a value that is either true or false, the function should return the number of days of the week that each object both has a value of true for.

Examples:

```js
let schedule1 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: true,
};
let schedule2 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: true,
};

scheduleCheck(schedule1, schedule2) // 7;

let schedule1 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: true,
  Sunday: true,
};
let schedule2 = {
  Monday: true,
  Tuesday: true,
  Wednesday: true,
  Thursday: true,
  Friday: true,
  Saturday: false,
  Sunday: true,
};

scheduleCheck(schedule1, schedule2) // 6;
```

### separateLanguages

Write a function called `separateLanguages` which which takes an array of strings and returns an object with the following keys, "python", "javascript", "other". The values for the keys of "python" and "javascript" should be the number of times those strings appear. The value of "other" should be an array of all of the other values in the array.

Examples:

```js

separateLanguages(["python", "python", "python", "javascript", "c++"])
/*
{
  python: 3,
  javascript: 1,
  other: ["c++"],
}
*/
  })
separateLanguages(["python", "python", "spanish", "javascript"])
/*
  python: 2,
  javascript: 1,
  other: ["spanish"],
}
*/
separateLanguages(["greek", "french", "yoruba", "python"])
/*
{
  python: 1,
  javascript: 0,
  other: ["greek", "french", "yoruba"],
}
*/
```

### skipVowels

Write a function called `skipVowels` that accepts a string an returns an array. The function should iterate through the string and if it encouters a vowel it should skip the current character and the next character, otherwise it should add that current character to the array.

Examples:

```js
skipVowels("hello") // ["h", "l"]
skipVowels("much fun") // ["m", "h", " ", "f"]
skipVowels("aaaa") // []
```
