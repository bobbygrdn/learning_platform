-- Insert statement for the users
INSERT INTO users (username, email, experience, password, role, title, character_age) VALUES
('Bret', 'bret@email.com', 0, '$2a$10$KgvTJT0qeiUDSobn5Lm2f.SXDZKUJuBCWqc0s9aBBC4QTNeje8wkG', 'Admin', null, null),
('Charles', 'charles@email.com', 100000, '$2a$10$KgvTJT0qeiUDSobn5Lm2f.SXDZKUJuBCWqc0s9aBBC4QTNeje8wkG', 'User', 'male_meijin', '2023-05-29');

-- Insert statement for the settings
INSERT INTO settings (registrations) VALUES (true);

-- Insert statement for the course
INSERT INTO courses (title, description, topics, difficulty, time_needed, user_id, published)
VALUES
  ('JavaScript Fundamentals', 'This course is designed to give you the foundational knowledge you need to start using JavaScript', 'Introduction to JavaScript, Variables and Data Types, Operators and Expressions, Control Flow and Conditional Statements, Loop and Iterations, Functions and Scope, Arrays and Objects, Working with DOM(Document Object Model), Events and Event Handling, Introduction to Asynchronous Programming with Promises', 'Beginner', '2 Weeks', 1, true),
  ('Getting Started with HTML', 'This course is designed to give you the foundational knowledge you need for working with HTML and the Browser.', 'Introduction to HTML, HTML Document Structure, HTML Tags and Elements, Text Formatting and Structure, Links and Anchor Tags, Images and Multimedia, Lists and Tables, Forms and Input Elements, Semantic HTML, HTML5 Features and APIs', 'Intermediate', '2 Weeks', 1, true),
  ('CSS Basics', 'This course is designed to give you the foundational knowledge you need for working with style systems like Flex-Box and Grid for creating responsive, styled webpages.', 'Introduction to CSS, CSS Syntax and Selectors, CSS Box Model and Layout, CSS Typography and Fonts, CSS Colors and Backgrounds, CSS Borders and Shadows, CSS Layout Techniques (Floats, Flexbox, Grid), CSS Transitions and Animations, Responsive Web Design with CSS, CSS Best Practices and Optimization', 'Beginner', '2 Weeks', 1, true),
  ('Advanced JavaScript', 'This course is designed to push your knowledge in JavaScript further so you can use advanced techniques and principles when utilizing it in your projects.', 'Advanced Functions and Closures, Prototypes and Inheritance, Error Handling and Debugging, Working with JSON and APIs, ES6+ Features and Syntax, Modules and Module Bundlers, Promises and Async/Await, JavaScript Design Patterns, Testing and Debugging JavaScript Code, JavaScript Performance Optimization', 'Intermediate', '3 weeks', 1, true);

-- Insert statements for the lessons
INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 1: Introduction to JavaScript', 'JavaScript is a powerful programming language that plays a crucial role in web development. In this lesson, we will provide a brief introduction to JavaScript, explore its features and capabilities, and discuss its importance in enhancing website interactivity and user experience.', '<p>JavaScript is a versatile and powerful programming language that is widely used in web development. It adds interactivity and dynamic functionality to websites, making them more engaging for users. In this lesson, we will provide an overview of JavaScript and discuss its role in web development.</p>
<h3>What is JavaScript?</h3>
<p>JavaScript is a high-level, interpreted programming language that runs in the web browser. It is primarily used for client-side scripting, which means it runs on the user''s device rather than the web server. This allows JavaScript to interact with web pages in real-time, responding to user actions and modifying the content dynamically.</p>
<h3>JavaScripts Features and Capabilities:</h3>
<span>JavaScript offers a wide range of features and capabilities that make it a powerful tool for web development. Some key features include:</span>
<ul>
<li>Manipulating HTML: JavaScript can interact with HTML elements, modifying their properties, styles, and content. It allows developers to dynamically update the web page based on user input or events.</li>
<li>Handling Events: JavaScript enables developers to handle various user events, such as mouse clicks, keyboard input, and form submissions. This allows websites to respond to user actions and provide a more interactive experience.</li>
<li>Data Manipulation: JavaScript can handle data in different formats, perform calculations, and manipulate data structures like arrays and objects. It provides functions and methods for working with data efficiently.</li>
<li>Asynchronous Operations: JavaScript supports asynchronous programming, allowing tasks to run in the background without blocking the main execution. This is particularly useful when making network requests or handling time-consuming operations.</li>
</ul>
<h3>JavaScripts Role in Web Development:</h3>
<span>JavaScript plays a vital role in web development by enhancing the functionality and interactivity of websites. Here are some key aspects of JavaScripts role:</span>
<ul>
<li>Client-Side Scripting: JavaScript is primarily used for client-side scripting, enabling dynamic and interactive features on web pages. It runs directly in the users browser, reducing the need for round-trips to the server for every user action.</li>
<li>User Experience Enhancement: JavaScript allows developers to create engaging user experiences by adding animations, form validation, and interactive elements. It can make websites feel more responsive and intuitive.</li>
<li>Web Application Development: With the advent of modern web frameworks and libraries, JavaScript has become a key technology for building web applications. It enables the development of complex and feature-rich applications that run entirely in the browser.</li>
</ul>
<p>JavaScript is a fundamental language in web development, empowering developers to create dynamic and interactive websites. Its rich features and capabilities make it a versatile tool for enhancing user experience and building web applications. In the next lesson, we will delve into variables and data types in JavaScript, which are essential concepts for writing dynamic scripts.</p>', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 2: Variables and Data Types', 'In this lesson, we will explore the concept of variables in JavaScript and learn about different data types supported by the language. Understanding variables and data types is essential for writing dynamic scripts and manipulating data in JavaScript.', '<p>In JavaScript, variables are used to store and manipulate data. They provide a way to hold values that can be accessed and modified during program execution. Understanding variables and data types is essential for writing dynamic scripts and working with different kinds of information.</p>
<h3>Introduction to Variables:</h3>
<p>Variables are named containers that hold values in JavaScript. They allow us to store data and refer to it by a specific name. Before using a variable, we need to declare it using the <code>let</code>, <code>const</code>, or <code>var</code> keyword, followed by the variable name.</p>
<p>For example, to declare a variable named <code>age</code> and assign it a value of 25, we can write:</p>
<pre><code>let age = 25;</code></pre>
<p>Variables can also be initialized without an initial value. In that case, the variable will have an initial value of <code>undefined</code>.</p>
<h3>Data Types in JavaScript:</h3>
<p>JavaScript supports various data types, which determine the kind of values that can be assigned to variables. Here are some commonly used data types:</p>
<ul>
<li><strong>Number:</strong> Represents numeric values, including integers and floating-point numbers. For example: <code>let count = 10;</code></li>
<li><strong>String:</strong> Represents sequences of characters enclosed in single or double quotes. For example: <code>let name = "John";</code></li>
<li><strong>Boolean:</strong> Represents logical values, either <code>true</code> or <code>false</code>. For example: <code>let isLogged = true;</code></li>
<li><strong>Null:</strong> Represents the intentional absence of any object value. For example: <code>let data = null;</code></li>
<li><strong>Undefined:</strong> Represents the absence of an assigned value. For example: <code>let value;</code></li>
<li><strong>Array:</strong> Represents an ordered list of values, enclosed in square brackets and separated by commas. For example: <code>let numbers = [1, 2, 3];</code></li>
<li><strong>Object:</strong> Represents a collection of key-value pairs, enclosed in curly braces. For example: <code>let person = { name: "John", age: 25 };</code></li>
</ul>
<h3>Variable Naming Conventions:</h3>
<p>When naming variables, it is important to follow certain conventions and best practices:</p>
<ul>
<li>Use descriptive and meaningful names that reflect the purpose of the variable.</li>
<li>Start variable names with a lowercase letter.</li>
<li>Use camelCase for multi-word variable names (e.g., <code>userName</code>, <code>itemPrice</code>).</li>
<li>Avoid using reserved keywords as variable names (e.g., <code>let</code>, <code>if</code>, <code>function</code>).</li>
</ul>
<p>By understanding variables and data types, you can effectively store and manipulate different kinds of information in JavaScript. In the next lesson, we will explore operators and expressions, which allow us to perform computations and manipulate data in JavaScript.</p>', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 3: Operators and Expressions', 'In JavaScript, operators and expressions play a crucial role in performing computations and manipulating data. Operators allow us to perform mathematical calculations, logical operations, and comparisons, while expressions combine values and operators to produce new values. In this lesson, we will explore different types of operators and learn how to use them effectively. We will also delve into expressions and see how they are used to perform calculations and make comparisons.', '<p>In JavaScript, operators and expressions are fundamental building blocks for performing computations and manipulating data. Operators allow us to perform mathematical, logical, and comparison operations, while expressions combine values and operators to produce a new value.</p>
<h3>Arithmetic Operators:</h3>
<p>JavaScript provides several arithmetic operators for performing mathematical calculations. Here are some commonly used arithmetic operators:</p>
<ul>
<li><strong>Addition (+):</strong> Adds two values together. For example: <code>let sum = 5 + 3;</code></li>
<li><strong>Subtraction (-):</strong> Subtracts one value from another. For example: <code>let difference = 10 - 4;</code></li>
<li><strong>Multiplication (*):</strong> Multiplies two values. For example: <code>let product = 3 * 5;</code></li>
<li><strong>Division (/):</strong> Divides one value by another. For example: <code>let quotient = 15 / 3;</code></li>
<li><strong>Modulus (%):</strong> Returns the remainder of a division operation. For example: <code>let remainder = 10 % 3;</code></li>
<li><strong>Increment (++) and Decrement (--):</strong> Increase or decrease the value of a variable by 1. For example: <code>let count = 0; count++;</code></li>
</ul>
<h3>Assignment Operators:</h3>
<p>Assignment operators are used to assign values to variables. They combine the assignment (=) operator with arithmetic operators. Here are some commonly used assignment operators:</p>
<ul>
<li><strong>+=:</strong> Adds a value to the current value of a variable and assigns the result to the variable. For example: <code>let x = 5; x += 3; // x is now 8</code></li>
<li><strong>-=:</strong> Subtracts a value from the current value of a variable and assigns the result to the variable.</li>
<li><strong>*=:</strong> Multiplies the current value of a variable by a value and assigns the result to the variable.</li>
<li><strong>/=:</strong> Divides the current value of a variable by a value and assigns the result to the variable.</li>
</ul>
<h3>Comparison Operators:</h3>
<p>Comparison operators are used to compare two values and return a Boolean result. They are commonly used in conditional statements and loops. Here are some commonly used comparison operators:</p>
<ul>
<li><strong>Equal to (==):</strong> Checks if two values are equal. For example: <code>let isEqual = 5 == 5;</code></li>
<li><strong>Not equal to (!=):</strong> Checks if two values are not equal.</li>
<li><strong>Greater than (&gt;):</strong> Checks if one value is greater than another.</li>
<li><strong>Less than (&lt;):</strong> Checks if one value is less than another.</li>
<li><strong>Greater than or equal to (&gt;=):</strong> Checks if one value is greater than or equal to another.</li>
<li><strong>Less than or equal to (&lt;=):</strong> Checks if one value is less than or equal to another.</li>
</ul>
<h3>Logical Operators:</h3>
<p>Logical operators are used to combine multiple conditions and perform logical operations. They are commonly used in conditional statements. Here are the three logical operators in JavaScript:</p>
<ul>
<li><strong>AND (&&):</strong> Returns <code>true</code> if both conditions are true. For example: <code>let isTrue = (5 &gt; 3) && (10 &lt; 15);</code></li>
<li><strong>OR (||):</strong> Returns <code>true</code> if at least one condition is true.</li>
<li><strong>NOT (!):</strong> Negates the result of a condition. For example: <code>let isFalse = !(5 &gt; 3);</code></li>
</ul>
<h3>Expression Examples:</h3>
<p>Expressions combine values and operators to produce a new value. Here are some examples of expressions:</p>
<ul>
<li><code>let sum = 5 + 3;</code> - The expression <code>5 + 3</code> adds the values 5 and 3 together and assigns the result to the variable <code>sum</code>.</li>
<li><code>let average = (10 + 15 + 20) / 3;</code> - The expression <code>(10 + 15 + 20) / 3</code> calculates the average of the numbers 10, 15, and 20.</li>
<li><code>let isGreater = 10 &gt; 5;</code> - The expression <code>10 &gt; 5</code> compares if 10 is greater than 5 and assigns the result to the variable <code>isGreater</code>.</li>
</ul>
<p>By understanding operators and expressions, you can perform calculations, compare values, and manipulate data in JavaScript. In the next lesson, we will explore control flow statements, which allow us to control the flow of program execution based on conditions.</p>', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 4: Control Flow and Conditional Statements', 'Control flow and conditional statements are essential in JavaScript programming as they allow us to control the execution flow of our code based on certain conditions. In this lesson, we will explore different control flow structures and learn how to use conditional statements to make decisions and perform different actions based on those decisions.', '<p>Control flow refers to the order in which statements are executed in a program. By using conditional statements, we can control the flow of our code based on specific conditions. Let us explore some of the control flow structures and conditional statements in JavaScript:</p>
<h3>if Statement:</h3>
<p>The <code>if</code> statement is used to execute a block of code if a specified condition is true. Here is the basic syntax:</p>
<pre><code>if (condition) {
  // code to execute if the condition is true
}</code></pre>
<p>Additionally, you can also use the <code>else</code> statement to provide an alternative code block to execute when the condition is false:</p>
<pre><code>if (condition) {
  // code to execute if the condition is true
} else {
  // code to execute if the condition is false
}</code></pre>
<h3>else if Statement:</h3>
<p>The <code>else if</code> statement allows us to specify additional conditions to check if the previous conditions are false. It can be used in combination with the <code>if</code> statement. Here is an example:</p>
<pre><code>if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition2 is true
} else {
  // code to execute if all conditions are false
}</code></pre>
<h3>switch Statement:</h3>
<p>The <code>switch</code> statement provides a way to select one of many code blocks to execute based on the value of an expression. Here is the basic syntax:</p>
<pre><code>switch (expression) {
  case value1:
    // code to execute if the expression matches value1
    break;
  case value2:
    // code to execute if the expression matches value2
    break;
  default:
    // code to execute if the expression matches none of the values
    break;
}</code></pre>
<h3>Conditional (Ternary) Operator:</h3>
<p>The conditional operator, also known as the ternary operator, provides a concise way to write simple conditional expressions. It has the following syntax:</p>
<pre><code>condition ? expressionIfTrue : expressionIfFalse;</code></pre>
<p>For example:</p>
<pre><code>let result = age &gt;= 18 ? "Adult" : "Minor";</code></pre>
<p>By using control flow structures and conditional statements in your JavaScript code, you can make decisions and execute different blocks of code based on specific conditions. This allows for more dynamic and flexible program behavior. In the next lesson, we will dive into loops and iteration, which are used to repeat code blocks multiple times.</p>', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 5: Loops and Iteration', 'Loops and iteration are fundamental concepts in JavaScript that allow us to repeat a block of code multiple times. They are used when we need to perform an action repeatedly or iterate over a collection of data. In this lesson, we will explore different types of loops in JavaScript and learn how to effectively use them in our programs.', '<p>Loops are used to execute a block of code multiple times until a certain condition is met. JavaScript provides several loop structures that can be used in different scenarios:</p>
<h3>for Loop:</h3>
<p>The for loop is commonly used when we know the number of times we want to repeat a block of code. Here is the basic syntax:</p>
<pre><code>for (initialization; condition; increment/decrement) {
  // code to be executed in each iteration
}</code></pre>
<p>For example:</p>
<pre><code>for (let i = 0; i < 5; i++) {
  // code to be executed in each iteration
}</code></pre>
<h3>while Loop:</h3>
<p>The while loop is used when we do not know the exact number of iterations in advance. It repeats a block of code as long as a specified condition is true. Here is the basic syntax:</p>
<pre><code>while (condition) {
  // code to be executed in each iteration
}</code></pre>
<p>For example:</p>
<pre><code>let i = 0;
while (i < 5) {
  // code to be executed in each iteration
  i++;
}</code></pre>
<h3>do...while Loop:</h3>
<p>The do...while loop is similar to the while loop, but it guarantees that the block of code is executed at least once, even if the condition is initially false. Here is the basic syntax:</p>
<pre><code>do {
  // code to be executed in each iteration
} while (condition);</code></pre>
<p>For example:</p>
<pre><code>let i = 0;
do {
  // code to be executed in each iteration
  i++;
} while (i < 5);</code></pre>
<h3>for...in Loop:</h3>
<p>The for...in loop is used to iterate over the properties of an object. It can be helpful when working with objects and dictionaries. Here is the basic syntax:</p>
<pre><code>for (let property in object) {
  // code to be executed in each iteration
}</code></pre>
<p>For example:</p>
<pre><code>const person = {
  name: "John",
  age: 30,
  profession: "Developer"
};
for (let key in person) {
// code to be executed in each iteration
console.log(key + ": " + person[key]);
}</code></pre>

<h3>for...of Loop:</h3>
<p>The for...of loop is introduced in ECMAScript 2015 (ES6) and is used to iterate over iterable objects such as arrays and strings. It provides a simpler syntax compared to other loops. Here is the basic syntax:</p>
<pre><code>for (let element of iterable) {
  // code to be executed in each iteration
}</code></pre>
<p>For example:</p>
<pre><code>const fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
// code to be executed in each iteration
console.log(fruit);
}</code></pre>

<p>By utilizing loops and iteration in JavaScript, we can efficiently repeat code blocks and iterate over collections of data. This allows us to perform repetitive tasks and process data more effectively. In the next lesson, we will explore functions, which enable us to organize and reuse code blocks.</p>', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 6: Functions and Scope', 'Functions are an essential building block of JavaScript programming. They allow us to encapsulate reusable code blocks and execute them whenever needed. In this lesson, we will delve into the concept of functions in JavaScript, explore different types of functions, and understand the scope of variables within functions.', '<p>Functions are blocks of code that can be defined and executed whenever needed. They help us organize our code into reusable units, making our programs more modular and easier to maintain. Here are the key aspects of functions in JavaScript:</p>
<h3>Function Declaration:</h3>
<p>A function is declared using the <code>function</code> keyword, followed by the function name and a pair of parentheses. Any parameters that the function accepts are defined within the parentheses. Here is an example of a function declaration:</p>
<pre><code>function greet(name) {
  console.log("Hello, " + name + "!");
}</code></pre>
<h3>Function Invocation:</h3>
<p>To execute a function, we need to invoke or call it by using its name followed by a pair of parentheses. We can pass arguments to the function inside the parentheses if it expects any. Here is an example of invoking the <code>greet</code> function:</p>
<pre><code>greet("John");</code></pre>
<h3>Return Statement:</h3>
<p>Functions can also return values using the <code>return</code> statement. This allows us to capture and use the result of the functions execution. Here is an example:</p>
<pre><code>function multiply(a, b) {
  return a * b;
}
const result = multiply(3, 4);
console.log(result); // Output: 12</code></pre>

<h3>Function Scope:</h3>
<p>JavaScript has function scope, which means that variables defined inside a function are only accessible within that function. They are not visible outside the function. This helps prevent naming conflicts and allows for better code organization. Here is an example:</p>
<pre><code>function doSomething() {
  const message = "Hello!";
  console.log(message);
}
doSomething(); // Output: Hello!
console.log(message); // Error: message is not defined</code></pre>

