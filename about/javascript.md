# About JavaScript

## Basic Literal Types

**null**

The value `null` is representated as an "empty" value.

    var example = null; example
    "null"

**Boolean**

A `Boolean` is an object with two values and is conditional. Values are usually true or false. 

    var trueExample = Boolean(true)
    
    var falseExample = Boolean(false)

**Number**

A `Number` is an object which assigns a numeric value. 

    Number("1980") // 1980
    Number (""), // 0
  
**String** 

A `String` is global object featuring a sequence of characters. 

    "My name is Phillip"
    "Learning to code is cool!"

## Special Constants

**undefined**

`undefined` is a global property that has not been assigned a value.

    var example; // example is undefined

**Infinity**

`Infinity` is a global property of numeric value equal to infinity. So long as infinity is positive, its value will always be greater than any number. 

    Number(Infinity) // returns Infinity
    (Infinity * 2) // returns Infinity

**NaN**

`NaN` is a global property respresenting Not-A-Number, or a value that can not be represented. 

    Number(Two) // false
    "NaN"

## Basic Operators ##

**Arithmetic**

**Addition (+)**

*Addition* produces the sum of values. 

    Operator: x + y
    10 + 5 // 15
    5 + 0 // 5
    "with" + "out" // "without"
    "Your coding" + " " + "rocks!" // "Your coding rocks!"

**Subtraction (-)** 

*Subtraction* produces the difference of values. 

    Operator: x - y
    10 - 5 // 5
    5 - 0 // 5
    "ten" - 5 // NaN

**Division (/)** 

*Division* produces the division of values. 

    Operator: x / y
    4 / 2   // returns 2
    10 / 2  // returns 5
    

**Multiplication (*)** 

*Multiplication* produces the product of values. 

    Operator: x * y
    5 * 2 // 10
    34 * 0 // 0
    "ten" * 5 // NaN


**Comparison**

**Greater than operators (>)**

The *greater than operator* returns true if the left operand is greater than the right operand.

    Operator: x > y
    10 > 5 // returns true
    1 > 10 // returns false
    
**Less than operators (<)**

The *less than operator* returns true if the left operand is less than the right operand.

    Operator: x < y
    10 < 15 // returns true
    11 < 10 // returns false

**Greater than or equal operators (>=)**

The *greater than or equal operator* returns true if the left operand is greater than or equal to the right operand.

    Operator: x >= y
    10 >= 5 // returns true
    10 >= 10 // returns true
    10 >= 100 // returns false

**Less than or equal operators (<=)**

The *less than or equal operator* returns true if the left operand is less than or equal to the right operand.

    Operator: x <= y
    5 <= 10 // returns true
    5 <= 5 // returns true
    5 <= 1 // returns false

**Equality (==)**

The *equality* operator compares operands. If operands are not the same type, the operands are converted before being compared.

    Operator: x == y
    5 == 5 // returns true
    5 == "5" // returns true

**Inequality (!=)**

The *inequality* operators compared operands and returns true if they are not equal. If operands are not the same type, the operands are converted before being compared.

    Operator: X != y
    5 != 6 // returns true
    5 != "10" // returns true
    5 != "5" // returns false
    
**Assignment**

**var**

```var```, or variable statement, declares a variable and assigns it a value.

    var myName = "Phillip"
    var age = 34

**=**

```=``` is the basic assignment operator. ```=``` assigns the value of the right operand to the left operand.

    Operator: x = y

**Operators continued...**

**typeof**

```typeof``` is an operator that returns a string indicating the type of the unevaluated operand. 

    typeof 10 === number; // Numbers
    typeof "My name" === "string"; // Strings
    typeof "true" === "booelean"; // Booleans
    

## Functions

**function**

A ```function``` declaration is a function with specified parameters. Functions will always return ```undefined```, so in order to return a value a return statement must be provided.

    function addition (a,b) {
        return a + b;
    }
    addition (3, 5); // returns 8
    addition (10, 15); // returns 25
    addition (2, 0); // returns 2
    
## Arrays

**Array**

