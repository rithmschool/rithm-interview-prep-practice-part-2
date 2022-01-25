describe("skipVowels", function () {
  it("skips vowels", function(){
    expect(skipVowels("hello")).toEqual(["h", "l"])
    expect(skipVowels("much fun")).toEqual(["m", "h", " ", "f"])
    expect(skipVowels("aaaa")).toEqual([])
  })
});

describe("separateLanguages", function () {
  it("separates languages", function(){
    expect(
      separateLanguages(["python", "python", "python", "javascript", "c++"])
    ).toEqual({
      python: 3,
      javascript: 1,
      other: ["c++"],
    });

    expect(separateLanguages(["greek", "french", "yoruba", "python"])).toEqual({
      python: 1,
      javascript: 0,
      other: ["greek", "french", "yoruba"],
    })

  })
  it("should return an object with the following keys, 'python', 'javascript', 'other'", function () {
    expect(
      separateLanguages(["python", "python", "spanish", "javascript"])
    ).toEqual({
      python: 2,
      javascript: 1,
      other: ["spanish"],
    });
  });
});

describe("scheduleCheck", function () {
  it("should return the number of days of the week that each object both has a value of true for", function () {
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
    expect(scheduleCheck(schedule1, schedule2)).toEqual(7);
  });
  it("should return the number of days of the week that each object both has a value of true for", function () {
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
      Sunday: false,
    };
    expect(scheduleCheck(schedule1, schedule2)).toEqual(6);
  });
  it("should return the number of days of the week that each object both has a value of true for", function () {
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
    expect(scheduleCheck(schedule1, schedule2)).toEqual(6);
  });
});

describe("robotInstructions", function () {
  it("should return an object with each move and the total number of times each move appears", function () {
    expect(robotInstructions(["U", "D", "L", "R"])).toEqual({ "U": 1, "D": 1, "L": 1, "R": 1 })
    expect(robotInstructions(["U", "D", "L", "R", "U", "D", "L", "R", "U", "D", "L", "R"])).toEqual({ "U": 3, "D": 3, "L": 3, "R": 3 })
  })
})

describe("reverseValues", function(){
  it("reverses values", function(){
    expect(reverseValues([1, 1, 3, 3, 2])).toEqual([3, 3, 1, 1])
    expect(reverseValues([1, 3, 5, 7])).toEqual([7, 5, 3, 1])
    expect(reverseValues([1, 3, 4, 7])).toEqual([3, 1])
    expect(reverseValues([11, 13, 15, 20, 1, 1])).toEqual([15, 13, 11])
    expect(reverseValues([4, 5, 1, 1, 2, 1, 1])).toEqual([1])
    expect(reverseValues([2, 2, 2])).toEqual([])
  })
})

describe("replaceAfter", function () {
  it("should replace the two elements after the index with the strings 'Hello', 'world'", function () {
    expect(
      replaceAfter(["1", "2", "a", "b", "3", "4"], 2)
    ).toEqual(["1", "2", "Hello", "world", "3", "4"]);

    expect(replaceAfter(["a", "b", "c"], 0)).toEqual(["Hello", "world", "c"])

  });
});

describe("inMatrix", function () {
  it("should return true if the value is in the matrix", function () {
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(inMatrix(matrix, 5)).toBe(true);
  });
  it("should return false if the value is not in the matrix", function () {
    let matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(inMatrix(matrix, 10)).toBe(false);
  });
});

describe("countIfHasValue", function () {
  it("should return the number of times the value is found in any of the arrays", function () {
    const obj = {
      a: [1, 10, 3],
      b: [4, 1, 7],
      c: [7, 7, 7],
      d: [10, 7, 12]
    };
    expect(countIfHasValue(obj, 1)).toEqual(2)
    expect(countIfHasValue(obj, 7)).toEqual(3)
    expect(countIfHasValue(obj, 10)).toEqual(2)
    expect(countIfHasValue(obj, 13)).toEqual(0)
  });
})