<h3>Arrow Functions:</h3>
<p>Arrow functions are a concise syntax introduced in ECMAScript 2015 (ES6) for defining functions. They provide a shorter and more expressive way to write functions. Here is an example:</p>
<pre><code>const add = (a, b) => a + b;</code></pre>
<p>By understanding functions and their scope in JavaScript, we can write reusable code blocks and organize our programs more effectively. In the next lesson, we will explore objects, which are crucial for representing and working with complex data structures.</p>', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 7: Arrays and Objects', 'Arrays and objects are fundamental data structures in JavaScript. They allow us to store and manipulate collections of data. In this lesson, we will explore arrays and objects in detail, understand their properties and methods, and learn how to work with them effectively.', '<p>Arrays and objects are used to store and organize data in JavaScript. Here is an overview of arrays and objects:</p>
<h3>Arrays:</h3>
<p>An array is an ordered collection of values, known as elements. Each element in an array is assigned a numerical index starting from 0. We can store any type of data in an array, such as numbers, strings, objects, or even other arrays. Here is an example of an array:</p>
<pre><code>const fruits = ["apple", "banana", "orange"];</code></pre>
<p>Arrays provide several useful methods for manipulating and accessing their elements. Some commonly used array methods include:</p>
<ul>
  <li><code>push()</code>: Adds one or more elements to the end of an array.</li>
  <li><code>pop()</code>: Removes the last element from an array and returns it.</li>
  <li><code>length</code>: Returns the number of elements in an array.</li>
  <li><code>indexOf()</code>: Searches for a specified element in an array and returns its index.</li>
  <li><code>forEach()</code>: Executes a provided function once for each element in an array.</li>
</ul>
<h3>Objects:</h3>
<p>An object is a collection of key-value pairs, where each key is a unique identifier and each value can be any data type. Objects allow us to represent complex data structures and define custom properties and methods. Here is an example of an object:</p>
<pre><code>const person = {
  name: "John Doe",
  age: 25,
  city: "New York"
};</code></pre>
<p>Objects can be accessed and manipulated using dot notation or bracket notation. We can add, modify, or delete properties and invoke methods on objects. Here is an example:</p>
<pre><code>console.log(person.name); // Output: John Doe
person.age = 30;
console.log(person.age); // Output: 30

delete person.city;
console.log(person); // Output: { name: "John Doe", age: 30 }</code></pre>

<p>Arrays and objects are versatile data structures that enable us to work with collections of data efficiently. By understanding their properties and methods, we can perform various operations and build more complex programs. In the next lesson, we will explore how to manipulate the Document Object Model (DOM) using JavaScript to dynamically modify web pages.</p>', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 8: Working with DOM (Document Object Model)', 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the structure of a web page as a tree-like structure, allowing us to access and manipulate its elements using JavaScript. In this lesson, we will explore how to work with the DOM, understand its key concepts, and learn how to modify web pages dynamically.', '<p>The Document Object Model (DOM) is a programming interface that represents the structure of an HTML document as a tree-like structure. Each element, attribute, and text node in an HTML document is represented by an object in the DOM. By manipulating these objects using JavaScript, we can dynamically modify the content and appearance of web pages.</p>
<h3>Key Concepts:</h3>
<p>Here are some key concepts related to working with the DOM:</p>
<ul>
  <li>DOM Tree: The DOM represents the HTML document as a tree-like structure, where each element, attribute, and text node is a node in the tree. The relationship between nodes forms the hierarchy of the document.</li>
  <li>DOM Methods and Properties: The DOM provides various methods and properties that allow us to access and manipulate elements in the document. We can query elements, modify their attributes, add or remove elements, and change their content.</li>
  <li>DOM Events: The DOM provides a mechanism to handle user interactions and events on web pages. We can listen for events such as clicks, mouse movements, form submissions, and respond to them by executing JavaScript code.</li>
</ul>
<h3>Working with the DOM:</h3>
<p>To work with the DOM, we typically follow these steps:</p>
<ol>
  <li>Select an element: We use DOM selectors, such as <code>getElementById()</code>, <code>getElementsByClassName()</code>, or <code>querySelector()</code>, to select the element(s) we want to work with.</li>
  <li>Manipulate the element: Once we have selected the element, we can modify its properties, attributes, or content using DOM methods and properties. For example, we can change the text inside an element, update its styling, or add/remove classes.</li>
  <li>Handle events: We can listen for specific events on elements using event listeners. When the event occurs, we can execute JavaScript code to respond to the event and perform desired actions.</li>
</ol>
<p>By working with the DOM, we can create interactive and dynamic web pages. We can build applications that respond to user actions, update content based on user input, and provide a rich and engaging user experience. In the next lesson, we will explore how to handle form submissions using JavaScript to validate user input and process form data.</p>', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 9: Events and Event Handling', 'Events are a fundamental part of web development, enabling interactivity and user engagement on websites. In this lesson, we will explore the concept of events and learn how to handle them effectively using JavaScript. Understanding events and event handling will allow you to respond to user actions, such as button clicks, mouse movements, or form submissions, and create dynamic and interactive web experiences.', '<p>Events are actions or occurrences that happen within a web page, such as a button click, mouse movement, or keyboard input. By handling events, we can write code that executes in response to these actions, enabling us to create interactive and responsive web applications.</p>
<h3>Event Handling with JavaScript:</h3>
<p>JavaScript provides various methods for event handling. Here are the key steps involved in handling events:</p>
<ol>
<li>Select the HTML element(s) to which you want to attach the event handler.</li>
<li>Define a function that will be executed when the event occurs.</li>
<li>Attach the event handler function to the selected element(s).</li>
</ol>
<p>For example, to handle a button click event, we can select the button element using JavaScript and attach a click event handler function to it. When the button is clicked, the event handler function will be executed.</p>
<h3>Commonly Used Events:</h3>
<p>There are numerous events available in JavaScript, catering to different user interactions. Some commonly used events include:</p>
<ul>
<li>click: Occurs when a mouse click is detected on an element.</li>
<li>mouseover: Triggers when the mouse pointer enters the boundaries of an element.</li>
<li>keydown: Fires when a key on the keyboard is pressed down.</li>
<li>submit: Occurs when a form is submitted.</li>
</ul>
<p>These are just a few examples, and there are many more events available for different purposes.</p>
<h3>Event Propagation:</h3>
<p>Events in JavaScript follow a concept called event propagation or event bubbling. When an event occurs on an element, it is first handled by that elements event handler. Then, the event propagates to its parent elements, triggering their event handlers if they are listening for the same event.</p>
<p>We can control the event propagation using methods like <code>stopPropagation()</code> and <code>preventDefault()</code>. These methods allow us to stop the event from propagating further or prevent the default behavior associated with the event, respectively.</p>
<h3>Event Delegation:</h3>
<p>Event delegation is a technique that allows us to handle events on multiple elements efficiently. Instead of attaching event handlers to individual elements, we attach a single event handler to a parent element that contains all the target elements. When the event occurs, we can identify the specific target element and perform the necessary actions.</p><p>Events and event handling are essential concepts in web development. By understanding events and utilizing event handling techniques in JavaScript, you can create interactive and responsive web applications that respond to user actions. In the next lesson, we will delve into asynchronous programming with promises, which will further enhance your ability to handle complex operations and ensure smooth user experiences.</p>', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 10: Introduction to Asynchronous Programming with Promises', 'Asynchronous programming is a crucial aspect of modern web development, allowing us to perform tasks without blocking the main execution thread. In this lesson, we will explore asynchronous programming with promises in JavaScript. Promises provide an elegant way to handle asynchronous operations and simplify error handling and chaining of multiple asynchronous tasks. Understanding promises will enable you to write more efficient and responsive code in your web applications.', '<p>Asynchronous programming is the ability to execute code asynchronously, meaning it can start a task, continue with other operations, and handle the result of the task when it is finished. Traditional synchronous programming, on the other hand, blocks the execution until a task completes, which can lead to unresponsive user interfaces and poor performance.</p>
<h3>Introduction to Promises:</h3>
<p>Promises are a built-in feature introduced in JavaScript to handle asynchronous operations. A promise represents the eventual completion (or failure) of an asynchronous task and allows us to attach callbacks that will be executed when the task is resolved or rejected.</p>
<p>A promise can be in one of three states:</p>
<ol>
<li>Pending: The initial state when the asynchronous operation is still in progress.</li>
<li>Fulfilled: The state when the asynchronous operation has been successfully completed, and the promise has a resolved value.</li>
<li>Rejected: The state when the asynchronous operation has encountered an error or failure, and the promise has a reason for the rejection.</li>
</ol>
<p>When working with promises, we can use the <code>then()</code> method to attach success callbacks to handle the fulfillment of the promise and the <code>catch()</code> method to handle any errors or rejections that occur during the asynchronous operation.</p>
<h3>Chaining Promises:</h3>
<p>One of the powerful features of promises is the ability to chain them together, allowing us to perform a series of asynchronous operations in a structured and readable manner. By chaining promises, we can ensure that each subsequent operation starts only after the previous one has completed successfully.</p>
<p>The <code>then()</code> method of a promise returns a new promise, which allows us to chain additional <code>then()</code> methods and handle the resolved values or rejections in a sequential manner.</p>
<h3>Async/Await Syntax:</h3>
<p>ES2017 introduced the <code>async/await</code> syntax, which provides a more concise and intuitive way to write asynchronous code using promises. With <code>async/await</code>, we can write asynchronous code that looks and behaves like synchronous code, making it easier to read and understand.</p>
<p>The <code>async</code> keyword is used to declare a function as asynchronous, and the <code>await</code> keyword is used to pause the execution of the function until a promise is resolved. This allows us to write asynchronous code in a sequential manner without explicit promise chaining.</p>
<h3>Error Handling with Promises:</h3>
<p>Promises provide a standardized way of handling errors in asynchronous operations. By attaching a <code>catch()</code> callback to a promise, we can handle any rejections that occur during the execution of the asynchronous task. This allows for centralized error handling and prevents unhandled rejections from crashing the application.</p><p>Asynchronous programming with promises is a fundamental concept in modern web development. By understanding promises and their capabilities, you can write more efficient and responsive code that handles asynchronous tasks gracefully. In the next lesson, we will explore working with APIs in JavaScript, which will further enhance your ability to fetch and manipulate data from external sources.</p>', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 1: Introduction to HTML', 'HTML (Hypertext Markup Language) is the backbone of every web page. In this lesson, we will introduce HTML and its role in web development. You will learn about the basic structure of an HTML document, the essential HTML tags, and how to create a simple web page using HTML.', '<p>HTML stands for Hypertext Markup Language. It is the standard markup language used to create web pages and describe their structure. HTML consists of a series of elements, each represented by a tag, that define the content and layout of a web page.</p>
<h3>The Basic Structure of an HTML Document:</h3>
<p>Every HTML document follows a basic structure, which includes the following elements:</p>
<ul>
<li><code>&lt;!DOCTYPE&gt;</code>: This declaration specifies the version of HTML being used.</li>
<li><code>&lt;html&gt;</code>: The root element of an HTML document.</li>
<li><code>&lt;head&gt;</code>: The container for metadata and other information about the web page.</li>
<li><code>&lt;title&gt;</code>: The title of the web page displayed in the browsers title bar or tab.</li>
<li><code>&lt;body&gt;</code>: The container for the visible content of the web page.</li>
</ul>
<h3>HTML Tags and Elements:</h3>
<p>HTML tags are used to define the structure and content of a web page. Some commonly used HTML tags include:</p>
<ul>
<li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Heading tags used to define headings of different levels.</li>
<li><code>&lt;p&gt;</code>: Paragraph tag used to define paragraphs of text.</li>
<li><code>&lt;a&gt;</code>: Anchor tag used to create links to other web pages or resources.</li>
<li><code>&lt;img&gt;</code>: Image tag used to insert images into a web page.</li>
<li><code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code>: Unordered list and list item tags used to create bulleted lists.</li>
<li><code>&lt;ol&gt;</code> and <code>&lt;li&gt;</code>: Ordered list and list item tags used to create numbered lists.</li>
<li><code>&lt;div&gt;</code> and <code>&lt;span&gt;</code>: Container tags used for grouping and styling content.</li>
</ul>
<h3>Creating a Simple Web Page:</h3>
<p>To create a simple web page, you can use a combination of HTML tags to structure the content and add various elements such as headings, paragraphs, links, and images. Here is an example of a basic HTML page:</p>
<pre>
<code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Web Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Welcome to My Web Page&lt;/h1&gt;
    &lt;p&gt;This is my first web page created using HTML.&lt;/p&gt;
    &lt;a href="https://www.example.com"&gt;Visit Example.com&lt;/a&gt;
    &lt;img src="image.jpg" alt="My Image"&gt;
  &lt;/body&gt;
&lt;/html&gt;</code>
</pre>
<p>This example demonstrates how to structure an HTML document and include basic elements such as headings, paragraphs, links, and images.</p>
<p>HTML provides a solid foundation for building web pages. In the next lesson, we will explore the essential elements and attributes used in HTML forms, which play a crucial role in user input and data submission.</p>', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 2: HTML Document Structure', 'In Lesson 1, we introduced HTML and its basic structure. In this lesson, we will delve deeper into the structure of an HTML document. You will learn about the head and body sections, the role of metadata, and how to organize content using HTML elements.', '<p>An HTML document is divided into two main sections: the head and the body. Each section serves a specific purpose in defining the documents structure, content, and behavior.</p>
<h3>The Head Section:</h3>
<p>The head section of an HTML document contains metadata and other information about the web page. It is not displayed directly on the web page but provides important instructions to the browser and search engines.</p>
<ul>
<li><code>&lt;title&gt;</code>: The title tag specifies the title of the web page, which is displayed in the browsers title bar or tab.</li>
<li><code>&lt;meta&gt;</code>: Meta tags are used to provide additional information about the web page, such as character encoding, viewport settings, and keywords for search engines.</li>
<li><code>&lt;link&gt;</code>: Link tags are used to define external stylesheets, JavaScript files, or other linked resources.</li>
</ul>
<h3>The Body Section:</h3>
<p>The body section contains the visible content of the web page, including text, images, links, and other elements. It defines the structure and layout of the actual web page that users interact with.</p>
<h3>Organizing Content with HTML Elements:</h3>
<p>HTML provides a wide range of elements to structure and organize content within the body section of a web page. Some commonly used elements include:</p>
<ul>
<li><code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, and <code>&lt;footer&gt;</code>: These elements are used to define the header, navigation menu, and footer sections of a web page, respectively.</li>
<li><code>&lt;main&gt;</code>: The main element represents the main content of the web page.</li>
<li><code>&lt;section&gt;</code>: Section elements are used to group related content within a web page.</li>
<li><code>&lt;article&gt;</code>: The article element represents a self-contained composition within a document, such as a blog post or news article.</li>
<li><code>&lt;aside&gt;</code>: The aside element is used for content that is related to the main content but can be considered separate from it.</li>
<li><code>&lt;div&gt;</code>: The div element is a generic container that allows you to group and style content as needed.</li>
</ul>
<p>By using these elements appropriately, you can structure and organize the content of your web page in a meaningful way.</p>
<p>Understanding the structure of an HTML document is essential for creating well-formed and semantically meaningful web pages. In the next lesson, we will explore the different types of HTML elements used for text formatting and styling.</p>', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 3: HTML Tags and Elements', 'In Lesson 2, we learned about the basic structure of an HTML document. In this lesson, we will dive deeper into HTML tags and elements. You will learn about commonly used tags for text formatting, links, images, lists, tables, and more. Understanding these tags will allow you to create well-structured and visually appealing web pages.', '<p>HTML tags are the building blocks of an HTML document. They define the structure and content of different elements on a web page. In this lesson, we will explore some commonly used HTML tags and their purposes.</p>
<h3>Text Formatting Tags:</h3>
<p>HTML provides various tags to format and style text within a web page. Some commonly used text formatting tags include:</p>
<ul>
<li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Heading tags are used to define different levels of headings, with <code>&lt;h1&gt;</code> being the highest level and <code>&lt;h6&gt;</code> being the lowest level.</li>
<li><code>&lt;p&gt;</code>: The paragraph tag is used to define paragraphs of text.</li>
<li><code>&lt;em&gt;</code> and <code>&lt;strong&gt;</code>: These tags are used to emphasize or highlight text. <code>&lt;em&gt;</code> represents emphasized text (typically displayed in italics), while <code>&lt;strong&gt;</code> represents strongly emphasized text (typically displayed in bold).</li>
<li><code>&lt;blockquote&gt;</code>: The blockquote tag is used to indicate a longer quotation or citation.</li>
</ul>
<h3>Links and Images:</h3>
<p>HTML allows you to create hyperlinks and display images within your web pages. The following tags are commonly used for links and images:</p>
<ul>
<li><code>&lt;a&gt;</code>: The anchor tag is used to create links. It requires the <code>href</code> attribute to specify the target URL.</li>
<li><code>&lt;img&gt;</code>: The image tag is used to display images on a web page. It requires the <code>src</code> attribute to specify the image source.</li>
</ul>
<h3>Lists and Tables:</h3>
<p>HTML provides tags for creating ordered lists, unordered lists, and tables:</p>
<ul>
<li><code>&lt;ul&gt;</code>: The unordered list tag is used to create bulleted lists.</li>
<li><code>&lt;ol&gt;</code>: The ordered list tag is used to create numbered lists.</li>
<li><code>&lt;li&gt;</code>: The list item tag is used to define items within a list.</li>
<li><code>&lt;table&gt;</code>: The table tag is used to create tables.</li>
<li><code>&lt;tr&gt;</code>: The table row tag is used to define a row within a table.</li>
<li><code>&lt;td&gt;</code>: The table data tag is used to define data cells within a table row.</li>
</ul>
<p>These are just a few examples of the many HTML tags available. By using these tags effectively, you can structure your web page content and enhance its visual appearance.</p>
<p>In the next lesson, we will explore HTML forms and learn how to create interactive input fields and gather user data on web pages.</p>', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 4: Text Formatting and Structure', 'In Lesson 3, we learned about HTML tags and elements that help us structure and organize our web pages. In this lesson, we will focus on text formatting and additional structural elements in HTML. You will learn how to format text using headings, paragraphs, spans, and divs. Additionally, we will explore the proper usage of semantic HTML elements to enhance the accessibility and structure of our web content.', '<p>Text formatting is an essential aspect of creating well-structured and visually appealing web pages. HTML provides several tags and attributes to format and structure text effectively.</p>
<h3>Headings:</h3>
<p>Headings are used to create hierarchical structures within a document. HTML provides six levels of headings, from <code>&lt;h1&gt;</code> (the highest level) to <code>&lt;h6&gt;</code> (the lowest level). It is important to use headings in a logical order, with <code>&lt;h1&gt;</code> representing the main heading of the page and subsequent headings representing subheadings.</p>
<h3>Paragraphs:</h3>
<p>The paragraph tag, <code>&lt;p&gt;</code>, is used to define paragraphs of text. It is a block-level element and is commonly used to separate and structure textual content into coherent paragraphs.</p>
<h3>Spans and Divs:</h3>
<p>Spans and divs are generic container elements that allow us to apply styles or manipulate specific portions of text or groups of elements.</p>
<ul>
<li><code>&lt;span&gt;</code>: The span tag is an inline element used to apply styles or add inline formatting to specific text within a larger block of content. It is often used in combination with CSS to target specific elements or create inline styling effects.</li>
<li><code>&lt;div&gt;</code>: The div tag is a block-level element used to group and structure larger sections of content. It provides a way to apply styles or manipulate groups of elements as a whole. Divs are often used to create layout structures and organize sections of a web page.</li>
</ul>
<h3>Semantic HTML Elements:</h3>
<p>Semantic HTML elements provide meaning and structure to web content, making it more accessible and search engine friendly. Some commonly used semantic elements include:</p>
<ul>
<li><code>&lt;header&gt;</code>: The header tag represents the introductory or navigational section of a document or a specific section within it.</li>
<li><code>&lt;nav&gt;</code>: The nav tag is used to define a section of navigation links.</li>
<li><code>&lt;main&gt;</code>: The main tag represents the main content of a document, excluding headers, footers, and navigation.</li>
<li><code>&lt;section&gt;</code>: The section tag is used to define sections or thematic groups of content within a document.</li>
<li><code>&lt;article&gt;</code>: The article tag represents a self-contained composition that can be independently distributed or reused, such as a blog post or a news article.</li>
<li><code>&lt;footer&gt;</code>: The footer tag represents the footer section of a document or a specific section within it, typically containing information about the author, copyright, or related links.</li>
</ul>
<p>By using these semantic elements appropriately, we can improve the accessibility and structure of our web pages, making them more understandable for both humans and machines.</p>
<p>In the next lesson, we will explore the powerful capabilities of HTML forms and learn how to create interactive forms for gathering user input on web pages.</p>', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 5: Links and Anchor Tags', 'In Lesson 4, we learned about text formatting and structure in HTML. In this lesson, we will focus on creating links in HTML using the anchor tag, <a>. Links are essential for navigation and connecting different web pages together. We will explore the syntax of anchor tags, how to link to external and internal resources, and techniques for enhancing link usability.', '<p>Links play a vital role in web development by allowing users to navigate between web pages and access different online resources. HTML provides the anchor tag, `<a>`, to create links.</p>
<h3>Syntax of the Anchor Tag:</h3>
<p>The anchor tag is written as `<a>` with an opening and closing tag. The href attribute is used to specify the URL or destination of the link. Here is an example:</p>
<pre>
&lt;a href="https://www.example.com"&gt;Visit Example.com&lt;/a&gt;
</pre>
<h3>Linking to External Resources:</h3>
<p>To create a link to an external resource, such as another website, you need to provide the full URL in the href attribute. For example:</p>
<pre>
&lt;a href="https://www.example.com"&gt;Visit Example.com&lt;/a&gt;
</pre>
<h3>Linking to Internal Resources:</h3>
<p>When linking to internal resources within the same website, you can use relative URLs. Relative URLs specify the path to the resource relative to the current page. For example:</p>
<pre>
&lt;a href="/about"&gt;About Us&lt;/a&gt;
</pre>
<h3>Linking to Specific Sections within a Page:</h3>
<p>You can create links that jump to specific sections within a page by using anchor tags with the id attribute. The id attribute is used to mark specific sections, and the href attribute points to the corresponding id. For example:</p>
<pre>
&lt;a href="#section1"&gt;Jump to Section 1&lt;/a&gt;
...