[```Array```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is a constructor for arrays, which are list-like objects. 

    [element0, element1, ..., elementN]
    new Array(element0, element1, [,...[, elementN]])
    new Array(arrayLength)
    
    var name = ["Phillip", "Clark", "Creglow"];
    console.log(name[0]);  // logs "Phillip"
    console.log(name[1]);  // logs "Clark"
    console.log(name[2]);  // logs "Creglow"
    

**length**

The ```length``` property specifies the number of elenets in an ```Array```.

    var name = ["Phillip", "Clark", "Creglow"];
    console.log(name.length); // 3
    
**push**

The [```push()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method will add one or more elements to the end of an array.

    arr.push(element1, ..., elementN)

```elementN``` represents the elements to add to the end of the array.

    var name = ["Phillip"];
    var fullName = name.push("Clark", "Creglow");
    
    console.log(name); // ["Phillip", "Clark", "Creglow"]
    console.log(fullName); // 3
    
**pop**

The [```pop()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method will remove the last element of an array and returns that element.

    arr.pop()
    
    var afcNorth = ["Bengals", "Browns", "Ravens", "Steelers"];
    
    console.log(afcNorth); // ["Bengals", "Browns", "Ravens", "Steelers"]
    
    var popped = afcNorth.pop();
    
    console.log(afcNorth); // ["Bengals", "Browns", "Ravens", "Steelers"]
    
    console.log(popped); // "Steelers"
    
**slice**

The [```slice()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method returns a shallow copy of a portion of an array into a new array object.

    arr.slice([begin[[, end]])

```begin``` Zero-based index at which to begin extraction. 

```end``` Zero-base index at which to end extraction. ```slice``` extracts up to but not including end.

    var afcNorth = ["Bengals", "Browns", "Ravens", "Steelers"]
    var ohio = afcNorth.slice(0, 2);
    
    // ohio contains ["Bengals", "Browns"]
    
**splice**

The [```splice()```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method changes the content of an array by removing existing elements and/or adding new elements.

    array.splice(start, deleteCount[,item 1[, item 2[, ...]]])

```start``` Index at which to start changing the array.

```deleteCount``` An integer indicating the number of old array elements to remove.

```itemN``` The element to add to the array.

    var afcNorth = ["Bengals", "Browns", "Steelers"]
    
    // removes 0 elements from index 2 and inserts "Ravens"
    
    var removed = afcNorth.splice(2, 0, "Ravens);
    
    // afcNorth is ["Bengals", "Browns", "Ravens", "Steelers"]
    // removed is [], no elements removed
    
    // removed 1 element from index 3
    
    var removed = afcNorth.splice(3, 1);
    
    // afcNorth is ["Bengals", "Browns", "Ravens"]
    // removed is ["Steelers"]
    
## Control Flow

**Block statement ```{ }```**

The most basic statement is a block statement that is used to group statements ```{ }```.

    {
      statement_1;
      statement_2;
      .
      .
      .
      statement_n;
    }

Block statements are commonly used with control flow statements ```if``` ```for``` ```while```

    while (x < 10) {
        x++;
    }
    
    // { x++; } is the block statement
    
**if...else statement**

[```if...else```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) is a conditional statement in JavaScript. You would use the ```if``` statement if a logical condition is true. The ```else``` is optional if you wish to execute a statement where a condition is false.

    if (condition) {
        statement_1;
    } else {
        statement_2;
    }

In the example above, ```condition``` can be an expression that evaluates to true or false. Here is an example with multiple conditions:

    if (condition_1) {
        statement_1;
    } else if (condition_2) {
        statement_2;
    } else if (condition_n) {
        statement_n;
    } else {
        statement_last;
    }
    
**switch**

A [```switch```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling) statement allows a program to evaluate an expression and attempt to match that expression's value to a case label. The program will execute the associated statement when a match is found. 

    switch (expression) {
        case label_1:
            statements_1
            [break;]
        case label_2:
            statements_2
            [break;]
            ...
        default:
            statements_def
            [break;]
    }
    
    switch (team) {
        case "Steelers":
            console.log("The Steelers finished first in the AFC North and made the playoffs.");
            break;
        case "Bengals":
            console.log("The Bengals finished second in the AFC North and made the playoffs.");
            break;
        case "Ravens":
            console.log("The Ravens finished third in the AFC North and made the playoffs.");
            break;
        case "Browns":
            console.log("The Browns finished fourth in the AFC North and did not make the playoffs.";
            break;
        default:
            console.log("Please select a team from the AFC North.");
    }
    
**throw**

You would use a [```throw```](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#throw_statement) statement to throw an exception. To ```throw``` an exception you specify the expression containing the value to be thrown. 
    
    throw expression;

You may throw any expression, not just expressions of a specific type.

    throw "Browns"; // String
    throw 34; // Number
    throw true; // Boolean
    
**try...catch**

A ```try...catch``` statement marks a block of statements to try and specifies one or responses should an exception be thrown. If an exception is thrown, the ```try...catch``` statement catches it.

You want the ```try``` block to succeed and if it does not, you want to pass to the ```catch``` block. If no exception is found in the ```try``` block, the ```catch``` block is skipped.

    function getMonthName (mo) {
        mo = mo-1; // Adjust month number for array index (1=Jan, 12=Dec)
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",];
        if (months[mo] != null) {
            return months[mo];
        } else {
            throw "InvalidMonthNo"; // throw keyword is used here
        }
    }
    
    try { // statements to try
        monthName = getMonthName(myMonth); // function could throw exception
    }
    catch (e) {
        monthName = "unknown";
        logMyErrors (e); // pass exception object to error handler
    }
    

## Loops

[Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) repeat an action some number of times.

**for statement**

A ```for``` loop repeeats until some condition evaluates to false. 

    for ([initialExpression]; [condition]; [incrementExpression])
        statement

For a loop to execute, the initial expression ```initialExpression``` executes. Then, the ```condition``` expression is executed. If true, the loop executes. If false, the loop terminates. To execute multiple statements use a block statement ```({...})```


**do...while statement**

a ```do...while``` statement repeats until a specified condition evaluates to false. 

    do 
      statement
    while (condition);
    
    do {
        i += 1;
        console.log(i);
    } while (i < 5);
    
    // returns 1, 2, 3, 4

**while statement**

A ```while``` statement executes its statements as long as a specified condition is true. 

    while (condition)
        statement

If the condition becomes false, ```statement``` within the loop stops executing and control passes to the statement following the loop.

    n = 0;
    x = 0;
    while (n < 3) {
        n++;
        x += n;
    }
    
Be sure to avoid infinite loops! Make sure the condition in a loop eventually becomes false. The following example never terminates:

    while (true) {
        console.log ("Hello, world");
    }





    

    
    

    
    
    
    
    


    
