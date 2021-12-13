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
```

### collectOddsAndEvens

Write a function called `collectOddsAndEvens` that accepts an array of positive integers and returns an object with the count of odd numbers and the count of even numbers. The keys in the object should be "odd" and "even".

Examples:

```js
```

### countIfHasValue

Write a function called `countIfHasValue` which accepts an object where all of the values are arrays. The function should count the number of times the value is found in any of the arrays.

Examples:

```js
```

### countValidNumsInString

Write a function called `countValidNumsInString` which counts the number of valid numbers in a string.

Examples:

```js
```

### divideObject

Write a function called `divideObject` that accepts an object where the values are either strings or numbers. The function should return an array. If the value is a number, add it to the beginning of the array, if it is a string, add it to the end of the array. The function should return a new array.

Examples:

```js
```

### findFirstAndLastIndex

Write a function called `findFirstAndLastIndex` that should accept an array and a number and return a new array with the first index is the index where that number is **first** found and the second index is the index where that number is **last** found. If the number does not exist at least twice, the function should return `-1`

Examples:

```js
```

### findFirstMove

Write a function called `findFirstMove`. This function accepts an array of arrays of moves and a move. It should return an array with the index of the first move in the array of arrays of moves.

Examples:

```js
```

### findHighestPriorityTodo

Write a function called `findHighestPriorityTodo` which accepts an array of objects, each of which has a 'priority' property as well as a 'task' property. The function should return a array where the first index is the task and the second index is the priority.

Examples:

```js
```

### inMatrix

Write a function called `inMatrix` which accepts an array of arrays and a value. The function should return `true` if that value is in the matrix.

Examples:

```js
```

### replaceAfter

Write a function called `replaceAfter` that accepts an array an index and it removes two elements starting at that index and adds the strings "Hello", "world" instead. The function should return the array

Examples:

```js
```

### reverseValues

Write a function called `reverseValues`, which accepts an array of numbers and return a new array with the values reversed. If a value is an even number, skip the next two numbers and continue.

Examples:

```js
```

### robotInstructions

Write a function called `robotInstructions` which accepts an array of moves, the options for the moves are "U", "D", "L", "R", the function should return an object with each move and the total number of times each move appears.

Examples:

```js
```

### scheduleCheck

Write a function called `scheduleCheck` which accepts two objects which have a key for each day of the week and a value that is either true or false, the function should return the number of days of the week that each object both has a value of true for.

Examples:

```js
```

### separateLanguages

Write a function called `separateLanguages` which which takes an array of strings and returns an object with the following keys, "python", "javascript", "other". The values for the keys of "python" and "javascript" should be the number of times those strings appear. The value of "other" should be an array of all of the other values in the array.

Examples:

```js
```

### skipVowels

Write a function called `skipVowels` that accepts a string an returns an array. The function should iterate through the string and if it encouters a vowel it should skip the next two characters, otherwise it should add that current character to the array.

Examples:

```js
```