<h2 id="section1">Section 1</h2>
<p>This is the content of Section 1.</p>
</pre>

<h3>Enhancing Link Usability:</h3>
<p>There are several techniques you can use to enhance the usability and accessibility of links:</p>
<ul>
<li>Use descriptive link text: Instead of using generic phrases like "click here," use meaningful and descriptive text that indicates the purpose or destination of the link.</li>
<li>Include title attributes: The title attribute provides additional information when hovering over a link. It can be used to provide more context or clarify the destination of the link.</li>
<li>Styling links: You can use CSS to style links differently from regular text, such as changing the color or underlining them. This helps users identify clickable elements.</li>
<li>Using target attributes: The target attribute can be used to specify how the linked resource should be displayed. For example, you can open the link in a new browser tab using `target="_blank"`.</li>
</ul>
<p>By applying these techniques, you can create effective and user-friendly links that improve the navigation experience for your website visitors.</p>
<p>In the next lesson, we will explore how to add images to web pages using HTMLs `<img>` tag and learn about essential image attributes and best practices.</p>', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 6: Images and Multimedia', 'In Lesson 5, we learned about creating links in HTML. In this lesson, we will explore how to incorporate images and multimedia into web pages using HTML. Images are a powerful visual element that can enhance the aesthetics and user experience of a website. We will cover the <img> tag, image attributes, responsive images, and embedding multimedia content.', '<p>Visual content, such as images and multimedia, plays a significant role in engaging website visitors. HTML provides the `<img>` tag to display images on web pages.</p>
<h3>The <img> Tag:</h3>
<p>The `<img>` tag is a self-closing tag that does not require a closing tag. It is used to embed images into HTML documents. Here is an example:</p>
<pre>
&lt;img src="image.jpg" alt="Description of the image"&gt;
</pre>
<h3>Image Attributes:</h3>
<p>The `<img>` tag supports various attributes to control the appearance and behavior of images:</p>
<ul>
<li>src: Specifies the URL or file path of the image.</li>
<li>alt: Provides alternative text that describes the image for accessibility purposes. It is displayed when the image cannot be loaded or read by screen readers.</li>
<li>width and height: Specifies the width and height of the image in pixels.</li>
<li>title: Adds a tooltip or additional information when the user hovers over the image.</li>
</ul>
<h3>Responsive Images:</h3>
<p>In todays mobile-first world, it is essential to make web pages responsive to different screen sizes. HTML provides the `srcset` attribute to specify multiple image sources for different viewport sizes. This helps ensure that the appropriate image is loaded based on the devices capabilities and screen size.</p>
<pre>
&lt;img src="small.jpg" srcset="medium.jpg 800w, large.jpg 1200w" alt="Description of the image"&gt;
</pre>
<h3>Embedding Multimedia Content:</h3>
<p>HTML allows you to embed multimedia content, such as videos and audio, directly into web pages. The `<video>` and `<audio>` tags are used for embedding multimedia content, and the appropriate source tags are used to specify the media files.</p>
<pre>
&lt;video controls&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;source src="video.webm" type="video/webm"&gt;
  Your browser does not support the video tag.
&lt;/video&gt;
<audio controls>
<source src="audio.mp3" type="audio/mpeg">
<source src="audio.ogg" type="audio/ogg">
Your browser does not support the audio tag.
</audio>
</pre>

<p>It is important to provide alternative content or fallbacks for multimedia elements for browsers that do not support them.</p>
<p>In the next lesson, we will explore the fundamental structure of web forms using HTML. We will learn how to create input fields, checkboxes, radio buttons, and other form elements to gather user input.</p>', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 7: Lists and Tables', 'In Lesson 6, we explored incorporating images and multimedia into web pages using HTML. In this lesson, we will focus on creating lists and tables using HTML. Lists allow us to organize and present information in a structured manner, while tables provide a way to display tabular data. We will cover different types of lists, table structure, table headers, rows, and cells.', '<p>Organizing content in a structured manner is essential for readability and comprehension. HTML provides tags to create both ordered and unordered lists, as well as tables.</p>
<h3>Lists:</h3>
<p>There are two main types of lists in HTML:</p>
<ul>
  <li>Ordered Lists (`<ol>`): Use the `<ol>` tag to create a numbered or ordered list.</li>
  <li>Unordered Lists (`<ul>`): Use the `<ul>` tag to create a bullet or unordered list.</li>
</ul>
<p>Each item in a list is represented by the `<li>` tag, which stands for list item.</p>
<h3>Ordered Lists:</h3>
<p>An ordered list is created using the `<ol>` tag. Each list item is represented by the `<li>` tag:</p>
<pre>
&lt;ol&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
  &lt;li&gt;Third item&lt;/li&gt;
&lt;/ol&gt;
</pre>
<h3>Unordered Lists:</h3>
<p>An unordered list is created using the `<ul>` tag. Each list item is represented by the `<li>` tag:</p>
<pre>
&lt;ul&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
  &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;
</pre>
<h3>Tables:</h3>
<p>Tables are used to present tabular data in a structured format. The main elements of a table are:</p>
<ul>
  <li>Table (`<table>`): The container element that holds the entire table.</li>
  <li>Table Header (`<thead>`): The section that contains the table header row(s).</li>
  <li>Table Body (`<tbody>`): The section that contains the table data rows.</li>
  <li>Table Row (`<tr>`): Represents a row in the table.</li>
  <li>Table Header Cell (`<th>`): Represents a header cell within a table row.</li>
  <li>Table Data Cell (`<td>`): Represents a data cell within a table row.</li>
</ul>
<p>Here is an example of a basic table structure:</p>
<pre>
&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Header 1&lt;/th&gt;
      &lt;th&gt;Header 2&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Data 1&lt;/td&gt;
      &lt;td&gt;Data 2&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Data 3&lt;/td&gt;
      &lt;td&gt;Data 4&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>
<p>Tables can have more complex structures with additional elements like table footers (`<tfoot>`), spanning cells, and column groups.</p>
<p>In the next lesson, we will explore forms in HTML and learn how to create input fields, checkboxes, radio buttons, and other form elements to gather user input.</p>', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 8: Forms and Input Elements', 'In Lesson 7, we learned about creating lists and tables in HTML. In this lesson, we will dive into forms, which are an essential part of web development for gathering user input. We will explore various input elements, such as text fields, checkboxes, radio buttons, dropdown menus, and buttons, and learn how to structure and style forms using HTML.', '<p>Forms provide a way for users to interact with a web page by entering and submitting data. HTML offers a range of input elements that allow us to capture different types of user input.</p>
<h3>Form Structure:</h3>
<p>A form is created using the `<form>` tag. It encloses all the elements related to the form:</p>
<pre>
&lt;form&gt;
  <!-- form elements go here -->
&lt;/form&gt;
</pre>
<h3>Text Fields:</h3>
<p>A text field is used to capture single-line text input from the user. It is created using the `<input>` tag with the `type` attribute set to `"text"`:</p>
<pre>
&lt;input type="text" name="username" placeholder="Enter your username"&gt;
</pre>
<h3>Checkboxes:</h3>
<p>Checkboxes allow users to select multiple options from a list. Each checkbox is created using the `<input>` tag with the `type` attribute set to `"checkbox"`:</p>
<pre>
&lt;input type="checkbox" name="option1" value="Option 1"&gt; Option 1
&lt;input type="checkbox" name="option2" value="Option 2"&gt; Option 2
&lt;input type="checkbox" name="option3" value="Option 3"&gt; Option 3
</pre>
<h3>Radio Buttons:</h3>
<p>Radio buttons are used when users can select only one option from a list. Each radio button is created using the `<input>` tag with the `type` attribute set to `"radio"`:</p>
<pre>
&lt;input type="radio" name="gender" value="male"&gt; Male
&lt;input type="radio" name="gender" value="female"&gt; Female
&lt;input type="radio" name="gender" value="other"&gt; Other
</pre>
<h3>Dropdown Menus:</h3>
<p>A dropdown menu, also known as a select menu, presents a list of options from which users can select one. It is created using the `<select>` and `<option>` tags:</p>
<pre>
&lt;select name="country"&gt;
  &lt;option value="usa"&gt;USA&lt;/option&gt;
  &lt;option value="canada"&gt;Canada&lt;/option&gt;
  &lt;option value="uk"&gt;UK&lt;/option&gt;
&lt;/select&gt;
</pre>
<h3>Buttons:</h3>
<p>Buttons are used to perform actions, such as submitting a form or triggering a JavaScript function. There are different types of buttons:</p>
<ul>
  <li>Submit Button: Submits the form when clicked. It is created using the `<input>` tag with the `type` attribute set to `"submit"`.</li>
  <li>Reset Button: Resets the form to its initial state. It is created using the `<input>` tag with the `type` attribute set to `"reset"`.</li>
  <li>Button: A generic button that can be customized with JavaScript. It is created using the `<button>` tag.</li>
</ul>
<pre>
&lt;input type="submit" value="Submit"&gt;
&lt;input type="reset" value="Reset"&gt;
&lt;button type="button"&gt;Click Me&lt;/button&gt;
</pre>
<h3>Form Validation:</h3>
<p>HTML5 introduced built-in form validation, allowing you to specify required fields, minimum and maximum input lengths, and other constraints. You can use the `required`, `minlength`, `maxlength`, and other attributes to enforce validation rules.</p>
<h3>Form Styling:</h3>
<p>You can apply CSS styles to form elements to enhance their appearance and layout. By using CSS, you can modify the size, color, background, and alignment of input fields, checkboxes, radio buttons, and buttons.</p>', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 9: Semantic HTML', 'In Lesson 8, we learned about creating forms and input elements in HTML. In this lesson, we will explore the concept of semantic HTML and its importance in web development. Semantic HTML focuses on using meaningful tags to structure web content, which improves accessibility, search engine optimization, and code maintainability.', '<p>Semantic HTML refers to the use of HTML tags that convey meaning and describe the purpose of the content they enclose. By using semantic tags, we provide additional context and clarity to both humans and machines.</p>
<h3>Benefits of Semantic HTML:</h3>
<p>Using semantic HTML offers several advantages:</p>
<ul>
  <li><strong>Accessibility:</strong> Semantic tags help screen readers and assistive technologies better understand the content, making it more accessible to individuals with disabilities.</li>
  <li><strong>Search Engine Optimization (SEO):</strong> Search engines rely on the structure and semantics of HTML to understand and index web pages. Using semantic tags can improve the visibility and ranking of your website in search engine results.</li>
  <li><strong>Code Maintainability:</strong> Semantic HTML enhances code readability and maintainability. It makes it easier for developers to understand the structure and purpose of different elements in the codebase.</li>
</ul>
<h3>Common Semantic HTML Tags:</h3>
<p>Here are some commonly used semantic HTML tags and their purposes:</p>
<ul>
  <li><strong>&lt;header&gt;:</strong> Represents the introductory content or a group of navigational links at the top of a web page.</li>
  <li><strong>&lt;nav&gt;:</strong> Defines a section of a page that contains navigation links.</li>
  <li><strong>&lt;main&gt;:</strong> Represents the main content of a document.</li>
  <li><strong>&lt;article&gt;:</strong> Represents a self-contained composition within a document, such as a blog post or news article.</li>
  <li><strong>&lt;section&gt;:</strong> Defines a standalone section within a document.</li>
  <li><strong>&lt;aside&gt;:</strong> Represents content that is tangentially related to the main content, such as sidebars or pull quotes.</li>
  <li><strong>&lt;footer&gt;:</strong> Represents the footer section of a document or a specific section within a parent container.</li>