describe("countValidNumsInString", function () {
  it("should return what the examples return", function () {
    expect(countValidNumsInString("")).toEqual(0)
    expect(countValidNumsInString("1")).toEqual(1)
    expect(countValidNumsInString("12")).toEqual(2)
    expect(countValidNumsInString("12abc3")).toEqual(3)
    expect(countValidNumsInString("1s2d3dsadas4")).toEqual(4)
    expect(countValidNumsInString("512,3,4!?!")).toEqual(5)
    expect(countValidNumsInString("123456")).toEqual(6)
  });
});

describe("collectOddsAndEvens", function () {
  it("should return an object with the count of odd numbers and the count of even numbers", function () {
    expect(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual({
      odd: 5,
      even: 4,
    });
    expect(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual({
      odd: 5,
      even: 5,
    });
    expect(collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toEqual({
      odd: 6,
      even: 5,
    });
    expect(
      collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    ).toEqual({ odd: 6, even: 6 });
    expect(
      collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
    ).toEqual({ odd: 7, even: 6 });
    expect(
      collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
    ).toEqual({ odd: 7, even: 7 });
    expect(
      collectOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    ).toEqual({ odd: 8, even: 7 });
    expect(
      collectOddsAndEvens([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
      ])
    ).toEqual({ odd: 8, even: 8 });

    expect(
      collectOddsAndEvens([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
      ])
    ).toEqual({ odd: 9, even: 8 });
  });
});

describe("calculateMonthlyOrders", function () {
  it("should return the total of all orders", function(){
    const orders = [
      {
        Feburary: 1,
        March: 2,
        April: 2
      },
      {
        April: 1,
        May: 2,
        June: 2
      }
    ]
    expect(calculateMonthlyOrders(orders)).toEqual(10);
  })

  it("should return the total of all the orders", function () {
    const orders = [
      {
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
      },
    ];

    expect(calculateMonthlyOrders(orders)).toEqual(16800);

  });
});


describe("divideObject", function () {
  it("divides an object", function(){
    expect(
      divideObject({
        first: "hi",
        second: "hello",
        third: "hey",
        fourth: 2,
        fifth: "fun",
        sixth: 10,
      })
    ).toEqual([[12], [13]]);
  })
});


describe("findHighestPriorityTodo", function () {
  it("should return the highest priority task and priority", function () {

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

    expect(findHighestPriorityTodo(todos)).toEqual(["Sleep", 22])

    let todos2 = [
      {
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
      },
    ];
    expect(findHighestPriorityTodo(todos2)).toEqual(["Task 3", 3]);
  });
});

describe("findFirstMove", function () {
  it("should return the index of the first move in the array of arrays of moves", function () {
    const moves = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
    ];
    const move = "a";
    const result = findFirstMove(moves, move);
    expect(result).toEqual([0, 0]);
  });
  it("should return the index of the first move in the array of arrays of moves", function () {
    const moves = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
    ];
    const move = "h";
    const result = findFirstMove(moves, move);
    expect(result).toEqual([2, 1]);
  });
  it("should return the index of the first move in the array of arrays of moves", function () {
    const moves = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"],
    ];
    const move = "z";
    const result = findFirstMove(moves, move);
    expect(result).toEqual(-1);
  });
});

describe("findFirstAndLastIndex", function () {
  it("should return -1 if the number does not exist at least twice", function () {
    expect(findFirstAndLastIndex([1, 2, 3, 4, 5], 3)).toEqual(-1);
  })
  it("should return -1 if the number does not exist", function () {
    expect(findFirstAndLastIndex([1, 2, 2, 2, 5], 12)).toEqual(-1);
  })
  it("should return the first and last index of the number", function () {
    expect(findFirstAndLastIndex([1, 2, 2, 2, 5], 2)).toEqual([1, 3]);
  })
})