</ul>
<h3>Using Semantic HTML:</h3>
<p>To make your HTML more semantic, replace generic tags (like `<div>` and `<span>`) with more descriptive semantic tags that accurately represent the content they contain. For example:</p>
<pre>
&lt;div class="header"&gt;...&lt;/div&gt; <!-- Replace with &lt;header&gt; -->
&lt;div class="navigation"&gt;...&lt;/div&gt; <!-- Replace with &lt;nav&gt; -->
&lt;div class="main-content"&gt;...&lt;/div&gt; <!-- Replace with &lt;main&gt; -->
</pre>
<h3>Accessibility Considerations:</h3>
<p>When using semantic HTML, it is important to consider accessibility by providing appropriate attributes and labels for form inputs, using heading tags (`<h1>`, `<h2>`, etc.) in a logical and hierarchical manner, and ensuring proper contrast and color usage.</p>', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 10: HTML5 Features and APIs', 'In Lesson 10, we will explore some of the exciting features and APIs introduced in HTML5. HTML5 is the latest version of HTML, and it brings a wide range of enhancements and capabilities to web development. We will discuss some of the key features and APIs that empower developers to create more dynamic and interactive web applications.', '<p>HTML5 introduces several new features and APIs that enhance the functionality and interactivity of web applications. Let us explore some of the notable ones:</p>
<h3>1. Multimedia Support:</h3>
<p>HTML5 provides native support for multimedia elements, including `<audio>` and `<video>`. With these tags, you can easily embed audio and video content into web pages without relying on third-party plugins like Flash.</p>
<h3>2. Canvas API:</h3>
<p>The `<canvas>` element and its associated JavaScript API allow you to draw graphics, animations, and interactive visualizations directly in the browser. The Canvas API provides powerful methods for creating dynamic and custom visuals.</p>
<h3>3. Geolocation API:</h3>
<p>The Geolocation API enables web applications to access the users geographical location. With user permission, you can retrieve latitude, longitude, and other location-related information, opening up possibilities for location-aware applications.</p>
<h3>4. Web Storage:</h3>
<p>HTML5 introduces two new mechanisms for storing data locally on the client-side: localStorage and sessionStorage. These provide a way to store and retrieve key-value pairs persistently or temporarily, respectively, without relying on server-side storage.</p>
<h3>5. Web Workers:</h3>
<p>Web Workers allow you to run JavaScript code in the background, separate from the main browser thread. This enables concurrent execution, improves performance, and prevents long-running tasks from blocking the user interface.</p>
<h3>6. Drag and Drop:</h3>
<p>HTML5 introduces native support for drag-and-drop interactions. You can enable drag-and-drop functionality for elements on your web page, making it easier for users to manipulate and transfer data.</p>
<h3>7. Offline Web Applications:</h3>
<p>HTML5 provides features like the Application Cache and the Service Worker API, which enable the creation of offline web applications. By caching resources and handling network requests in a controlled manner, you can build web apps that continue to function even when the user is offline.</p>
<h3>8. Semantic Elements:</h3>
<p>HTML5 introduces new semantic elements like `<header>`, `<nav>`, `<article>`, and `<footer>`, which provide a more meaningful structure to web content. By using these semantic elements, you can improve accessibility, search engine optimization, and code readability.</p>
<h3>9. Web APIs:</h3>
<p>HTML5 includes a range of additional APIs, such as the History API, WebSockets, WebRTC, and more. These APIs enable advanced functionalities like manipulating browser history, establishing real-time communication, and accessing device features.</p>
<p>By leveraging the features and APIs introduced in HTML5, you can create modern, interactive, and feature-rich web applications. Experiment with these capabilities to enhance user experience and unlock new possibilities in web development.</p>', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 1: Introduction to CSS', 'In Lesson 1, we will introduce Cascading Style Sheets (CSS) and its role in web development. CSS is a fundamental technology for styling and formatting web pages, allowing you to control the visual appearance of HTML elements. We will explore the basics of CSS and its importance in creating attractive and well-designed websites.', '<p>Cascading Style Sheets (CSS) is a powerful styling language used to describe the presentation and layout of HTML documents. It enables web developers to control the visual aspects of web pages, such as colors, fonts, spacing, and positioning.</p>
<h3>What is CSS?</h3>
<p>CSS stands for Cascading Style Sheets. It is a style sheet language that describes how HTML elements should be displayed on a web page. With CSS, you can separate the document structure (HTML) from its presentation (CSS), resulting in cleaner and more maintainable code.</p>
<h3>The Role of CSS in Web Development:</h3>
<p>CSS plays a crucial role in web development. Here are some key aspects of CSSs role:</p>
<ul>
<li><strong>Styling and Formatting:</strong> CSS allows you to apply styles to HTML elements, defining their appearance, including colors, fonts, sizes, backgrounds, borders, and more. It gives you control over the visual presentation of your web pages.</li>
<li><strong>Layout and Positioning:</strong> CSS provides mechanisms to control the layout and positioning of elements on a web page. You can control the placement of elements, create responsive designs, and establish multi-column layouts.</li>
<li><strong>Consistency and Reusability:</strong> CSS enables you to define styles once and apply them across multiple elements or web pages. This promotes consistency and reusability, making it easier to maintain and update the styling of your website.</li>
<li><strong>Accessibility and Usability:</strong> CSS allows you to optimize your website for accessibility and usability. You can enhance readability, ensure proper color contrast, and provide user-friendly interactions through well-designed CSS styles.</li>
</ul>
<h3>CSS Syntax and Selectors:</h3>
<p>CSS consists of rules that define how HTML elements should be styled. Each rule contains a selector and a set of declarations. The selector specifies which elements the rule applies to, and the declarations define the styles to be applied. Here is an example:</p>
<pre>
selector {
    property: value;
}
</pre>
<p>For instance, to change the font color of all paragraphs to blue, you would write:</p>
<pre>
p {
    color: blue;
}
</pre>
<h3>Inline, Internal, and External CSS:</h3>
<p>There are three ways to apply CSS to HTML documents:</p>
<ul>
<li><strong>Inline CSS:</strong> CSS styles can be applied directly within the HTML tags using the `style` attribute. For example: `<p style="color: red;">This is a red paragraph.</p>` Inline styles override other styles defined in external or internal CSS.</li>
<li><strong>Internal CSS:</strong> CSS styles can be defined within the `<style>` tags in the `<head>` section of an HTML document. Internal styles apply to the specific HTML document in which they are defined.</li>
<li><strong>External CSS:</strong> CSS styles can be stored in separate external CSS files with a `.css` extension. The CSS file is linked to the HTML document using the `<link>` tag. External stylesheets can be shared across multiple HTML documents.</li>
</ul>
<h3>CSS Frameworks and Libraries:</h3>
<p>In addition to writing CSS from scratch, you can leverage CSS frameworks and libraries to speed up your development process. CSS frameworks provide pre-designed and reusable CSS components and layouts, allowing you to create visually appealing websites with less effort.</p>
<p>Some popular CSS frameworks include Bootstrap, Foundation, and Bulma. These frameworks provide a grid system, responsive components, and styling presets that you can customize to suit your projects needs.</p>
<p>Understanding CSS is essential for web developers as it forms the foundation of web page styling and design. With CSS, you can transform plain HTML into visually appealing and user-friendly websites. In the next lesson, we will dive deeper into CSS selectors and styling techniques.</p>', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 2: CSS Syntax and Selectors', 'In Lesson 2, we will delve into CSS syntax and selectors. Understanding CSS syntax and selectors is crucial for applying styles to specific HTML elements and controlling their appearance. We will explore the different types of selectors and learn how to write CSS rules to target and style elements effectively.', '<h3>CSS Rules and Declarations:</h3>
<p>In CSS, rules are composed of selectors and declarations. The selector identifies the HTML elements to which the styles should be applied, while the declarations specify the styles themselves. Here is an example of a CSS rule:</p>
<pre>
selector {
    property: value;
}
</pre>
<p>For instance, to change the font color of all paragraphs to blue, you would write:</p>
<pre>
p {
    color: blue;
}
</pre>
<p>You can include multiple declarations within a rule, separated by semicolons. Here is an example that changes both the font color and background color of paragraphs:</p>
<pre>
p {
    color: blue;
    background-color: lightgray;
}
</pre>
<h3>Types of CSS Selectors:</h3>
<p>CSS selectors determine which HTML elements the styles should be applied to. There are several types of CSS selectors:</p>
<ul>
<li><strong>Element Selector:</strong> Selects elements based on their HTML tag name. For example, `p` selects all `<p>` elements.</li>
<li><strong>ID Selector:</strong> Selects an element based on its unique ID attribute. The ID selector starts with a hash (#) followed by the ID value. For example, `#myElement` selects the element with `id="myElement"`.</li>
<li><strong>Class Selector:</strong> Selects elements based on their class attribute. The class selector starts with a dot (.) followed by the class name. For example, `.myClass` selects all elements with `class="myClass"`.</li>
<li><strong>Attribute Selector:</strong> Selects elements based on their attributes. For example, `[type="submit"]` selects all elements with `type="submit"`.</li>
<li><strong>Pseudo-class Selector:</strong> Selects elements based on their state or position in the document. Pseudo-classes start with a colon (:). For example, `:hover` selects elements when the mouse is over them.</li>
<li><strong>Descendant Selector:</strong> Selects elements that are descendants of another element. It uses a space between two selectors. For example, `div p` selects all `<p>` elements that are descendants of `<div>` elements.</li>
</ul>
<h3>CSS Specificity:</h3>
<p>CSS specificity determines which styles should be applied when multiple rules target the same element. It follows a set of rules to calculate the specificity value of a selector. In general, the more specific a selector is, the higher its specificity value, and the higher the specificity value, the stronger its influence on styling. Understanding specificity is important for resolving conflicts and ensuring the desired styles are applied.</p>
<h3>Inheritance and Cascading:</h3>
<p>CSS properties can be inherited from parent elements to their children. Some properties, by default, inherit their values, while others do not. In addition, the concept of cascading in CSS determines the order in which styles are applied and how conflicts are resolved. Understanding inheritance and cascading is essential for managing the styles of your web pages effectively.</p>
<h3>Writing Efficient CSS:</h3>
<p>When writing CSS, it is important to optimize your code for efficiency and maintainability. Here are a few best practices:</p>
<ul>
<li>Use shorthand properties to consolidate multiple related property declarations.</li>
<li>Group similar selectors and declarations together for better organization.</li>
<li>Avoid excessive use of ID selectors and prioritize class selectors for reusability.</li>
<li>Minimize the use of !important and inline styles to maintain flexibility and ease of maintenance.</li>
</ul>', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 3: CSS Box Model and Layout', 'In Lesson 3, we will dive into the CSS box model and layout. Understanding the box model is essential for creating well-structured and visually appealing web layouts. We will explore how the box model works, its different components, and how to manipulate them using CSS properties. Additionally, we will discuss various layout techniques to control the positioning and arrangement of elements on a web page.', '<h3>The CSS Box Model:</h3>
<p>The CSS box model describes how elements are rendered on a web page. Each element is represented as a rectangular box, consisting of four components:</p>
<ul>
<li><strong>Content:</strong> The actual content of the element, such as text or images.</li>
<li><strong>Padding:</strong> The space between the content and the elements border.</li>
<li><strong>Border:</strong> The line that surrounds the padding and content.</li>
<li><strong>Margin:</strong> The space between the elements border and adjacent elements.</li>
</ul>
<p>The size of an element is calculated by combining the width and height of its content, padding, border, and margin.</p>
<h3>CSS Box Model Properties:</h3>
<p>CSS provides several properties to manipulate the box model and control the spacing and dimensions of elements:</p>
<ul>
<li><strong>Width and Height:</strong> Sets the dimensions of the content area.</li>
<li><strong>Padding:</strong> Controls the space between the content and the elements border.</li>
<li><strong>Border:</strong> Defines the style, width, and color of the elements border.</li>
<li><strong>Margin:</strong> Determines the space between the element and its surrounding elements.</li>
</ul>
<p>By adjusting these properties, you can create different visual effects and spacing arrangements for your web page elements.</p>
<h3>Box Sizing:</h3>
<p>The box-sizing property allows you to control how the width and height of an element are calculated. By default, the width and height properties only affect the content area. However, with the box-sizing property set to "border-box", the width and height include the padding and border, making it easier to create consistent layouts.</p>
<h3>Layout Techniques:</h3>
<p>CSS offers various layout techniques to position and arrange elements on a web page:</p>
<ul>
<li><strong>Floats:</strong> Floats allow elements to be positioned horizontally, allowing text and other elements to wrap around them.</li>
<li><strong>Flexbox:</strong> Flexbox is a powerful layout module that enables flexible and responsive layouts. It provides a flexible container and flexible items inside it, allowing you to control the arrangement, alignment, and spacing of elements.</li>
<li><strong>Grid:</strong> CSS Grid Layout is a two-dimensional grid system that allows for complex layouts with rows and columns. It provides precise control over the placement and sizing of elements.</li>
<li><strong>Positioning:</strong> CSS positioning allows you to precisely position elements relative to their containing element or the browser window. It includes properties like "position", "top", "left", "right", and "bottom".</li>
</ul>
<h3>Responsive Design:</h3>
<p>Responsive design is an important aspect of modern web development. It involves creating layouts that adapt to different screen sizes and devices. CSS provides techniques like media queries and flexible units to achieve responsive designs.</p>', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 4: CSS Typography and Fonts', 'In Lesson 4, we will explore CSS typography and fonts. Typography plays a crucial role in web design, as it affects readability, aesthetics, and the overall user experience. We will discuss various CSS properties and techniques to style text, control font properties, and create visually appealing typographic designs.', '<h3>Typography Basics:</h3>
<p>Typography refers to the art and technique of arranging typefaces to make written language readable and visually appealing. In web development, CSS provides several properties to control typography:</p>
<ul>
<li><strong>Font Family:</strong> Defines the typeface or font family to be used for the text.</li>
<li><strong>Font Size:</strong> Specifies the size of the text.</li>
<li><strong>Font Weight:</strong> Determines the thickness or boldness of the text.</li>
<li><strong>Font Style:</strong> Sets the style of the text, such as normal, italic, or oblique.</li>
<li><strong>Text Decoration:</strong> Adds visual effects to the text, such as underlines or strikethroughs.</li>
</ul>
<h3>Google Fonts:</h3>
<p>Google Fonts is a popular web font library that provides a wide range of free and open-source fonts. We will learn how to integrate Google Fonts into our web pages and apply them to our text using CSS.</p>
<h3>Text Styling:</h3>
<p>CSS provides various properties to style text and enhance its visual appearance:</p>
<ul>
<li><strong>Color:</strong> Sets the color of the text.</li>
<li><strong>Line Height:</strong> Controls the vertical spacing between lines of text.</li>
<li><strong>Letter Spacing:</strong> Adjusts the spacing between individual characters.</li>
<li><strong>Text Align:</strong> Specifies the horizontal alignment of the text.</li>
<li><strong>Text Shadow:</strong> Adds a shadow effect to the text.</li>
</ul>
<h3>Text Formatting:</h3>
<p>In addition to basic styling, CSS provides properties to format text in more advanced ways:</p>
<ul>
<li><strong>Text Indent:</strong> Sets the indentation of the first line of text within an element.</li>
<li><strong>Text Transform:</strong> Changes the capitalization or case of the text.</li>
<li><strong>Text Overflow:</strong> Specifies how text should be displayed when it exceeds the available space.</li>
</ul>
<h3>Web Safe Fonts:</h3>
<p>Web safe fonts are fonts that are commonly available across different operating systems and web browsers. We will explore a list of web safe fonts and how to use them in our CSS to ensure consistent typography across different devices.</p>
<h3>Responsive Typography:</h3>
<p>Responsive typography involves adapting the typography to different screen sizes and devices. We will learn about techniques such as using viewport units, media queries, and fluid typography to create responsive and scalable text.</p>', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 5: CSS Colors and Backgrounds', 'In Lesson 5, we will dive into CSS colors and backgrounds. Colors and backgrounds are essential design elements that can significantly impact the visual appeal and user experience of a website. We will explore various CSS properties and techniques to work with colors, gradients, and backgrounds to create attractive and engaging web pages.', '<h3>Understanding CSS Colors:</h3>
<p>Colors are defined using various color models, such as RGB, HEX, HSL, or named colors. We will learn how to specify colors in CSS and explore different color properties:</p>
<ul>
<li><strong>Color Property:</strong> Sets the foreground color of an elements text.</li>
<li><strong>Background Color Property:</strong> Sets the background color of an element.</li>
<li><strong>Opacity Property:</strong> Controls the transparency of an element.</li>
</ul>
<h3>Working with CSS Gradients:</h3>
<p>CSS gradients allow for smooth color transitions and can create eye-catching backgrounds or effects. We will cover the different types of gradients and how to apply them using CSS properties:</p>
<ul>
<li><strong>Linear Gradients:</strong> Creates a gradient effect along a straight line.</li>
<li><strong>Radial Gradients:</strong> Generates a gradient that radiates from a central point.</li>
<li><strong>Repeating Gradients:</strong> Repeats the gradient pattern to fill an element.</li>
</ul>
<h3>Background Images:</h3>
<p>In addition to colors and gradients, CSS allows us to use images as backgrounds for elements. We will explore how to apply background images, control their positioning and repeat behavior, and use CSS properties to enhance their appearance:</p>
<ul>
<li><strong>Background Image Property:</strong> Sets the image to be used as the background.</li>
<li><strong>Background Position Property:</strong> Positions the background image within an element.</li>
<li><strong>Background Repeat Property:</strong> Controls how the background image is repeated.</li>
<li><strong>Background Size Property:</strong> Specifies the size of the background image.</li>
</ul>
<h3>Background Shorthand:</h3>
<p>The background shorthand property allows us to set multiple background-related properties in a single declaration. We will explore how to use the background shorthand to define colors, gradients, images, and other background-related properties in a concise way.</p>
<h3>CSS Color Schemes:</h3>
<p>CSS color schemes enable us to define a consistent set of colors to be used throughout a website. We will learn about CSS variables and how to create and apply color schemes to maintain visual consistency across different elements.</p>
<h3>Working with Transparent Backgrounds:</h3>
<p>CSS allows us to create transparent backgrounds, enabling underlying elements or backgrounds to show through. We will explore techniques to create partially transparent backgrounds using the RGBA color model or the HSLA color model.</p>', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 6: CSS Borders and Shadows', 'In Lesson 6, we will explore CSS borders and shadows, which are crucial for adding visual enhancements and defining the structure of elements on a web page. We will cover various border styles, border properties, and techniques for creating different types of shadows using CSS. By the end of this lesson, you will have a solid understanding of how to apply borders and shadows to elements effectively.', '<h3>Working with CSS Borders:</h3>
<p>Borders help define the edges and boundaries of elements. We will learn about different border properties and techniques for customizing borders in CSS:</p>
<ul>
<li><strong>Border Width Property:</strong> Specifies the width of the border.</li>
<li><strong>Border Style Property:</strong> Sets the style of the border (solid, dashed, dotted, etc.).</li>
<li><strong>Border Color Property:</strong> Defines the color of the border.</li>
<li><strong>Border Radius Property:</strong> Creates rounded corners for elements.</li>
<li><strong>Border Shorthand Property:</strong> Combines border properties into a single declaration.</li>
</ul>
<h3>Creating Box Shadows:</h3>
<p>Box shadows are a popular visual effect that adds depth and dimension to elements. We will explore the CSS properties and values used to create different types of shadows:</p>
<ul>
<li><strong>Box Shadow Property:</strong> Sets the shadow effect for an element.</li>
<li><strong>Inset Shadows:</strong> Creates a shadow effect inside the element.</li>
<li><strong>Multiple Shadows:</strong> Combines multiple shadows for complex effects.</li>
</ul>
<h3>Applying Border Radius:</h3>
<p>The border-radius property allows you to create rounded corners for elements. We will cover different techniques for applying border-radius and creating various corner shapes:</p>
<ul>
<li><strong>Rounded Corners:</strong> Create elements with uniformly rounded corners.</li>
<li><strong>Individual Corner Radii:</strong> Customize each corners radius independently.</li>
</ul>
<h3>Using Border Images:</h3>
<p>Border images provide a way to create decorative borders using images. We will explore how to use the border-image property to apply custom border images to elements:</p>
<ul>
<li><strong>Border Image Property:</strong> Sets an image as the border for an element.</li>
<li><strong>Border Image Slice Property:</strong> Defines how the border image is divided and repeated.</li>
<li><strong>Border Image Width Property:</strong> Specifies the width of the border image.</li>
<li><strong>Border Image Outset Property:</strong> Sets the outward offset of the border image.</li>
</ul>
<h3>Box Sizing:</h3>
<p>The box-sizing property allows you to control how an elements width and height are calculated, including or excluding the elements padding and border. We will explore the different box-sizing values and their effects on element sizing and layout.</p>', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 7: CSS Layout Techniques (Floats, Flexbox, Grid)', 'In Lesson 7, we will explore CSS layout techniques that allow you to create flexible and responsive web page layouts. We will cover three key layout methods: floats, flexbox, and grid. Understanding these layout techniques will empower you to design and structure web page content in a way that adapts to different screen sizes and devices.', '<h3>Floats:</h3>
<p>Floats were traditionally used for layout before the advent of flexbox and grid. We will learn about the following aspects of using floats:</p>
<ul>
<li><strong>Float Property:</strong> How to float elements to the left or right within their containing elements.</li>
<li><strong>Clear Property:</strong> Clearing floats to prevent unwanted wrapping and overlapping.</li>
<li><strong>Float Layout Techniques:</strong> Creating column layouts and positioning elements using floats.</li>
</ul>
<h3>Flexbox:</h3>
<p>Flexbox is a powerful layout system designed to align and distribute space among elements. We will explore the following concepts related to flexbox:</p>
<ul>
<li><strong>Flex Container:</strong> Creating a flex container to hold a group of flex items.</li>
<li><strong>Flex Items:</strong> Defining individual elements within a flex container.</li>
<li><strong>Flexbox Properties:</strong> Key properties like flex-direction, justify-content, align-items, and align-self.</li>
<li><strong>Responsive Layouts with Flexbox:</strong> Building flexible and responsive layouts using flexbox.</li>
</ul>
<h3>Grid:</h3>
<p>CSS Grid is a two-dimensional layout system that allows for more advanced and precise control over web page layouts. We will cover the following aspects of CSS Grid:</p>
<ul>
<li><strong>Grid Container:</strong> Creating a grid container to hold grid items.</li>
<li><strong>Grid Items:</strong> Defining individual elements within a grid container.</li>
<li><strong>Grid Template Areas:</strong> Defining named areas within the grid.</li>
<li><strong>Grid Template Columns and Rows:</strong> Specifying the size and distribution of columns and rows in the grid.</li>
<li><strong>Responsive Layouts with CSS Grid:</strong> Creating responsive layouts using CSS Grid.</li>
</ul>
<h3>Combining Layout Techniques:</h3>
<p>Understanding the strengths and capabilities of each layout technique, we will explore how to combine floats, flexbox, and grid to create complex and adaptive layouts that meet specific design requirements.</p>', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 8: CSS Transitions and Animations', 'In Lesson 8, we will explore CSS transitions and animations, which allow you to add dynamic and visually appealing effects to your web pages. We will cover the concepts of transitions and animations, their properties, and how to apply them to elements using CSS.', '<h3>CSS Transitions:</h3>
<p>CSS transitions provide a way to smoothly animate changes in CSS property values over a specified duration. We will cover the following topics related to transitions:</p>
<ul>
<li><strong>Transition Properties:</strong> Understanding the properties involved in creating transitions, such as transition-property, transition-duration, transition-timing-function, and transition-delay.</li>
<li><strong>Transition Effects:</strong> Applying transitions to elements and specifying the CSS properties to transition.</li>
<li><strong>Transition Timing Functions:</strong> Exploring different timing functions to control the speed and acceleration of transitions.</li>
<li><strong>Transition Multiple Properties:</strong> Transitioning multiple properties simultaneously or independently.</li>
<li><strong>Transition Events:</strong> Understanding the transitionend event and how to use it to trigger JavaScript functions.</li>
</ul>
<h3>CSS Animations:</h3>
<p>CSS animations provide a more flexible way to create complex and interactive animations. We will cover the following topics related to animations:</p>
<ul>
<li><strong>Keyframes:</strong> Defining animation steps using the @keyframes rule.</li>
<li><strong>Animation Properties:</strong> Understanding the animation properties, such as animation-name, animation-duration, animation-timing-function, animation-delay, and animation-iteration-count.</li>
<li><strong>Animation Effects:</strong> Applying animations to elements and specifying the animation properties to animate.</li>
<li><strong>Animation Direction and Mode:</strong> Controlling the direction and playback mode of animations.</li>
<li><strong>Animation Events:</strong> Using animationstart, animationend, animationiteration events to trigger JavaScript functions.</li>
</ul>
<h3>Combining Transitions and Animations:</h3>
<p>Understanding the differences and strengths of transitions and animations, we will explore how to combine them to create engaging and interactive effects. We will also cover best practices for performance optimization and creating smooth animations.</p>', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 9: Responsive Web Design with CSS', 'In Lesson 9, we will explore responsive web design and how to create websites that adapt and look great on different devices and screen sizes. We will learn various CSS techniques and best practices to build responsive layouts and optimize the user experience across desktop, tablet, and mobile devices.', '<h3>Introduction to Responsive Web Design:</h3>
<p>Understanding the concept of responsive web design and its importance in todays multi-device world. Exploring the benefits of responsive design and the challenges it addresses.</p>
<h3>Media Queries:</h3>
<p>Using media queries to apply different CSS styles based on the characteristics of the users device, such as screen size, resolution, and orientation. Understanding the syntax and common use cases for media queries.</p>
<h3>Fluid Layouts:</h3>
<p>Creating flexible and fluid layouts that adapt to different screen sizes. Exploring techniques like percentage-based widths, flexible grids, and fluid typography to build responsive designs.</p>
<h3>Responsive Images and Media:</h3>
<p>Optimizing images and media for responsive web design. Understanding techniques such as CSS background images, the <code>img</code> elements <code>srcset</code> attribute, and responsive video embedding.</p>
<h3>Mobile-First Design:</h3>
<p>Understanding the mobile-first approach to responsive design. Exploring the benefits of starting with a mobile-centric design and progressively enhancing it for larger screens using CSS media queries.</p>
<h3>Responsive Navigation:</h3>
<p>Designing and implementing navigation menus that work well on both desktop and mobile devices. Exploring techniques like hamburger menus, collapsible menus, and responsive navigation patterns.</p>
<h3>Responsive Typography:</h3>
<p>Optimizing typography for responsive web design. Exploring techniques like fluid typography, viewport-based units, and responsive type scales to ensure readable and aesthetically pleasing text across different devices.</p>
<h3>Testing and Debugging Responsive Designs:</h3>
<p>Tools and techniques for testing and debugging responsive designs. Exploring browser developer tools, device emulators, and responsive design testing frameworks.</p>', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 10: CSS Best Practices and Optimization', 'In Lesson 10, we will cover CSS best practices and optimization techniques to improve the performance and maintainability of your CSS code. We will explore industry-standard approaches and guidelines for writing clean, efficient, and scalable CSS.', '<h3>CSS Organization and Structure:</h3>
<p>Structuring your CSS code for better organization and maintainability. Exploring different approaches such as BEM (Block, Element, Modifier) methodology, SMACSS (Scalable and Modular Architecture for CSS), and CSS component-based architectures.</p>
<h3>CSS Naming Conventions:</h3>
<p>Adopting consistent and meaningful naming conventions for CSS classes and selectors. Understanding the benefits of using descriptive names and avoiding generic or cryptic names.</p>
<h3>CSS Specificity and Selectors:</h3>
<p>Understanding CSS specificity and the cascade. Using efficient selectors to target elements without unnecessary specificity. Exploring selector performance considerations.</p>
<h3>CSS Performance Optimization:</h3>
<p>Optimizing CSS for better performance. Techniques include minification, concatenation, and compression of CSS files. Exploring the use of tools and build systems to automate optimization tasks.</p>
<h3>CSS Browser Compatibility:</h3>
<p>Addressing browser compatibility issues and ensuring consistent rendering across different browsers. Exploring CSS vendor prefixes, feature detection, and fallback strategies.</p>
<h3>CSS Frameworks and Libraries:</h3>
<p>Evaluating and using CSS frameworks and libraries. Understanding the benefits and considerations when incorporating popular CSS frameworks like Bootstrap or Tailwind CSS into your projects.</p>
<h3>CSS Maintenance and Refactoring:</h3>
<p>Strategies for maintaining and refactoring CSS code. Techniques include modularization, component-based CSS, and refactoring tools. Understanding the importance of code reviews and version control for CSS.</p>
<h3>CSS Performance Tools and Auditing:</h3>
<p>Using performance tools and auditing techniques to identify and fix CSS performance bottlenecks. Exploring browser developer tools, CSS linting, and performance profiling.</p>
<h3>Accessibility and CSS:</h3>
<p>Ensuring accessibility in CSS code. Understanding the impact of CSS on accessibility and incorporating best practices such as proper color contrast, semantic markup, and responsive design for accessibility.</p>', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 1: Advanced Functions and Closures', 'In Lesson 1, we will dive into advanced concepts related to functions and closures in JavaScript. We will explore higher-order functions, function composition, closures, and their practical applications. Understanding these concepts will enable you to write more robust and expressive JavaScript code.', '<h3>Higher-Order Functions:</h3>
<p>Understanding higher-order functions, which are functions that can accept other functions as arguments or return functions as results. Exploring examples of higher-order functions and their usefulness in functional programming and code abstraction.</p>
<h3>Function Composition:</h3>
<p>Exploring function composition techniques to create new functions by combining existing functions. Understanding the benefits of function composition for code reuse, modularity, and expressiveness. Exploring different approaches to function composition, including the use of libraries and native JavaScript methods.</p>
<h3>Closures:</h3>
<p>Understanding closures, which are functions that have access to variables defined in their outer lexical environment, even after the outer function has returned. Exploring the concept of scope and how closures enable data privacy and encapsulation. Using closures for practical scenarios like creating private variables and implementing memoization.</p>
<h3>Asynchronous Functions:</h3>
<p>Exploring asynchronous programming with JavaScript using Promises and the async/await syntax. Understanding the event loop and how JavaScript handles asynchronous operations. Handling asynchronous tasks using Promises and leveraging async/await for cleaner and more readable asynchronous code.</p>
<h3>Error Handling and Control Flow:</h3>
<p>Understanding error handling techniques and control flow management in JavaScript. Exploring try-catch blocks for handling errors and implementing fallback strategies. Understanding the concepts of synchronous and asynchronous error handling.</p>
<h3>Functional Programming Concepts:</h3>
<p>Introducing functional programming concepts and their application in JavaScript. Exploring concepts like immutability, pure functions, and function composition. Understanding the benefits and considerations of functional programming in JavaScript.</p>
<h3>Design Patterns and Best Practices:</h3>
<p>Exploring common design patterns and best practices in JavaScript. Understanding how advanced functions and closures can be utilized in implementing design patterns such as the module pattern, singleton pattern, and observer pattern. Applying best practices for writing clean, maintainable, and efficient code.</p>', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 2: Prototypes and Inheritance', 'In Lesson 2, we will explore the concepts of prototypes and inheritance in JavaScript. Understanding prototypes and how they enable object-oriented programming in JavaScript is crucial for building complex and reusable code structures. We will delve into the prototype chain, inheritance patterns, and object creation techniques.', '<h3>Understanding Prototypes:</h3>
<p>Explaining the concept of prototypes in JavaScript and their role in object creation. Understanding how prototype objects are linked to create an inheritance chain. Exploring the prototype chain and how it enables property and method lookup in JavaScript objects.</p>
<h3>Prototypal Inheritance:</h3>
<p>Exploring the inheritance patterns in JavaScript using prototypes. Understanding how objects can inherit properties and behaviors from their prototype objects. Exploring different inheritance patterns such as the prototype chain, constructor functions, and the "new" keyword.</p>
<h3>Creating and Extending Objects:</h3>
<p>Exploring different techniques for creating and extending objects in JavaScript. Understanding object literals, constructor functions, and the Object.create() method. Exploring the concept of "own" properties and prototype properties in objects.</p>
<h3>Class Syntax and ES6 Inheritance:</h3>
<p>Introducing the class syntax introduced in ECMAScript 6 (ES6) and how it simplifies object-oriented programming in JavaScript. Understanding the class-based inheritance model and how it relates to prototypes. Exploring the extends keyword and super keyword for inheritance in ES6.</p>
<h3>Prototype-based Design Patterns:</h3>
<p>Exploring design patterns that leverage prototypes and inheritance in JavaScript. Understanding patterns such as the constructor pattern, prototype pattern, and mixin pattern. Applying these patterns to create reusable and flexible code structures.</p>
<h3>Object-oriented Best Practices:</h3>
<p>Discussing best practices for using prototypes and inheritance in JavaScript. Understanding when to use inheritance versus composition. Exploring techniques for managing prototype modifications and avoiding common pitfalls.</p>
<h3>Understanding Modern JavaScript Frameworks:</h3>
<p>Exploring how modern JavaScript frameworks like React and Vue.js handle object creation and component-based architectures. Understanding how these frameworks abstract away the complexities of prototypes and provide higher-level abstractions for building applications.</p>', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 3: Error Handling and Debugging', 'In Lesson 3, we will explore the important topic of error handling and debugging in JavaScript. As developers, encountering errors is inevitable, but knowing how to effectively handle and debug them is crucial for writing robust and reliable code. We will cover different error types, error handling techniques, and various debugging tools and strategies.', '<h3>Understanding JavaScript Errors:</h3>
<p>Explaining the concept of errors in JavaScript and their types. Understanding syntax errors, runtime errors, and logical errors. Exploring common error scenarios and their potential causes.</p>
<h3>Error Handling Techniques:</h3>
<p>Exploring different error handling techniques in JavaScript. Understanding try-catch blocks and their role in catching and handling errors. Exploring the throw statement for custom error creation. Discussing best practices for error handling and graceful error recovery.</p>
<h3>Debugging Tools and Strategies:</h3>
<p>Introducing various debugging tools and techniques available in JavaScript. Exploring the browser developer console and its debugging capabilities. Understanding how to use console.log() statements for logging and debugging. Exploring breakpoints and stepping through code using browser developer tools.</p>
<h3>Debugging Techniques:</h3>
<p>Exploring effective debugging techniques for identifying and fixing issues in JavaScript code. Understanding how to isolate and reproduce bugs. Utilizing console methods for inspecting variables, objects, and function calls. Using breakpoints to pause code execution and examine program state.</p>
<h3>Error Logging and Reporting:</h3>
<p>Discussing the importance of error logging and reporting in production environments. Understanding how to capture and log errors on the server side. Exploring tools and services for tracking and analyzing error logs. Discussing best practices for error reporting and monitoring.</p>
<h3>Common Debugging Scenarios:</h3>
<p>Exploring common debugging scenarios and their solutions. Discussing scenarios such as dealing with undefined variables, handling asynchronous code errors, and fixing logical errors. Providing practical examples and strategies to overcome these challenges.</p>
<h3>Debugging Best Practices:</h3>
<p>Discussing best practices for effective debugging in JavaScript. Understanding the importance of writing modular and testable code. Utilizing code linting tools to catch potential errors early. Following a systematic approach to debugging and documenting solutions.</p>
<h3>Debugging in Different Environments:</h3>
<p>Exploring debugging techniques for different JavaScript environments. Understanding how to debug JavaScript code running in web browsers, Node.js environments, and mobile platforms. Discussing specific tools and strategies for each environment.</p>', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 4: Working with JSON and APIs', 'In Lesson 4, we will dive into working with JSON (JavaScript Object Notation) and APIs (Application Programming Interfaces) in JavaScript. JSON is a widely used data format for exchanging data between a client and a server, while APIs provide a way to interact with external services and retrieve data. We will explore how to parse and stringify JSON data, make API requests using various techniques, and handle responses.', '<h3>Understanding JSON:</h3>
<p>Explaining the basics of JSON (JavaScript Object Notation) and its role in data interchange. Understanding JSON syntax, including objects, arrays, and key-value pairs. Exploring JSONs data types and their representations in JavaScript.</p>
<h3>Working with JSON Data:</h3>
<p>Exploring techniques for parsing and generating JSON data in JavaScript. Using the JSON.parse() method to parse JSON strings into JavaScript objects. Using JSON.stringify() to convert JavaScript objects into JSON strings. Handling nested and complex JSON structures.</p>
<h3>Introduction to APIs:</h3>
<p>Explaining the concept of APIs and their role in web development. Understanding how APIs allow communication and data exchange between different systems. Exploring common types of APIs, such as RESTful APIs and web services.</p>
<h3>Making API Requests:</h3>
<p>Exploring different techniques for making API requests in JavaScript. Using the Fetch API to send HTTP requests and retrieve data. Understanding request methods (GET, POST, PUT, DELETE) and how to include parameters and headers in requests.</p>
<h3>Handling API Responses:</h3>
<p>Understanding how to handle API responses in JavaScript. Parsing and extracting data from API responses. Handling different response formats (JSON, XML, plain text). Handling errors and status codes in API responses.</p>
<h3>Asynchronous Programming with APIs:</h3>
<p>Exploring asynchronous programming techniques when working with APIs. Understanding Promises and how they simplify handling asynchronous operations. Using async/await syntax for writing asynchronous code in a synchronous style. Handling errors and exceptions in asynchronous API requests.</p>
<h3>API Authentication and Authorization:</h3>
<p>Exploring different authentication and authorization mechanisms used in APIs. Understanding API keys, tokens, and authentication schemes (e.g., OAuth). Implementing authentication and authorization in JavaScript when interacting with APIs.</p>
<h3>Working with Third-Party APIs:</h3>
<p>Exploring the process of integrating and working with third-party APIs. Understanding API documentation and how to obtain API keys. Exploring popular APIs and their use cases, such as weather APIs, social media APIs, and geolocation APIs.</p>
<h3>Cross-Origin Resource Sharing (CORS):</h3>
<p>Understanding the concept of CORS and its implications when making API requests from a different domain. Exploring techniques to handle CORS-related issues, such as server-side proxying and CORS headers configuration.</p>
<h3>API Best Practices and Considerations:</h3>
<p>Discussing best practices when working with APIs in JavaScript. Considering performance optimizations, caching strategies, and rate limiting. Understanding security considerations and protecting sensitive data when interacting with APIs.</p>', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 5: ES6+ Features and Syntax', 'In Lesson 5, we will explore the features and syntax introduced in ECMAScript 6 (ES6) and later versions of JavaScript. ES6 brought significant enhancements to the language, introducing new syntax, built-in functions, and programming constructs. We will dive into some of the key ES6+ features and discuss how they can improve code readability, maintainability, and efficiency.', '<h3>Introduction to ES6 and Beyond:</h3>
<p>Explaining the significance of ECMAScript 6 (ES6) and the subsequent versions of JavaScript. Discussing the motivation behind these updates and their impact on modern JavaScript development.</p>
<h3>Let and Const:</h3>
<p>Introducing the let and const keywords for variable declaration. Explaining the block scope and immutability features of const variables. Comparing let and var in terms of scoping rules.</p>
<h3>Arrow Functions:</h3>
<p>Exploring the concise syntax of arrow functions and their benefits. Understanding lexical scoping and the implications of this in arrow functions. Discussing the differences between arrow functions and regular functions.</p>
<h3>Template Literals:</h3>
<p>Introducing template literals, a convenient syntax for creating strings with embedded expressions. Exploring multiline strings, string interpolation, and the use of expressions within template literals.</p>
<h3>Enhanced Object Literals:</h3>
<p>Exploring the enhancements to object literals in ES6+. Understanding shorthand property and method syntax, computed property names, and object destructuring. Discussing the benefits of these enhancements in object creation and manipulation.</p>
<h3>Destructuring Assignment:</h3>
<p>Explaining the destructuring assignment syntax and its use cases. Destructuring objects and arrays to extract values into individual variables. Discussing default values, nested destructuring, and rest/spread operators.</p>
<h3>Spread Syntax:</h3>
<p>Exploring the spread syntax and its role in array manipulation and function calls. Understanding how to expand arrays or objects into individual elements or properties. Discussing use cases such as array concatenation, object merging, and function parameter spreading.</p>
<h3>Modules:</h3>
<p>Introducing ES6 modules as a way to organize and share code. Understanding module exports and imports syntax. Discussing the benefits of using modules for code encapsulation and dependency management.</p>
<h3>Classes and Inheritance:</h3>
<p>Exploring class syntax and its role in creating objects with shared behavior. Understanding class constructors, methods, and static members. Discussing inheritance through the extends keyword and the super keyword for calling parent class methods.</p>
<h3>Async/Await:</h3>
<p>Understanding the async/await syntax for handling asynchronous operations. Exploring the use of async functions and the await keyword to pause execution and wait for promises to resolve. Discussing error handling and parallel execution with async/await.</p>
<h3>Iterators and Generators:</h3>
<p>Exploring iterators and generators as powerful constructs for controlling iteration and generating sequences. Understanding iterator protocols and how to create custom iterators. Introducing generator functions and their use in creating iterable objects.</p>
<h3>ES6+ Best Practices and Considerations:</h3>
<p>Discussing best practices when using ES6+ features and syntax. Understanding browser compatibility and the need for transpilation or polyfills. Considering performance implications and code maintainability when using advanced JavaScript features.</p>', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 6: Modules and Module Bundlers', 'In Lesson 6, we will explore the concept of modules in JavaScript and how they facilitate modular and reusable code. Modules allow us to organize our code into separate files, each with its own scope and functionality. We will also discuss the use of module bundlers, which help package and optimize our modules for production-ready applications.', '<h3>Introduction to Modules:</h3>
<p>Explaining the benefits of using modules in JavaScript. Understanding the modular development approach and how it improves code organization, reusability, and maintainability.</p>
<h3>Module Formats:</h3>
<p>Exploring different module formats in JavaScript, such as CommonJS, AMD, and ES6 modules. Comparing their syntax, features, and browser compatibility. Understanding the advantages of using ES6 modules as the standard format.</p>
<h3>ES6 Modules:</h3>
<p>Understanding the syntax and usage of ES6 modules. Exploring the import and export statements for defining dependencies and exposing functionality. Discussing the different ways to import and export modules, including named exports, default exports, and wildcard imports.</p>
<h3>Module Dependency Resolution:</h3>
<p>Explaining how module dependencies are resolved in JavaScript. Discussing the use of relative and absolute paths to import modules. Understanding the role of package managers and module bundlers in managing dependencies.</p>
<h3>Module Bundlers:</h3>
<p>Introducing module bundlers and their role in optimizing and packaging modules for production. Exploring popular module bundlers such as Webpack and Rollup. Understanding their features, configuration options, and integration with other tools.</p>
<h3>Working with Webpack:</h3>
<p>Exploring Webpack, a popular module bundler for JavaScript applications. Understanding its configuration file and common settings. Discussing the concepts of entry points, output, loaders, and plugins. Demonstrating how to bundle modules with Webpack.</p>
<h3>Code Splitting and Dynamic Imports:</h3>
<p>Discussing code splitting as a technique to split the bundled code into smaller chunks. Understanding the benefits of code splitting in reducing initial loading times and optimizing resource usage. Exploring dynamic imports and how they enable lazy loading of modules.</p>
<h3>Optimizing Bundled Code:</h3>
<p>Exploring techniques to optimize bundled code size and performance. Discussing tree shaking to eliminate unused code, minification to reduce file size, and caching strategies for efficient resource loading. Understanding the importance of code optimization for production-ready applications.</p>
<h3>Working with Module Systems:</h3>
<p>Discussing the integration of module bundlers with other tools and frameworks. Exploring how to use modules in popular JavaScript frameworks such as React, Angular, and Vue.js. Understanding the ecosystem of plugins and loaders available for module bundlers.</p>
<h3>Module Best Practices:</h3>
<p>Discussing best practices when working with modules and module bundlers. Understanding how to structure modules, handle circular dependencies, and manage third-party dependencies. Exploring techniques for versioning, code organization, and documentation.</p>', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 7: Promises and Async/Await', 'In Lesson 7, we will dive into asynchronous JavaScript programming and explore the concepts of Promises and Async/Await. Asynchronous operations are essential for handling tasks that take time, such as network requests or file operations. We will learn how Promises provide a clean and structured way to handle asynchronous operations, and how Async/Await simplifies asynchronous code even further.', '<h3>Introduction to Asynchronous JavaScript:</h3>
<p>Understanding the need for asynchronous programming in JavaScript. Explaining the difference between synchronous and asynchronous code execution. Discussing scenarios where asynchronous operations are commonly used.</p>
<h3>Callbacks and Callback Hell:</h3>
<p>Exploring callbacks as a traditional approach to handle asynchronous operations in JavaScript. Discussing the challenges of callback hell, where deeply nested callbacks make the code difficult to read and maintain. Introducing Promises as a solution.</p>
<h3>Introduction to Promises:</h3>
<p>Understanding Promises as an elegant way to handle asynchronous operations. Explaining the Promise syntax and the concepts of resolving, rejecting, and chaining Promises. Discussing the benefits of using Promises for better code organization and error handling.</p>
<h3>Promise API:</h3>
<p>Exploring the Promise API and its essential methods, such as <code>then()</code>, <code>catch()</code>, and <code>finally()</code>. Understanding how to handle resolved and rejected Promises, and how to perform cleanup tasks using the <code>finally()</code> method.</p>
<h3>Promise Chaining:</h3>
<p>Understanding how to chain Promises to perform sequential asynchronous operations. Exploring how Promises can be connected using the <code>then()</code> method to pass data between successive Promises. Discussing error handling within Promise chains.</p>
<h3>Error Handling in Promises:</h3>
<p>Exploring different approaches to error handling in Promises. Discussing the use of <code>catch()</code> to handle errors within a Promise chain. Understanding how to propagate errors between Promises and handle errors at the global level.</p>
<h3>Async/Await Syntax:</h3>
<p>Introducing Async/Await as a modern and more readable approach to asynchronous programming in JavaScript. Explaining the syntax and usage of the <code>async</code> and <code>await</code> keywords. Discussing how Async/Await simplifies working with Promises.</p>
<h3>Working with Async Functions:</h3>
<p>Understanding how to define and use async functions to write asynchronous code using the Async/Await syntax. Exploring how async functions automatically return Promises and how to handle those Promises using <code>await</code>.</p>
<h3>Error Handling with Async/Await:</h3>
<p>Discussing error handling in Async/Await code. Exploring try-catch blocks to catch and handle errors in asynchronous operations. Understanding how error propagation works in async functions and how to handle rejected Promises.</p>
<h3>Parallel and Sequential Operations:</h3>
<p>Exploring techniques to perform parallel and sequential asynchronous operations using Async/Await. Discussing the use of <code>Promise.all()</code> to run multiple Promises in parallel and <code>for...of</code> loops to perform sequential operations.</p>
<h3>Async/Await Best Practices:</h3>
<p>Discussing best practices when working with Promises and Async/Await. Exploring error handling, error propagation, and code readability. Understanding how to handle async function execution and handle edge cases.</p>', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 8: JavaScript Design Patterns', 'In Lesson 8, we will explore JavaScript design patterns, which are reusable solutions to common problems in software design. Design patterns provide structure and organization to our code, improve code readability, maintainability, and scalability. We will study various design patterns and understand how they can be applied in JavaScript applications.', '<h3>Introduction to Design Patterns:</h3>
<p>Understanding the importance of design patterns in software development. Explaining the benefits of using design patterns in JavaScript applications. Discussing the role of design patterns in improving code structure, modularity, and reusability.</p>
<h3>Creational Design Patterns:</h3>
<p>Exploring creational design patterns, which focus on object creation mechanisms. Studying popular creational design patterns such as Factory, Singleton, and Builder. Understanding their use cases, implementation techniques, and benefits.</p>
<h3>Structural Design Patterns:</h3>
<p>Understanding structural design patterns, which deal with object composition and relationship between objects. Exploring patterns such as Adapter, Decorator, and Facade. Discussing how these patterns enable code reuse, simplify complex systems, and improve maintainability.</p>
<h3>Behavioral Design Patterns:</h3>
<p>Studying behavioral design patterns, which focus on communication and interaction between objects. Exploring patterns such as Observer, Strategy, and Iterator. Understanding how these patterns enhance flexibility, encapsulate algorithms, and promote loose coupling.</p>
<h3>Module Design Pattern:</h3>
<p>Understanding the Module design pattern, which promotes encapsulation and organization of code in JavaScript. Exploring different variations of the Module pattern, including the Revealing Module pattern and the ES6 Module syntax. Discussing how the Module pattern improves code structure and supports modular development.</p>
<h3>MVC and MVVM Architectural Patterns:</h3>
<p>Exploring the Model-View-Controller (MVC) and Model-View-ViewModel (MVVM) architectural patterns. Understanding their roles in separating concerns, organizing code, and improving maintainability. Discussing how these patterns are implemented in JavaScript frameworks such as Angular and React.</p>
<h3>Design Pattern Selection and Implementation:</h3>
<p>Guidelines for selecting appropriate design patterns based on the requirements of the application. Discussing factors such as scalability, maintainability, and complexity. Understanding how to implement design patterns effectively in JavaScript projects and when to adapt or combine patterns.</p>
<h3>Design Patterns and Modern JavaScript:</h3>
<p>Exploring the integration of design patterns with modern JavaScript features and frameworks. Discussing the use of design patterns in conjunction with ES6+ syntax, functional programming, and popular JavaScript libraries. Understanding how design patterns can be applied in real-world scenarios.</p>
<h3>Design Patterns Best Practices:</h3>
<p>Discussing best practices when working with design patterns in JavaScript. Understanding the importance of code readability, modularity, and documentation. Exploring techniques to test and refactor code that utilizes design patterns.</p>', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 9: Testing and Debugging JavaScript Code', 'In Lesson 9, we will dive into testing and debugging JavaScript code. Testing is a crucial part of the software development process, ensuring that our code functions correctly and meets the desired requirements. Debugging helps us identify and fix issues in our code to improve its performance and reliability. We will explore various testing techniques and debugging tools available for JavaScript.', '<h3>Importance of Testing and Debugging:</h3>
<p>Understanding the significance of testing and debugging in the software development lifecycle. Explaining the benefits of thorough testing and effective debugging for producing high-quality JavaScript code.</p>
<h3>Types of Testing:</h3>
<p>Exploring different types of testing for JavaScript code. Discussing unit testing, integration testing, and end-to-end testing. Understanding their purposes, advantages, and common testing frameworks and libraries used in JavaScript.</p>
<h3>Unit Testing with Jest:</h3>
<p>Introduction to unit testing in JavaScript using the Jest testing framework. Explaining the basics of unit testing, writing test cases, and performing assertions. Demonstrating the setup and configuration of Jest for testing JavaScript code.</p>
<h3>Test-Driven Development (TDD):</h3>
<p>Understanding the Test-Driven Development (TDD) approach for writing tests before writing code. Exploring the benefits of TDD in improving code quality, modularity, and maintainability. Discussing the TDD workflow and its application in JavaScript projects.</p>
<h3>Integration Testing:</h3>
<p>Exploring integration testing techniques for JavaScript applications. Discussing the testing of interactions between different components and modules. Understanding tools and frameworks like Cypress and Selenium for performing integration testing.</p>
<h3>End-to-End Testing:</h3>
<p>Understanding end-to-end testing in JavaScript applications. Exploring frameworks such as Puppeteer and Cypress for simulating user interactions and testing the entire application workflow. Discussing the benefits and challenges of end-to-end testing.</p>
<h3>Debugging Tools and Techniques:</h3>
<p>Introduction to debugging JavaScript code using browser developer tools. Exploring breakpoints, stepping through code, inspecting variables, and using the console for debugging. Discussing debugging techniques for identifying and fixing common JavaScript errors and issues.</p>
<h3>Error Handling and Logging:</h3>
<p>Understanding error handling techniques in JavaScript. Exploring error types, try-catch blocks, and error objects. Discussing logging and error reporting tools for capturing and analyzing runtime errors in JavaScript applications.</p>
<h3>Performance Profiling and Optimization:</h3>
<p>Exploring techniques for profiling and optimizing JavaScript code for better performance. Discussing tools like Chrome DevTools and performance monitoring libraries for analyzing code execution, identifying bottlenecks, and optimizing performance.</p>
<h3>Automated Testing and Continuous Integration:</h3>
<p>Understanding the concept of automated testing and its integration with Continuous Integration (CI) pipelines. Exploring CI/CD tools and frameworks like Jenkins and Travis CI for automating testing and ensuring code quality.</p>
<h3>Best Practices for Testing and Debugging:</h3>
<p>Discussing best practices for effective testing and debugging in JavaScript. Understanding code coverage, writing meaningful test cases, organizing test suites, and maintaining test code. Exploring strategies for efficient debugging and bug fixing.</p>', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 10: JavaScript Performance Optimization', 'In Lesson 10, we will focus on JavaScript performance optimization techniques. Optimizing the performance of our JavaScript code is crucial for delivering fast and responsive web applications. We will explore various strategies and best practices to improve the execution speed and efficiency of our JavaScript programs.', '<h3>Introduction to Performance Optimization:</h3>
<p>Understanding the importance of performance optimization in JavaScript development. Explaining how optimized code can enhance the user experience and improve overall application performance.</p>
<h3>Identifying Performance Bottlenecks:</h3>
<p>Exploring common performance bottlenecks in JavaScript code. Discussing factors that can impact performance, such as inefficient algorithms, excessive memory usage, and excessive DOM manipulation.</p>
<h3>Measuring Performance:</h3>
<p>Understanding how to measure the performance of JavaScript code. Exploring tools and techniques for profiling and benchmarking code execution, including the use of browser developer tools and performance monitoring libraries.</p>
<h3>Optimizing Code Execution:</h3>
<p>Exploring techniques for optimizing code execution in JavaScript. Discussing strategies such as reducing unnecessary computations, optimizing loops and conditionals, and minimizing function calls.</p>
<h3>Memory Management and Garbage Collection:</h3>
<p>Understanding memory management in JavaScript and the role of the garbage collector. Exploring techniques for optimizing memory usage, including managing object lifecycles, minimizing memory leaks, and using efficient data structures.</p>
<h3>Optimizing DOM Manipulation:</h3>
<p>Exploring strategies for optimizing DOM manipulation in JavaScript. Discussing techniques such as minimizing DOM queries, using document fragments, and leveraging browser reflow and repaint optimizations.</p>
<h3>Network Performance Optimization:</h3>
<p>Understanding techniques for optimizing network performance in JavaScript applications. Discussing strategies such as minimizing HTTP requests, compressing and caching resources, and lazy loading of assets.</p>
<h3>Optimizing JavaScript Frameworks and Libraries:</h3>
<p>Exploring techniques for optimizing JavaScript frameworks and libraries. Discussing approaches such as code splitting, lazy loading, and tree shaking to reduce bundle size and improve application performance.</p>
<h3>Browser Rendering and Layout Optimization:</h3>
<p>Understanding the rendering and layout process in web browsers. Exploring techniques for optimizing browser rendering, including reducing reflows and repaints, optimizing CSS animations, and using hardware acceleration.</p>
<h3>Mobile Performance Optimization:</h3>
<p>Exploring strategies for optimizing JavaScript performance on mobile devices. Discussing techniques such as responsive design, adaptive images, and minimizing battery consumption.</p>
<h3>Testing and Monitoring Performance:</h3>
<p>Discussing the importance of testing and monitoring performance optimizations. Exploring tools and techniques for performance testing, A/B testing, and continuous performance monitoring to ensure long-term performance improvements.</p>
<h3>Best Practices for Performance Optimization:</h3>
<p>Summarizing best practices for JavaScript performance optimization. Discussing the importance of benchmarking, prioritizing optimizations, and maintaining a balance between performance and code readability/maintainability.</p>', 4);

-- Insert statements for the quizzes
INSERT INTO quizzes (title, description, lesson_id)
VALUES ('Introduction to JavaScript', 'This quiz will test your understanding of the basics of JavaScript.', 1),
('Variables and Data Types', 'This quiz will assess your knowledge of variables and data types in JavaScript.', 2),
('Operators and Expressions', 'This quiz will evaluate your understanding of JavaScript operators and expressions.', 3),
('Control Flow and Conditional Statements', 'This quiz will test your comprehension of control flow and conditional statements in JavaScript.', 4),
('Loops and Iteration', 'This quiz will examine your knowledge of JavaScript loops and iteration.', 5),
('Functions and Scope', 'This quiz will assess your understanding of JavaScript functions and scope.', 6),
('Arrays and Objects', 'This quiz will evaluate your comprehension of JavaScript arrays and objects.', 7),
('Working with DOM', 'This quiz will test your knowledge of JavaScript DOM manipulation.', 8),
('Events and Event Handling', 'This quiz will examine your understanding of JavaScript events and event handling.', 9),
('Introduction to Asynchronous Programming', 'This quiz will assess your knowledge of asynchronous programming using Promises in JavaScript.', 10);

INSERT INTO quizzes (title, description, lesson_id)
VALUES ('Introduction to HTML', 'This quiz will test your understanding of the basics of HTML.', 11),
('HTML Document Structure', 'This quiz will assess your knowledge of HTML document structure and elements.', 12),
('HTML Tags and Elements', 'This quiz will evaluate your comprehension of HTML tags and elements.', 13),
('Text Formatting and Structure', 'This quiz will test your understanding of HTML text formatting and structure.', 14),
('Links and Anchor Tags', 'This quiz will examine your knowledge of HTML links and anchor tags.', 15),
('Images and Multimedia', 'This quiz will assess your understanding of HTML image and multimedia elements.', 16),
('Lists and Tables', 'This quiz will evaluate your comprehension of HTML lists and tables.', 17),
('Forms and Input Elements', 'This quiz will test your knowledge of HTML forms and input elements.', 18),
('Semantic HTML', 'This quiz will examine your understanding of semantic HTML.', 19),
('HTML5 Features and APIs', 'This quiz will assess your knowledge of HTML5 features and APIs.', 20);

INSERT INTO quizzes (title, description, lesson_id)
VALUES ('Introduction to CSS', 'This quiz will test your understanding of the basics of CSS.', 21),
('CSS Syntax and Selectors', 'This quiz will assess your knowledge of CSS syntax and selectors.', 22),
('CSS Box Model and Layout', 'This quiz will evaluate your comprehension of the CSS box model and layout techniques.', 23),
('CSS Typography and Fonts', 'This quiz will test your understanding of CSS typography and working with fonts.', 24),
('CSS Colors and Backgrounds', 'This quiz will examine your knowledge of CSS colors and backgrounds.', 25),
('CSS Borders and Shadows', 'This quiz will assess your comprehension of CSS borders and shadows.', 26),
('CSS Layout Techniques', 'This quiz will test your knowledge of CSS layout techniques including floats, flexbox, and grid.', 27),
('CSS Transitions and Animations', 'This quiz will evaluate your understanding of CSS transitions and animations.', 28),
('Responsive Web Design with CSS', 'This quiz will examine your knowledge of responsive web design principles using CSS.', 29),
('CSS Best Practices and Optimization', 'This quiz will assess your knowledge of CSS best practices and optimization techniques.', 30);

INSERT INTO quizzes (title, description, lesson_id)
VALUES ('Quiz: Advanced Functions and Closures', 'This quiz will test your understanding of advanced concepts related to functions and closures in JavaScript.', 31),
('Prototypes and Inheritance', 'This quiz will assess your knowledge of prototypes and inheritance in JavaScript.', 32),
('Error Handling and Debugging', 'This quiz will evaluate your comprehension of error handling and debugging techniques in JavaScript.', 33),
('Working with JSON and APIs', 'This quiz will test your understanding of working with JSON data and utilizing APIs in JavaScript.', 34),
('ES6+ Features and Syntax', 'This quiz will examine your knowledge of ES6+ features and syntax in JavaScript.', 35),
('Modules and Module Bundlers', 'This quiz will assess your comprehension of JavaScript modules and module bundlers.', 36),
('Promises and Async/Await', 'This quiz will test your knowledge of promises and async/await in JavaScript.', 37),
('JavaScript Design Patterns', 'This quiz will evaluate your understanding of common design patterns in JavaScript.', 38),
('Testing and Debugging JavaScript Code', 'This quiz will examine your knowledge of testing and debugging techniques for JavaScript code.', 39),
('JavaScript Performance Optimization', 'This quiz will assess your knowledge of performance optimization techniques for JavaScript.', 40);

-- Insert statements for the questions
INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is JavaScript primarily used for?', 1),
    ('Question 2', 'What is the purpose of a variable in JavaScript?', 1),
    ('Question 3', 'What are the two types of data types in JavaScript?', 1);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'How do you declare a variable in JavaScript?', 2),
    ('Question 2', 'What is the difference between var, let, and const?', 2),
    ('Question 3', 'What is the data type of the value 42 in JavaScript?', 2);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is the result of the expression 5 + 2 * 3?', 3),
    ('Question 2', 'What is the logical operator for "OR" in JavaScript?', 3),
    ('Question 3', 'What does the modulo operator (%) do in JavaScript?', 3);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'How do you write an if statement in JavaScript?', 4),
    ('Question 2', 'What is the purpose of the switch statement?', 4),
    ('Question 3', 'What is the syntax for the ternary operator in JavaScript?', 4);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is the difference between a while loop and a for loop?', 5),
    ('Question 2', 'How do you break out of a loop in JavaScript?', 5),
    ('Question 3', 'What is the purpose of the continue statement in a loop?', 5);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'How do you define a function in JavaScript?', 6),
    ('Question 2', 'What is the difference between a parameter and an argument?', 6),
    ('Question 3', 'What is the scope of a variable defined inside a function?', 6);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'How do you access an element in an array?', 7),
    ('Question 2', 'What is the difference between an array and an object in JavaScript?', 7),
    ('Question 3', 'How do you add a new property to an object in JavaScript?', 7);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is the purpose of the DOM in web development?', 8),
    ('Question 2', 'How do you select an element by its ID in JavaScript?', 8),
    ('Question 3', 'What is the method used to create a new element in the DOM?', 8);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is an event in JavaScript?', 9),
    ('Question 2', 'How do you add an event listener to an element in JavaScript?', 9),
    ('Question 3', 'What is event propagation in JavaScript?', 9);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is asynchronous programming?', 10),
    ('Question 2', 'What are promises in JavaScript?', 10),
    ('Question 3', 'What is the purpose of async/await in JavaScript?', 10);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What does HTML stand for?', 11),
    ('Question 2', 'Which tag is used to define a paragraph in HTML?', 11),
    ('Question 3', 'What is the correct way to create a hyperlink in HTML?', 11);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is the purpose of the <!DOCTYPE> declaration in HTML?', 12),
    ('Question 2', 'Which tag is used to define the title of an HTML document?', 12),
    ('Question 3', 'What is the correct way to add a comment in HTML?', 12);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is the purpose of the <h1> to <h6> tags in HTML?', 13),
    ('Question 2', 'Which HTML tag is used to create an unordered list?', 13),
    ('Question 3', 'What is the correct way to insert an image in HTML?', 13);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'Which tag is used to emphasize text in HTML?', 14),
    ('Question 2', 'What is the purpose of the <blockquote> tag in HTML?', 14),
    ('Question 3', 'What is the correct way to create a line break in HTML?', 14);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is the attribute used to specify the target URL of a link in HTML?', 15),
    ('Question 2', 'What is the purpose of the <a> tag in HTML?', 15),
    ('Question 3', 'What is the correct way to create an email link in HTML?', 15);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is the attribute used to specify the source of an image in HTML?', 16),
    ('Question 2', 'What is the purpose of the <audio> tag in HTML?', 16),
    ('Question 3', 'What is the correct way to embed a video in HTML?', 16);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is the purpose of the <ul> tag in HTML?', 17),
    ('Question 2', 'Which HTML tag is used to create a table header?', 17),
    ('Question 3', 'What is the correct way to add a caption to an HTML table?', 17);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'Which attribute is used to specify the type of an input field in HTML?', 18),
    ('Question 2', 'What is the purpose of the <textarea> tag in HTML?', 18),
    ('Question 3', 'What is the correct way to create a checkbox in HTML?', 18);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is the purpose of semantic HTML?', 19),
    ('Question 2', 'Which HTML tag is used to define a section of a web page?', 19),
    ('Question 3', 'What is the correct way to mark up a navigation menu in HTML?', 19);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What are some key features introduced in HTML5?', 20),
    ('Question 2', 'What is the purpose of the HTML5 Canvas element?', 20),
    ('Question 3', 'How can you access geolocation information using HTML5?', 20);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What does CSS stand for?', 21),
    ('Question 2', 'How do you link an external CSS file to an HTML document?', 21),
    ('Question 3', 'What is the purpose of CSS selectors?', 21);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is the syntax for selecting elements by their class in CSS?', 22),
    ('Question 2', 'What are some commonly used CSS selectors?', 22),
    ('Question 3', 'What is the difference between an ID selector and a class selector in CSS?', 22);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is the CSS box model?', 23),
    ('Question 2', 'What are the properties that affect the layout of elements in CSS?', 23),
    ('Question 3', 'How do you control the positioning of elements using CSS?', 23);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'How do you specify the font family in CSS?', 24),
    ('Question 2', 'What are some commonly used CSS properties for controlling typography?', 24),
    ('Question 3', 'What is the difference between serif and sans-serif fonts?', 24);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'How do you specify colors in CSS?', 25),
    ('Question 2', 'What are some commonly used CSS properties for working with colors?', 25),
    ('Question 3', 'How do you add a background image to an element in CSS?', 25);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'How do you create a border around an element in CSS?', 26),
    ('Question 2', 'What are some commonly used CSS properties for adding shadows to elements?', 26),
    ('Question 3', 'How do you control the border radius of an element in CSS?', 26);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'How do you create a grid layout in CSS using the grid system?', 27),
    ('Question 2', 'What are the different layout techniques in CSS, and when would you use each one?', 27),
    ('Question 3', 'How do you align elements using flexbox in CSS?', 27);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What are CSS transitions and how do they work?', 28),
    ('Question 2', 'How do you create a simple animation in CSS?', 28),
    ('Question 3', 'What are some commonly used CSS properties for animating elements?', 28);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is responsive web design?', 29),
    ('Question 2', 'How do you create a responsive layout using CSS media queries?', 29),
    ('Question 3', 'What are some techniques for making images and media elements responsive?', 29);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What are some best practices for organizing and structuring CSS code?', 30),
    ('Question 2', 'How do you optimize CSS for performance?', 30),
    ('Question 3', 'What are some tools and techniques for debugging CSS issues?', 30);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is a closure in JavaScript?', 31),
    ('Question 2', 'What are higher-order functions in JavaScript?', 31),
    ('Question 3', 'How do you create a curried function in JavaScript?', 31);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is the prototype chain in JavaScript?', 32),
    ('Question 2', 'How do you create inheritance in JavaScript using prototypes?', 32),
    ('Question 3', 'What are some commonly used built-in objects and their prototypes in JavaScript?', 32);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What are some common types of JavaScript errors?', 33),
    ('Question 2', 'How do you handle errors in JavaScript?', 33),
    ('Question 3', 'What are some debugging techniques in JavaScript?', 33);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is JSON and how is it used in JavaScript?', 34),
    ('Question 2', 'How do you make HTTP requests to APIs in JavaScript?', 34),
    ('Question 3', 'What are some common data formats used in API responses?', 34);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What are some new features introduced in ES6?', 35),
    ('Question 2', 'How do you use arrow functions in JavaScript?', 35),
    ('Question 3', 'What is destructuring and how is it used in JavaScript?', 35);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What are JavaScript modules and how are they used?', 36),
    ('Question 2', 'How do you import and export modules in JavaScript?', 36),
    ('Question 3', 'What are some popular module bundlers for JavaScript?', 36);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is a promise in JavaScript?', 37),
    ('Question 2', 'How do you use async/await in JavaScript?', 37),
    ('Question 3', 'What are some methods for handling multiple promises in JavaScript?', 37);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What are design patterns in JavaScript?', 38),
    ('Question 2', 'What is the Observer pattern and how is it used in JavaScript?', 38),
    ('Question 3', 'What is the Singleton pattern and how is it used in JavaScript?', 38);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What is unit testing and how is it used in JavaScript?', 39),
    ('Question 2', 'What are some popular JavaScript testing frameworks?', 39),
    ('Question 3', 'How do you debug JavaScript code using browser developer tools?', 39);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Question 1', 'What are some common performance bottlenecks in JavaScript?', 40),
    ('Question 2', 'How do you optimize JavaScript code for better performance?', 40),
    ('Question 3', 'What are some techniques for minimizing JavaScript file size?', 40);


-- Insert statements for the question options
INSERT INTO options (content, question_id)
VALUES
    ('A scripting language used for client-side web development.', 1),
    ('A database management system for storing and retrieving data.', 1),
    ('A programming language primarily used for server-side development.', 1),
    ('A markup language used for structuring web pages.', 1);

INSERT INTO options (content, question_id)
VALUES
    ('To store and manipulate data in memory.', 2),
    ('To control the flow of execution in a program.', 2),
    ('To apply styling and layout to web pages.', 2),
    ('To handle user interactions and events.', 2);

INSERT INTO options (content, question_id)
VALUES
    ('Primitive and reference types.', 3),
    ('Numbers and strings.', 3),
    ('Boolean and undefined types.', 3),
    ('Objects and arrays.', 3);

INSERT INTO options (content, question_id)
VALUES
    ('x = 5;', 4),
    ('int x = 5;', 4),
    ('string x = "5";', 4),
    ('let x = 5;', 4);

INSERT INTO options (content, question_id)
VALUES
    ('var creates a variable with function scope, let creates a block-scoped variable, and const creates a read-only variable.', 5),
    ('var creates a variable with block scope, let creates a function-scoped variable, and const creates a mutable variable.', 5),
    ('var creates a variable that cannot be reassigned, let creates a block-scoped variable, and const creates a variable with function scope.', 5),
    ('var creates a variable with function scope, let creates a mutable variable, and const creates a read-only variable.', 5);

INSERT INTO options (content, question_id)
VALUES
    ('String', 6),
    ('Number', 6),
    ('Boolean', 6),
    ('Undefined', 6);

INSERT INTO options (content, question_id)
VALUES
    ('11', 7),
    ('21', 7),
    ('17', 7),
    ('None of the above', 7);

INSERT INTO options (content, question_id)
VALUES
    ('&&', 8),
    ('||', 8),
    ('!', 8),
    ('??', 8);

INSERT INTO options (content, question_id)
VALUES
    ('Returns the remainder of a division operation', 9),
    ('Performs exponentiation', 9),
    ('Checks if two values are equal', 9),
    ('Converts a value to a string', 9);

INSERT INTO options (content, question_id)
VALUES
    ('if (condition) { // code block }', 10),
    ('if condition { // code block }', 10),
    ('if { condition // code block }', 10),
    ('if [condition] { // code block }', 10);

INSERT INTO options (content, question_id)
VALUES
    ('To perform different actions based on different conditions', 11),
    ('To perform asynchronous operations', 11),
    ('To handle errors in the code', 11),
    ('To define CSS styles for elements', 11);

INSERT INTO options (content, question_id)
VALUES
    ('condition ? expression1 : expression2', 12),
    ('expression1 ? expression2 : condition', 12),
    ('expression1 ? condition : expression2', 12),
    ('condition ? expression2 : expression1', 12);

INSERT INTO options (content, question_id)
VALUES
    ('A while loop executes a block of code while a condition is true, whereas a for loop executes a block of code for a specific number of times.', 13),
    ('A while loop is used for iterating over an array, whereas a for loop is used for iterating over an object.', 13),
    ('A while loop is a type of loop used for asynchronous operations, whereas a for loop is used for synchronous operations.', 13),
    ('A while loop is used for handling errors, whereas a for loop is used for event handling.', 13);

INSERT INTO options (content, question_id)
VALUES
    ('break', 14),
    ('exit', 14),
    ('stop', 14),
    ('end', 14);

INSERT INTO options (content, question_id)
VALUES
    ('The continue statement is used to skip the current iteration of a loop and move to the next iteration.', 15),
    ('The continue statement is used to terminate the loop and exit out of it.', 15),
    ('The continue statement is used to pause the execution of a loop and resume it later.', 15),
    ('The continue statement is used to reverse the order of loop iterations.', 15);

INSERT INTO options (content, question_id)
VALUES
    ('function myFunction() { }', 16),
    ('def myFunction():', 16),
    ('void myFunction() { }', 16),
    ('myFunction = int() { }', 16);

INSERT INTO options (content, question_id)
VALUES
    ('A parameter is a variable defined in the function declaration, whereas an argument is the actual value passed to the function.', 17),
    ('A parameter is a value passed to the function, whereas an argument is a variable defined in the function declaration.', 17),
    ('A parameter is used for function overloading, whereas an argument is used for function overriding.', 17),
    ('A parameter is required for function calls, whereas an argument is optional.', 17);

INSERT INTO options (content, question_id)
VALUES
    ('The scope of a variable defined inside a function is limited to that function and cannot be accessed outside.', 18),
    ('The scope of a variable defined inside a function is global and can be accessed from anywhere in the program.', 18),
    ('The scope of a variable defined inside a function is limited to the block where it is defined.', 18),
    ('The scope of a variable defined inside a function is determined by the data type of the variable.', 18);

INSERT INTO options (content, question_id)
VALUES
    ('By using square brackets and providing the index of the element.', 19),
    ('By using parentheses and providing the index of the element.', 19),
    ('By using curly braces and providing the index of the element.', 19),
    ('By using angle brackets and providing the index of the element.', 19);

INSERT INTO options (content, question_id)
VALUES
    ('An array is an unordered collection of values, whereas an object is an unordered collection of key-value pairs.', 20),
    ('An array is an unordered collection of values, whereas an object is an ordered collection of key-value pairs.', 20),
    ('An array can only store primitive data types, whereas an object can store any data type.', 20),
    ('An array can only have numeric indices, whereas an object can have string or numeric keys.', 20);

INSERT INTO options (content, question_id)
VALUES
    ('By using dot notation or bracket notation and assigning a value to a new property.', 21),
    ('By using the "addProperty" method and providing the property name and value.', 21),
    ('By using the "setProperty" function and passing the object and the new property as arguments.', 21),
    ('By using the "extend" keyword followed by the property name and value.', 21);

INSERT INTO options (content, question_id)
VALUES
    ('To manipulate and interact with the structure and content of a web page.', 22),
    ('To style and format the elements of a web page.', 22),
    ('To manage the network requests and responses in a web application.', 22),
    ('To perform complex calculations and computations in JavaScript.', 22);

INSERT INTO options (content, question_id)
VALUES
    ('By using the getElementById() function and providing the ID of the element as an argument.', 23),
    ('By using the querySelector() function and providing the class of the element as a selector.', 23),
    ('By using the selectElement() method and passing the ID of the element as a parameter.', 23),
    ('By using the findElement() function and specifying the ID of the element.', 23);

INSERT INTO options (content, question_id)
VALUES
    ('createNode()', 24),
    ('createElement()', 24),
    ('addNode()', 24),
    ('appendElement()', 24);

INSERT INTO options (content, question_id)
VALUES
    ('An action or occurrence that happens on a web page, such as a button click or page load.', 25),
    ('A function that is executed asynchronously in JavaScript.', 25),
    ('A variable that stores data asynchronously in JavaScript.', 25),
    ('A type of error that occurs during asynchronous programming in JavaScript.', 25);

INSERT INTO options (content, question_id)
VALUES
    ('By using the addEventListener() method and specifying the event type and the callback function.', 26),
    ('By using the attachEvent() method and providing the event type and the callback function.', 26),
    ('By using the setEventListener() function and passing the event type and the callback function.', 26),
    ('By using the bindEvent() function and specifying the event type and the callback function.', 26);

INSERT INTO options (content, question_id)
VALUES
    ('The process of capturing and handling events in the order they occur, from the innermost to the outermost element.', 27),
    ('The process of canceling an event and preventing it from further propagation.', 27),
    ('The process of triggering an event manually using JavaScript code.', 27),
    ('The process of attaching multiple event listeners to a single element.', 27);

INSERT INTO options (content, question_id)
VALUES
    ('A programming paradigm that allows multiple tasks to be executed concurrently.', 28),
    ('A programming technique that allows tasks to be executed in a specific order.', 28),
    ('A programming pattern that eliminates the need for callbacks in JavaScript.', 28),
    ('A programming approach that handles tasks that may take some time to complete.', 28);

INSERT INTO options (content, question_id)
VALUES
    ('Objects that represent the eventual completion or failure of an asynchronous operation and its resulting value.', 29),
    ('A type of function in JavaScript that is executed asynchronously.', 29),
    ('A data structure used to store multiple values in JavaScript.', 29),
    ('A method for handling errors in asynchronous programming in JavaScript.', 29);

INSERT INTO options (content, question_id)
VALUES
    ('To simplify the syntax and improve the readability of asynchronous code.', 30),
    ('To handle errors and exceptions that may occur during asynchronous operations.', 30),
    ('To control the flow of asynchronous code and make it look more like synchronous code.', 30),
    ('To optimize the performance of asynchronous operations in JavaScript.', 30);

INSERT INTO options (content, question_id)
VALUES
    ('Hypertext Markup Language', 31),
    ('Hyperlink and Text Markup Language', 31),
    ('Home Text Markup Language', 31),
    ('Hypertext Modern Language', 31);

INSERT INTO options (content, question_id)
VALUES
    ('<p>', 32),
    ('<par>', 32),
    ('<para>', 32),
    ('<paragraph>', 32);

INSERT INTO options (content, question_id)
VALUES
    ('<a href="https://www.example.com">Example</a>', 33),
    ('<link url="https://www.example.com">Example</link>', 33),
    ('<hyperlink src="https://www.example.com">Example</hyperlink>', 33),
    ('<a src="https://www.example.com">Example</a>', 33);

INSERT INTO options (content, question_id)
VALUES
    ('It specifies the HTML version being used', 34),
    ('It defines the document type', 34),
    ('It declares the character encoding for the document', 34),
    ('It indicates the browser to render the page in standards mode', 34);

INSERT INTO options (content, question_id)
VALUES
    ('<title>', 35),
    ('<head>', 35),
    ('<h1>', 35),
    ('<header>', 35);

INSERT INTO options (content, question_id)
VALUES
    ('<!-- This is a comment -->', 36),
    ('<comment>This is a comment</comment>', 36),
    ('<cmt>This is a comment</cmt>', 36),
    ('<c>This is a comment</c>', 36);

INSERT INTO options (content, question_id)
VALUES
    ('To define headings and subheadings', 37),
    ('To style text in different sizes', 37),
    ('To create paragraphs and text blocks', 37),
    ('To add emphasis and highlight text', 37);

INSERT INTO options (content, question_id)
VALUES
    ('<ul>', 38),
    ('<ol>', 38),
    ('<li>', 38),
    ('<ulist>', 38);

INSERT INTO options (content, question_id)
VALUES
    ('<img src="image.jpg" alt="Description">', 39),
    ('<image src="image.jpg" alt="Description">', 39),
    ('<picture><source srcset="image.jpg" alt="Description"></picture>', 39),
    ('<img href="image.jpg" alt="Description">', 39);

INSERT INTO options (content, question_id)
VALUES
    ('<strong>', 40),
    ('<em>', 40),
    ('<italic>', 40),
    ('<underline>', 40);

INSERT INTO options (content, question_id)
VALUES
    ('To indicate a long quotation', 41),
    ('To highlight important text', 41),
    ('To create a block of code', 41),
    ('To define a section in a document', 41);

INSERT INTO options (content, question_id)
VALUES
    ('<br>', 42),
    ('<lb>', 42),
    ('<break>', 42),
    ('<newline>', 42);

INSERT INTO options (content, question_id)
VALUES
    ('href', 43),
    ('src', 43),
    ('target', 43),
    ('link', 43);

INSERT INTO options (content, question_id)
VALUES
    ('To define a hyperlink', 44),
    ('To insert an image', 44),
    ('To create a table', 44),
    ('To style text', 44);

INSERT INTO options (content, question_id)
VALUES
    ('<a href="mailto:example@example.com">', 45),
    ('<a src="mailto:example@example.com">', 45),
    ('<a target="_blank">', 45),
    ('<a href="email:example@example.com">', 45);

INSERT INTO options (content, question_id)
VALUES
    ('src', 46),
    ('href', 46),
    ('alt', 46),
    ('target', 46);

INSERT INTO options (content, question_id)
VALUES
    ('To embed audio content in a web page', 47),
    ('To define a hyperlink', 47),
    ('To insert an image', 47),
    ('To create a video player', 47);

INSERT INTO options (content, question_id)
VALUES
    ('<video src="video.mp4">', 48),
    ('<video href="video.mp4">', 48),
    ('<video autoplay>', 48),
    ('<video source="video.mp4">', 48);

INSERT INTO options (content, question_id)
VALUES
    ('To create an ordered list', 49),
    ('To create an unordered list', 49),
    ('To create a definition list', 49),
    ('To create a navigation menu', 49);

INSERT INTO options (content, question_id)
VALUES
    ('<th>', 50),
    ('<td>', 50),
    ('<tr>', 50),
    ('<thead>', 50);

INSERT INTO options (content, question_id)
VALUES
    ('<caption>', 51),
    ('<label>', 51),
    ('<summary>', 51),
    ('<title>', 51);

INSERT INTO options (content, question_id)
VALUES
    ('type', 52),
    ('value', 52),
    ('name', 52),
    ('id', 52);

INSERT INTO options (content, question_id)
VALUES
    ('To create a text input area', 53),
    ('To display a message', 53),
    ('To define a hyperlink', 53),
    ('To insert an image', 53);

INSERT INTO options (content, question_id)
VALUES
    ('<input type="checkbox">', 54),
    ('<input type="text">', 54),
    ('<input type="radio">', 54),
    ('<input type="select">', 54);

INSERT INTO options (content, question_id)
VALUES
    ('To provide meaning and structure to web content', 55),
    ('To style web pages', 55),
    ('To create animations', 55),
    ('To add interactivity', 55);

INSERT INTO options (content, question_id)
VALUES
    ('<section>', 56),
    ('<div>', 56),
    ('<span>', 56),
    ('<header>', 56);

INSERT INTO options (content, question_id)
VALUES
    ('<nav>', 57),
    ('<menu>', 57),
    ('<ul>', 57),
    ('<link>', 57);

INSERT INTO options (content, question_id)
VALUES
    ('New semantic elements, audio and video support, and local storage', 58),
    ('Support for JavaScript frameworks, such as React and Angular', 58),
    ('Improved performance for web applications', 58),
    ('Enhanced security features', 58);

INSERT INTO options (content, question_id)
VALUES
    ('To draw graphics and animations programmatically', 59),
    ('To display images', 59),
    ('To embed videos', 59),
    ('To create interactive forms', 59);

INSERT INTO options (content, question_id)
VALUES
    ('Using the Geolocation API', 60),
    ('By accessing the users IP address', 60),
    ('By prompting the user for their location', 60),
    ('By using a third-party geolocation service', 60);

INSERT INTO options (content, question_id)
VALUES
    ('Cascading Style Sheets', 61),
    ('Creative Style Sheets', 61),
    ('Content Styling System', 61),
    ('Coded Style Standards', 61);

INSERT INTO options (content, question_id)
VALUES
    ('Using the <link> tag in the HTML documents head section', 62),
    ('By using the <style> tag directly in the HTML document', 62),
    ('Inline styling within HTML tags', 62),
    ('By including the CSS code within a JavaScript file', 62);

INSERT INTO options (content, question_id)
VALUES
    ('To select HTML elements to apply styles', 63),
    ('To define the structure of a web page', 63),
    ('To add interactivity to web pages', 63),
    ('To handle server-side logic', 63);

INSERT INTO options (content, question_id)
VALUES
    ('.classname', 64),
    ('#idname', 64),
    ('elementname', 64),
    ('[attribute=value]', 64);

INSERT INTO options (content, question_id)
VALUES
    ('Element selector, class selector, ID selector', 65),
    ('Adjacent sibling selector, child selector, attribute selector', 65),
    ('Pseudo-class selector, pseudo-element selector, universal selector', 65),
    ('All of the above', 65);

INSERT INTO options (content, question_id)
VALUES
    ('An ID selector selects an element by its unique ID, while a class selector selects elements with a specific class', 66),
    ('An ID selector is more specific than a class selector', 66),
    ('An ID selector can only be used once in an HTML document, while a class selector can be used multiple times', 66),
    ('All of the above', 66);

INSERT INTO options (content, question_id)
VALUES
    ('A model that describes how elements are laid out on a web page', 67),
    ('A model that describes how colors are applied to elements', 67),
    ('A model that describes the structure of HTML elements', 67),
    ('A model that describes the behavior of elements in response to user interactions', 67);

INSERT INTO options (content, question_id)
VALUES
    ('Width, height, margin, padding', 68),
    ('Font-size, line-height, text-align', 68),
    ('Background-color, color, border', 68),
    ('All of the above', 68);

INSERT INTO options (content, question_id)
VALUES
    ('By using the position property with values like relative, absolute, or fixed', 69),
    ('By using the float property', 69),
    ('By using flexbox or grid layout', 69),
    ('All of the above', 69);

INSERT INTO options (content, question_id)
VALUES
    ('font-family', 70),
    ('text-decoration', 70),
    ('font-weight', 70),
    ('color', 70);

INSERT INTO options (content, question_id)
VALUES
    ('font-size, line-height, letter-spacing', 71),
    ('text-transform, text-align, text-indent', 71),
    ('text-decoration, text-shadow, white-space', 71),
    ('All of the above', 71);

INSERT INTO options (content, question_id)
VALUES
    ('Serif fonts have small decorative lines at the ends of characters, while sans-serif fonts do not', 72),
    ('Serif fonts are more commonly used for headings, while sans-serif fonts are more commonly used for body text', 72),
    ('Serif fonts have a larger x-height, while sans-serif fonts have a smaller x-height', 72),
    ('All of the above', 72);

INSERT INTO options (content, question_id)
VALUES
    ('By using color names like "red" or "blue"', 73),
    ('By using hexadecimal color codes like "#FF0000" or "#0000FF"', 73),
    ('By using RGB or RGBA color values like "rgb(255, 0, 0)" or "rgba(0, 0, 255, 0.5)"', 73),
    ('All of the above', 73);

INSERT INTO options (content, question_id)
VALUES
    ('color, background-color', 74),
    ('border-color, box-shadow', 74),
    ('text-shadow, opacity', 74),
    ('All of the above', 74);

INSERT INTO options (content, question_id)
VALUES
    ('By using the background-image property and specifying the URL of the image', 75),
    ('By using the background-color property and specifying a color value', 75),
    ('By using the background-repeat property to control how the image is repeated', 75),
    ('All of the above', 75);

INSERT INTO options (content, question_id)
VALUES
    ('By using the border property and specifying the width, style, and color of the border', 76),
    ('By using the outline property to create a border around an element', 76),
    ('By using the box-shadow property to add a shadow effect to an element', 76),
    ('All of the above', 76);

INSERT INTO options (content, question_id)
VALUES
    ('box-shadow, text-shadow', 77),
    ('border-shadow, background-shadow', 77),
    ('shadow-color, shadow-opacity', 77),
    ('All of the above', 77);

INSERT INTO options (content, question_id)
VALUES
    ('By using the border-radius property and specifying a value in pixels or percentages', 78),
    ('By using the border-style property and specifying a value like "dotted" or "dashed"', 78),
    ('By using the border-color property and specifying a color value', 78),
    ('All of the above', 78);

INSERT INTO options (content, question_id)
VALUES
    ('By using the display property and setting it to "grid"', 79),
    ('By using the flexbox layout', 79),
    ('By using the float property and clearing floats', 79),
    ('All of the above', 79);

INSERT INTO options (content, question_id)
VALUES
    ('Float layout, grid layout, flexbox layout', 80),
    ('Positioned layout, table layout, multi-column layout', 80),
    ('Responsive layout, fixed layout, fluid layout', 80),
    ('All of the above', 80);

INSERT INTO options (content, question_id)
VALUES
    ('By using the flex-direction property to specify the direction of the flex items', 81),
    ('By using the align-items property to control the vertical alignment of flex items', 81),
    ('By using the justify-content property to control the horizontal alignment of flex items', 81),
    ('All of the above', 81);

INSERT INTO options (content, question_id)
VALUES
    ('CSS transitions are effects that allow smooth property changes over a specified duration.', 82),
    ('CSS transitions are used to create animated GIFs in CSS.', 82),
    ('CSS transitions are used to transition between different HTML pages.', 82),
    ('All of the above', 82);

INSERT INTO options (content, question_id)
VALUES
    ('By using the transition property and specifying the properties to be animated and the duration of the animation', 83),
    ('By using the animation property and specifying keyframes to define the animation', 83),
    ('By using the transform property and applying transformation functions like scale or rotate', 83),
    ('All of the above', 83);

INSERT INTO options (content, question_id)
VALUES
    ('transition-property, transition-duration', 84),
    ('animation-name, animation-duration', 84),
    ('transform-origin, transform-style', 84),
    ('All of the above', 84);

INSERT INTO options (content, question_id)
VALUES
    ('Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.', 85),
    ('Responsive web design is a design style that uses bright colors and large fonts to create an eye-catching layout.', 85),
    ('Responsive web design is a design technique that uses images and videos as background elements.', 85),
    ('All of the above', 85);

INSERT INTO options (content, question_id)
VALUES
    ('By using CSS media queries to apply different styles based on the viewport size or device characteristics', 86),
    ('By using JavaScript to dynamically adjust the layout based on the device type', 86),
    ('By using the viewport meta tag to control the initial scale and dimensions of the page', 86),
    ('All of the above', 86);

INSERT INTO options (content, question_id)
VALUES
    ('By using CSS max-width property to make images and media elements scale down proportionally', 87),
    ('By using CSS object-fit property to control how the image or video fills its container', 87),
    ('By using CSS background-size property to adjust the size of background images', 87),
    ('All of the above', 87);

INSERT INTO options (content, question_id)
VALUES
    ('Organize CSS code into separate files and use a modular approach like SMACSS or BEM', 88),
    ('Use meaningful class and ID names that describe the purpose of the elements', 88),
    ('Minify and concatenate CSS files to reduce file size and improve loading performance', 88),
    ('All of the above', 88);

INSERT INTO options (content, question_id)
VALUES
    ('Reduce the use of complex selectors and avoid unnecessary specificity', 89),
    ('Avoid using inline styles and prioritize external CSS files', 89),
    ('Minimize the use of CSS hacks and vendor prefixes', 89),
    ('All of the above', 89);

INSERT INTO options (content, question_id)
VALUES
    ('Use browser developer tools like Chrome DevTools or Firefox Developer Tools to inspect and debug CSS', 90),
    ('Validate CSS code using tools like CSSLint or Stylelint to catch errors and improve code quality', 90),
    ('Use CSS preprocessors like Sass or Less to leverage advanced features and improve code maintainability', 90),
    ('All of the above', 90);

INSERT INTO options (content, question_id)
VALUES
    ('A closure is a function that has access to its own scope, the scope in which it is defined, and the scopes of its outer functions.', 91),
    ('A closure is an object that encapsulates private data and provides public methods to access and modify that data.', 91),
    ('A closure is a variable that holds the value of the last expression executed in a function.', 91),
    ('All of the above', 91);

INSERT INTO options (content, question_id)
VALUES
    ('Higher-order functions are functions that take other functions as arguments or return functions as results.', 92),
    ('Higher-order functions are functions that have access to their own scope and the scopes of their outer functions.', 92),
    ('Higher-order functions are functions that are defined using arrow function syntax.', 92),
    ('All of the above', 92);

INSERT INTO options (content, question_id)
VALUES
    ('By returning a function from another function, with access to the arguments of the outer function', 93),
    ('By using the bind() method to partially apply arguments to a function', 93),
    ('By using arrow function syntax to create a function with implicit return and access to the enclosing lexical scope', 93),
    ('All of the above', 93);

INSERT INTO options (content, question_id)
VALUES
    ('The prototype chain is the mechanism by which JavaScript objects inherit properties and methods from their prototype objects.', 94),
    ('The prototype chain is a data structure used to store key-value pairs in JavaScript.', 94),
    ('The prototype chain is a set of rules that determine the order of function execution in JavaScript.', 94),
    ('All of the above', 94);

INSERT INTO options (content, question_id)
VALUES
    ('By setting the prototype property of a constructor function to an instance of another object', 95),
    ('By using the extends keyword in a class declaration to inherit from another class', 95),
    ('By using the Object.create() method to create a new object with a specified prototype', 95),
    ('All of the above', 95);

INSERT INTO options (content, question_id)
VALUES
    ('Object, Array, and Function', 96),
    ('Date, Math, and RegExp', 96),
    ('String, Number, and Boolean', 96),
    ('All of the above', 96);

INSERT INTO options (content, question_id)
VALUES
    ('Some common types of JavaScript errors include SyntaxError, ReferenceError, and TypeError.', 97),
    ('Some common types of JavaScript errors include GET, POST, and DELETE.', 97),
    ('Some common types of JavaScript errors include HTML, CSS, and JavaScript.', 97),
    ('All of the above', 97);

INSERT INTO options (content, question_id)
VALUES
    ('By using try...catch statements to catch and handle exceptions', 98),
    ('By using the throw statement to manually throw an exception', 98),
    ('By using the finally block to specify code that will be executed regardless of whether an exception is thrown', 98),
    ('All of the above', 98);

INSERT INTO options (content, question_id)
VALUES
    ('Using console.log() statements to log intermediate values and debug information', 99),
    ('Using breakpoints and stepping through code using browser developer tools', 99),
    ('Using the debugger statement to pause code execution and inspect variables', 99),
    ('All of the above', 99);

INSERT INTO options (content, question_id)
VALUES
    ('JSON (JavaScript Object Notation) is a lightweight data interchange format that is used to store and exchange data.', 100),
    ('JSON is a programming language used to create interactive web pages.', 100),
    ('JSON is a JavaScript method used to parse and manipulate strings.', 100),
    ('All of the above', 100);

INSERT INTO options (content, question_id)
VALUES
    ('By using the fetch() function and its related methods (e.g., then(), catch())', 101),
    ('By using the XMLHttpRequest object and its related methods (e.g., open(), send())', 101),
    ('By including a script tag with the source URL of the API', 101),
    ('All of the above', 101);

INSERT INTO options (content, question_id)
VALUES
    ('Common data formats used in API responses include JSON, XML, and CSV.', 102),
    ('Common data formats used in API responses include HTML, CSS, and JavaScript.', 102),
    ('Common data formats used in API responses include PNG, JPEG, and GIF.', 102),
    ('All of the above', 102);

INSERT INTO options (content, question_id)
VALUES
    ('Arrow functions, template literals, and destructuring', 103),
    ('Classes, async/await, and modules', 103),
    ('Promises, generators, and iterators', 103),
    ('All of the above', 103);

INSERT INTO options (content, question_id)
VALUES
    ('Arrow functions are a shorthand syntax for writing anonymous functions in JavaScript', 104),
    ('Arrow functions are used to define object methods in JavaScript', 104),
    ('Arrow functions are used to create callbacks for asynchronous operations in JavaScript', 104),
    ('All of the above', 104);

INSERT INTO options (content, question_id)
VALUES
    ('Destructuring is a way to extract values from objects or arrays and assign them to variables', 105),
    ('Destructuring is a way to combine multiple objects or arrays into a single object or array', 105),
    ('Destructuring is a way to manipulate the structure of objects or arrays in JavaScript', 105),
    ('All of the above', 105);

INSERT INTO options (content, question_id)
VALUES
    ('JavaScript modules are a way to organize and structure JavaScript code into reusable and independent units', 106),
    ('JavaScript modules are a way to add interactivity and dynamic behavior to web pages', 106),
    ('JavaScript modules are a way to create animations and visual effects in JavaScript', 106),
    ('All of the above', 106);

INSERT INTO options (content, question_id)
VALUES
    ('By using the import and export keywords', 107),
    ('By including a script tag with the source URL of the module', 107),
    ('By using the require() function to import modules', 107),
    ('All of the above', 107);

INSERT INTO options (content, question_id)
VALUES
    ('Some popular module bundlers for JavaScript include Webpack, Rollup, and Parcel', 108),
    ('Some popular module bundlers for JavaScript include Gulp, Grunt, and Browserify', 108),
    ('Some popular module bundlers for JavaScript include Babel, ESLint, and Prettier', 108),
    ('All of the above', 108);

INSERT INTO options (content, question_id)
VALUES
    ('A promise is an object representing the eventual completion or failure of an asynchronous operation', 109),
    ('A promise is a function that takes other functions as arguments or returns functions as results', 109),
    ('A promise is a way to handle errors in JavaScript', 109),
    ('All of the above', 109);

INSERT INTO options (content, question_id)
VALUES
    ('Async/await is a syntactic sugar built on top of promises to make asynchronous code look more synchronous', 110),
    ('Async/await is a way to handle errors in JavaScript', 110),
    ('Async/await is a method for executing JavaScript code in parallel', 110),
    ('All of the above', 110);

INSERT INTO options (content, question_id)
VALUES
    ('Promise.all(), Promise.race(), and Promise.allSettled()', 111),
    ('Promise.resolve() and Promise.reject()', 111),
    ('Promise.prototype.then() and Promise.prototype.catch()', 111),
    ('All of the above', 111);

INSERT INTO options (content, question_id)
VALUES
    ('Design patterns are reusable solutions to common problems in software design and development', 112),
    ('Design patterns are specific programming languages used in JavaScript', 112),
    ('Design patterns are tools for debugging and profiling JavaScript code', 112),
    ('All of the above', 112);

INSERT INTO options (content, question_id)
VALUES
    ('The Observer pattern is a behavioral design pattern that defines a one-to-many dependency between objects', 113),
    ('The Observer pattern is a creational design pattern used to create objects in JavaScript', 113),
    ('The Observer pattern is a structural design pattern that provides a simplified interface to a complex system', 113),
    ('All of the above', 113);

INSERT INTO options (content, question_id)
VALUES
    ('The Singleton pattern is a creational design pattern that ensures a class has only one instance', 114),
    ('The Singleton pattern is a behavioral design pattern that defines a one-to-many dependency between objects', 114),
    ('The Singleton pattern is a structural design pattern that provides a simplified interface to a complex system', 114),
    ('All of the above', 114);

INSERT INTO options (content, question_id)
VALUES
    ('Unit testing is a software testing method where individual units or components of a program are tested', 115),
    ('Unit testing is a method for profiling JavaScript code to optimize performance', 115),
    ('Unit testing is a way to handle errors and exceptions in JavaScript', 115),
    ('All of the above', 115);

INSERT INTO options (content, question_id)
VALUES
    ('Some popular JavaScript testing frameworks include Jest, Mocha, and Jasmine', 116),
    ('Some popular JavaScript testing frameworks include React Testing Library and Enzyme', 116),
    ('Some popular JavaScript testing frameworks include Cypress and Selenium', 116),
    ('All of the above', 116);

INSERT INTO options (content, question_id)
VALUES
    ('You can use the browser developer tools to inspect and debug JavaScript code, set breakpoints, and analyze network activity', 117),
    ('You can use console.log() statements in the JavaScript code to print debug information', 117),
    ('You can use the JavaScript debugger statement to pause the execution of the code', 117),
    ('All of the above', 117);

INSERT INTO options (content, question_id)
VALUES
    ('Some common performance bottlenecks in JavaScript include excessive DOM manipulation, inefficient algorithms, and memory leaks', 118),
    ('Some common performance bottlenecks in JavaScript include syntax errors, undefined variables, and logical errors', 118),
    ('Some common performance bottlenecks in JavaScript include slow network requests, database queries, and file I/O operations', 118),
    ('All of the above', 118);

INSERT INTO options (content, question_id)
VALUES
    ('You can optimize JavaScript code by minimizing the use of global variables, optimizing loops, and avoiding unnecessary function calls', 119),
    ('You can optimize JavaScript code by using shorter variable names and removing comments and whitespace', 119),
    ('You can optimize JavaScript code by increasing the number of external dependencies and using complex data structures', 119),
    ('All of the above', 119);

INSERT INTO options (content, question_id)
VALUES
    ('Some techniques for minimizing JavaScript file size include minification, compression, and lazy loading', 120),
    ('Some techniques for minimizing JavaScript file size include adding comments and whitespace to improve readability', 120),
    ('Some techniques for minimizing JavaScript file size include using complex data structures and increasing the number of dependencies', 120),
    ('All of the above', 120);

-- Insert statements for the question answers
INSERT INTO answers (content, question_id)
VALUES
    ('A scripting language used for client-side web development.', 1),
    ('To store and manipulate data in memory.', 2),
    ('Primitive and reference types.', 3),
    ('let x = 5;', 4),
    ('var creates a variable with function scope, let creates a mutable variable, and const creates a read-only variable.', 5),
    ('Number', 6),
    ('11', 7),
    ('||', 8),
    ('Returns the remainder of a division operation', 9),
    ('if (condition) { // code block}', 10),
    ('To perform different actions based on different conditions', 11),
    ('condition ? expression1 : expression2', 12),
    ('A while loop executes a block of code while a condition is true, whereas a for loop executes a block of code for a specific number of times.', 13),
    ('break', 14),
    ('The continue statement is used to skip the current iteration of a loop and move to the next iteration.', 15),
    ('function myFunction() { }', 16),
    ('A parameter is a variable defined in the function declaration, whereas an argument is the actual value passed to the function.', 17),
    ('The scope of a variable defined inside a function is determined by the data type of the variable.', 18),
    ('By using square brackets and providing the index of the element.', 19),
    ('An array can only have numeric indices, whereas an object can have string or numeric keys.', 20);

INSERT INTO answers (content, question_id)
VALUES
    ('By using dot notation or bracket notation and assigning a value to a new property.', 21),
    ('To manipulate and interact with the structure and content of a web page.', 22),
    ('By using the getElementById() function and providing the ID of the element as an argument.', 23),
    ('createElement()', 24),
    ('An action or occurrence that happens on a web page, such as a button click or page load.', 25),
    ('By using the addEventListener() method and specifying the event type and the callback function.', 26),
    ('The process of capturing and handling events in the order they occur, from the innermost to the outermost element.', 27),
    ('A programming paradigm that allows multiple tasks to be executed concurrently.', 28),
    ('Objects that represent the eventual completion or failure of an asynchronous operation and its resulting value.', 29),
    ('To simplify the syntax and improve the readability of asynchronous code.', 30),
    ('Hypertext Markup Language', 31),
    ('<p>', 32),
    ('<a href="https://www.example.com">Example</a>', 33),
    ('It specifies the HTML version being used', 34),
    ('<title>', 35),
    ('<!-- This is a comment -->', 36),
    ('To define headings and subheadings', 37),
    ('<ul>', 38),
    ('<img src="image.jpg" alt="Description">', 39),
    ('<em>', 40);

    INSERT INTO answers (content, question_id)
VALUES
    ('To indicate a long quotation', 41),
    ('<br>', 42),
    ('href', 43),
    ('To define a hyperlink', 44),
    ('<a href="mailto:example@example.com">', 45),
    ('src', 46),
    ('To embed audio content in a web page', 47),
    ('<video src="video.mp4">', 48),
    ('To create an unordered list', 49),
    ('<th>', 50),
    ('<caption>', 51),
    ('type', 52),
    ('To create a text input area', 53),
    ('<input type="checkbox">', 54),
    ('To provide meaning and structure to web content', 55),
    ('<section>', 56),
    ('<nav>', 57),
    ('New semantic elements, audio and video support, and local storage', 58),
    ('To draw graphics and animations programmatically', 59),
    ('Using the Geolocation API', 60);

INSERT INTO answers (content, question_id)
VALUES
    ('Cascading Style Sheets', 61),
    ('Using the <link> tag in the HTML documents head section', 62),
    ('To select HTML elements to apply styles', 63),
    ('.classname', 64),
    ('All of the above', 65),
    ('All of the above', 66),
    ('A model that describes how elements are laid out on a web page', 67),
    ('Width, height, margin, padding', 68),
    ('All of the above', 69),
    ('font-family', 70),
    ('All of the above', 71),
    ('Serif fonts have small decorative lines at the ends of characters, while sans-serif fonts do not', 72),
    ('All of the above', 73),
    ('All of the above', 74),
    ('By using the background-image property and specifying the URL of the image', 75),
    ('By using the border property and specifying the width, style, and color of the border', 76),
    ('box-shadow, text-shadow', 77),
    ('By using the border-radius property and specifying a value in pixels or percentages', 78),
    ('By using the display property and setting it to "grid"', 79),
    ('All of the above', 80);

INSERT INTO answers (content, question_id)
VALUES
    ('All of the above', 81),
    ('CSS transitions are effects that allow smooth property changes over a specified duration.', 82),
    ('By using the animation property and specifying keyframes to define the animation', 83),
    ('animation-name, animation-duration', 84),
    ('Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.', 85),
    ('By using CSS media queries to apply different styles based on the viewport size or device characteristics', 86),
    ('All of the above', 87),
    ('All of the above', 88),
    ('All of the above', 89),
    ('All of the above', 90),
    ('All of the above', 91),
    ('Higher-order functions are functions that take other functions as arguments or return functions as results.', 92),
    ('By returning a function from another function, with access to the arguments of the outer function', 93),
    ('The prototype chain is the mechanism by which JavaScript objects inherit properties and methods from their prototype objects.', 94),
    ('By setting the prototype property of a constructor function to an instance of another object', 95),
    ('All of the above', 96),
    ('Some common types of JavaScript errors include SyntaxError, ReferenceError, and TypeError.', 97),
    ('All of the above', 98),
    ('All of the above', 99),
    ('JSON (JavaScript Object Notation) is a lightweight data interchange format that is used to store and exchange data.', 100);

INSERT INTO answers (content, question_id)
VALUES
    ('All of the above', 101),
    ('All of the above', 102),
    ('All of the above', 103),
    ('Arrow functions are a shorthand syntax for writing anonymous functions in JavaScript', 104),
    ('Destructuring is a way to extract values from objects or arrays and assign them to variables', 105),
    ('JavaScript modules are a way to organize and structure JavaScript code into reusable and independent units', 106),
    ('By using the import and export keywords', 107),
    ('Some popular module bundlers for JavaScript include Webpack, Rollup, and Parcel', 108),
    ('A promise is an object representing the eventual completion or failure of an asynchronous operation', 109),
    ('Async/await is a syntactic sugar built on top of promises to make asynchronous code look more synchronous', 110),
    ('Promise.all(), Promise.race(), and Promise.allSettled()', 111),
    ('Design patterns are reusable solutions to common problems in software design and development', 112),
    ('The Observer pattern is a behavioral design pattern that defines a one-to-many dependency between objects', 113),
    ('The Singleton pattern is a creational design pattern that ensures a class has only one instance', 114),
    ('Unit testing is a software testing method where individual units or components of a program are tested', 115),
    ('All of the above', 116),
    ('All of the above', 117),
    ('Some common performance bottlenecks in JavaScript include excessive DOM manipulation, inefficient algorithms, and memory leaks', 118),
    ('You can optimize JavaScript code by minimizing the use of global variables, optimizing loops, and avoiding unnecessary function calls', 119),
    ('Some techniques for minimizing JavaScript file size include minification, compression, and lazy loading', 120);