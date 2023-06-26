-- Insert statement for the course
INSERT INTO courses (title, description, topics, difficulty, time_needed, user_id)
VALUES
  ('JavaScript Fundamentals', 'This course is designed to give you the foundational knowledge you need to start using JavaScript', 'Introduction to JavaScript, Variables and Data Types, Operators and Expressions, Control Flow and Conditional Statements, Loop and Iterations, Functions and Scope, Arrays and Objects, Working with DOM(Document Object Model), Events and Event Handling, Introduction to Asynchronous Programming with Promises', 'Beginner', '2 Weeks', 1),
  ('Getting Started with HTML', 'This course is designed to give you the foundational knowledge you need for working with HTML and the Browser.', 'Introduction to HTML, HTML Document Structure, HTML Tags and Elements, Text Formatting and Structure, Links and Anchor Tags, Images and Multimedia, Lists and Tables, Forms and Input Elements, Semantic HTML, HTML5 Features and APIs', 'Intermediate', '2 Weeks', 1),
  ('CSS Basics', 'This course is designed to give you the foundational knowledge you need for working with style systems like Flex-Box and Grid for creating responsive, styled webpages.', 'Introduction to CSS, CSS Syntax and Selectors, CSS Box Model and Layout, CSS Typography and Fonts, CSS Colors and Backgrounds, CSS Borders and Shadows, CSS Layout Techniques (Floats, Flexbox, Grid), CSS Transitions and Animations, Responsive Web Design with CSS, CSS Best Practices and Optimization', 'Beginner', '2 Weeks', 1),
  ('Advanced JavaScript', 'This course is designed to push your knowledge in JavaScript further so you can use advanced techniques and principles when utilizing it in your projects.', 'Advanced Functions and Closures, Prototypes and Inheritance, Error Handling and Debugging, Working with JSON and APIs, ES6+ Features and Syntax, Modules and Module Bundlers, Promises and Async/Await, JavaScript Design Patterns, Testing and Debugging JavaScript Code, JavaScript Performance Optimization', 'Intermediate', '3 weeks', 1);

-- Insert statements for the lessons
INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 1: Introduction to JavaScript', 'JavaScript is a powerful programming language that plays a crucial role in web development. In this lesson, we will provide a brief introduction to JavaScript, explore its features and capabilities, and discuss its importance in enhancing website interactivity and user experience.', '<p>JavaScript is a versatile and powerful programming language that is widely used in web development. It adds interactivity and dynamic functionality to websites, making them more engaging for users. In this lesson, we will provide an overview of JavaScript and discuss its role in web development.</p>
<h3>What is JavaScript?</h3>
<p>JavaScript is a high-level, interpreted programming language that runs in the web browser. It is primarily used for client-side scripting, which means it runs on the user''s device rather than the web server. This allows JavaScript to interact with web pages in real-time, responding to user actions and modifying the content dynamically.</p>
<h3>JavaScript''s Features and Capabilities:</h3>
<span>JavaScript offers a wide range of features and capabilities that make it a powerful tool for web development. Some key features include:</span>
<ul>
<li>Manipulating HTML: JavaScript can interact with HTML elements, modifying their properties, styles, and content. It allows developers to dynamically update the web page based on user input or events.</li>
<li>Handling Events: JavaScript enables developers to handle various user events, such as mouse clicks, keyboard input, and form submissions. This allows websites to respond to user actions and provide a more interactive experience.</li>
<li>Data Manipulation: JavaScript can handle data in different formats, perform calculations, and manipulate data structures like arrays and objects. It provides functions and methods for working with data efficiently.</li>
<li>Asynchronous Operations: JavaScript supports asynchronous programming, allowing tasks to run in the background without blocking the main execution. This is particularly useful when making network requests or handling time-consuming operations.</li>
</ul>
<h3>JavaScript''s Role in Web Development:</h3>
<span>JavaScript plays a vital role in web development by enhancing the functionality and interactivity of websites. Here are some key aspects of JavaScript''s role:</span>
<ul>
<li>Client-Side Scripting: JavaScript is primarily used for client-side scripting, enabling dynamic and interactive features on web pages. It runs directly in the user''s browser, reducing the need for round-trips to the server for every user action.</li>
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

-- TODO: I left off here
INSERT INTO lessons (title, description, content, course_id)
VALUES ('Control Flow and Conditional Statements', '', '', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Loops and Iteration', '', '', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Functions and Scope', '', '', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Arrays and Objects', '', '', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Working with DOM (Document Object Model)', '', '', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Events and Event Handling', '', '', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Introduction to Asynchronous Programming with Promises', '', '', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Introduction to HTML', '', '', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('HTML Document Structure', '', '', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('HTML Tags and Elements', '', '', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Text Formatting and Structure', '', '', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Links and Anchor Tags', '', '', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Images and Multimedia', '', '', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lists and Tables', '', '', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Forms and Input Elements', '', '', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Semantic HTML', '', '', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('HTML5 Features and APIs', '', '', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Introduction to CSS', '', '', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('CSS Syntax and Selectors', '', '', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('CSS Box Model and Layout', '', '', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('CSS Typography and Fonts', '', '', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('CSS Colors and Backgrounds', '', '', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('CSS Borders and Shadows', '', '', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('CSS Layout Techniques (Floats, Flexbox, Grid)', '', '', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('CSS Transitions and Animations', '', '', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Responsive Web Design with CSS', '', '', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('CSS Best Practices and Optimization', '', '', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Advanced Functions and Closures', '', '', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Prototypes and Inheritance', '', '', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Error Handling and Debugging', '', '', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Working with JSON and APIs', '', '', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('ES6+ Features and Syntax', '', '', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Modules and Module Bundlers', '', '', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Promises and Async/Await', '', '', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('JavaScript Design Patterns', '', '', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Testing and Debugging JavaScript Code', '', '', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('JavaScript Performance Optimization', '', '', 4);

-- Insert statements for the quizzes
INSERT INTO quizzes (title, description, lesson_id)
VALUES
  ('Your First Quiz', 'This quiz will test your ability to recollect how to use our platform and navigate through it.', 1),
  ('Second Quiz', 'This quiz will assess your understanding of advanced features in our platform.', 2),
  ('Third Quiz', 'Test your knowledge about the history of our company and its founders.', 3),
  ('Fourth Quiz', 'Check your understanding of our platform\'s security features.', 4),
  ('Fifth Quiz', 'Evaluate your familiarity with our platform\'s collaboration tools.', 5),
  ('Sixth Quiz', 'Assess your knowledge of our platform\'s integrations with other tools.', 6),
  ('Seventh Quiz', 'Test your understanding of our platform\'s data backup and recovery options.', 7),
  ('Eighth Quiz', 'Evaluate your familiarity with our platform\'s notification settings.', 8),
  ('Ninth Quiz', 'Check your understanding of our platform\'s accessibility features.', 9),
  ('Tenth Quiz', 'Assess your knowledge of our platform\'s mobile app functionality.', 10),
  ('Eleventh Quiz', 'Test your understanding of our platform\'s file versioning capabilities.', 11),
  ('Twelfth Quiz', 'Evaluate your familiarity with our platform\'s sharing and permission settings.', 12),
  ('Thirteenth Quiz', 'Check your knowledge of our platform\'s search and filter options.', 13),
  ('Fourteenth Quiz', 'Assess your understanding of our platform\'s file organization features.', 14),
  ('Fifteenth Quiz', 'Test your knowledge of our platform\'s file format compatibility.', 15),
  ('Sixteenth Quiz', 'Evaluate your familiarity with our platform\'s activity tracking and audit logs.', 16),
  ('Seventeenth Quiz', 'Check your understanding of our platform\'s file recovery options.', 17),
  ('Eighteenth Quiz', 'Assess your knowledge of our platform\'s user management capabilities.', 18),
  ('Nineteenth Quiz', 'Test your understanding of our platform\'s folder hierarchy and nesting.', 19),
  ('Twentieth Quiz', 'The final quiz to evaluate your overall learning from this course.', 20);


  INSERT INTO quizzes (title, description, lesson_id)
VALUES
  ('Your First Quiz', 'This quiz will test your ability to recollect how to use our platform and navigate through it.', 21),
  ('Second Quiz', 'This quiz will assess your understanding of advanced features in our platform.', 22),
  ('Third Quiz', 'Test your knowledge about the history of our company and its founders.', 23),
  ('Fourth Quiz', 'Check your understanding of our platform\'s security features.', 24),
  ('Fifth Quiz', 'Evaluate your familiarity with our platform\'s collaboration tools.', 25),
  ('Sixth Quiz', 'Assess your knowledge of our platform\'s integrations with other tools.', 26),
  ('Seventh Quiz', 'Test your understanding of our platform\'s data backup and recovery options.', 27),
  ('Eighth Quiz', 'Evaluate your familiarity with our platform\'s notification settings.', 28),
  ('Ninth Quiz', 'Check your understanding of our platform\'s accessibility features.', 29),
  ('Tenth Quiz', 'Assess your knowledge of our platform\'s mobile app functionality.', 30),
  ('Eleventh Quiz', 'Test your understanding of our platform\'s file versioning capabilities.', 31),
  ('Twelfth Quiz', 'Evaluate your familiarity with our platform\'s sharing and permission settings.', 32),
  ('Thirteenth Quiz', 'Check your knowledge of our platform\'s search and filter options.', 33),
  ('Fourteenth Quiz', 'Assess your understanding of our platform\'s file organization features.', 34),
  ('Fifteenth Quiz', 'Test your knowledge of our platform\'s file format compatibility.', 35),
  ('Sixteenth Quiz', 'Evaluate your familiarity with our platform\'s activity tracking and audit logs.', 36),
  ('Seventeenth Quiz', 'Check your understanding of our platform\'s file recovery options.', 37),
  ('Eighteenth Quiz', 'Assess your knowledge of our platform\'s user management capabilities.', 38),
  ('Nineteenth Quiz', 'Test your understanding of our platform\'s folder hierarchy and nesting.', 39),
  ('Twentieth Quiz', 'The final quiz to evaluate your overall learning from this course.', 40);

-- Insert statements for the questions
INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Your First Question', 'What is the first screen you see when you login to the platform?', 1),
    ('Your Second Question', 'What is the capital of France?', 2),
    ('Your Third Question', 'Who painted the Mona Lisa?', 3),
    ('Your Fourth Question', 'What is the chemical symbol for gold?', 4),
    ('Your Fifth Question', 'What is the largest planet in our solar system?', 5),
    ('Your Sixth Question', 'Who is the author of "To Kill a Mockingbird"?', 6),
    ('Your Seventh Question', 'In which year did World War II end?', 7),
    ('Your Eighth Question', 'What is the formula for water?', 8),
    ('Your Ninth Question', 'What is the square root of 144?', 9),
    ('Your Tenth Question', 'Who discovered penicillin?', 10),
    ('Your Eleventh Question', 'What is the tallest mountain in the world?', 11),
    ('Your Twelfth Question', 'What is the primary language spoken in Brazil?', 12),
    ('Your Thirteenth Question', 'Who is the current President of the United States?', 13),
    ('Your Fourteenth Question', 'What is the symbol for the element oxygen?', 14),
    ('Your Fifteenth Question', 'What is the freezing point of water in Celsius?', 15),
    ('Your Sixteenth Question', 'Who wrote the play "Hamlet"?', 16),
    ('Your Seventeenth Question', 'What is the largest ocean on Earth?', 17),
    ('Your Eighteenth Question', 'What is the chemical formula for table salt?', 18),
    ('Your Nineteenth Question', 'How many planets are in our solar system?', 19),
    ('Your Twentieth Question', 'Who painted "Starry Night"?', 20);

INSERT INTO questions (title, content, quiz_id)
VALUES
    ('Your First Question', 'What is the first screen you see when you login to the platform?', 21),
    ('Your Second Question', 'What is the capital of France?', 22),
    ('Your Third Question', 'Who painted the Mona Lisa?', 23),
    ('Your Fourth Question', 'What is the chemical symbol for gold?', 24),
    ('Your Fifth Question', 'What is the largest planet in our solar system?', 25),
    ('Your Sixth Question', 'Who is the author of "To Kill a Mockingbird"?', 26),
    ('Your Seventh Question', 'In which year did World War II end?', 27),
    ('Your Eighth Question', 'What is the formula for water?', 28),
    ('Your Ninth Question', 'What is the square root of 144?', 29),
    ('Your Tenth Question', 'Who discovered penicillin?', 30),
    ('Your Eleventh Question', 'What is the tallest mountain in the world?', 31),
    ('Your Twelfth Question', 'What is the primary language spoken in Brazil?', 32),
    ('Your Thirteenth Question', 'Who is the current President of the United States?', 33),
    ('Your Fourteenth Question', 'What is the symbol for the element oxygen?', 34),
    ('Your Fifteenth Question', 'What is the freezing point of water in Celsius?', 35),
    ('Your Sixteenth Question', 'Who wrote the play "Hamlet"?', 36),
    ('Your Seventeenth Question', 'What is the largest ocean on Earth?', 37),
    ('Your Eighteenth Question', 'What is the chemical formula for table salt?', 38),
    ('Your Nineteenth Question', 'How many planets are in our solar system?', 39),
    ('Your Twentieth Question', 'Who painted "Starry Night"?', 40);

-- Insert statements for the question options
INSERT INTO options (content, question_id)
VALUES
  ('A 404 screen with customized error message.', 1),
  ('A 500 Internal Server Error screen with detailed error description.', 1),
  ('An animated login screen with social media integration.', 2),
  ('A dynamic homepage showcasing trending content.', 2),
  ('Welcome Aboard screen with personalized greeting.', 3),
  ('User Dashboard screen with real-time data visualization.', 3),
  ('A contact form with CAPTCHA for enhanced security.', 4),
  ('A product listing page with advanced filtering options.', 4),
  ('A mobile-responsive checkout screen for seamless purchases.', 5),
  ('An order confirmation screen with order summary.', 5),
  ('A search results page with pagination and sorting.', 6),
  ('A feedback form with rating and comment sections.', 6),
  ('An image gallery with slideshow and download options.', 7),
  ('A subscription page with different pricing tiers.', 7),
  ('A blog post page with related articles and comments.', 8),
  ('A category page displaying related products.', 8),
  ('A settings page with customizable theme options.', 9),
  ('A newsletter signup form with confirmation email.', 9),
  ('A search results page with pagination and sorting.', 10),
  ('A feedback form with rating and comment sections.', 10);

INSERT INTO options (content, question_id)
VALUES
  ('A 404 screen with customized error message.', 11),
  ('A 500 Internal Server Error screen with detailed error description.', 11),
  ('An animated login screen with social media integration.', 12),
  ('A dynamic homepage showcasing trending content.', 12),
  ('Welcome Aboard screen with personalized greeting.', 13),
  ('User Dashboard screen with real-time data visualization.', 13),
  ('A contact form with CAPTCHA for enhanced security.', 14),
  ('A product listing page with advanced filtering options.', 14),
  ('A mobile-responsive checkout screen for seamless purchases.', 15),
  ('An order confirmation screen with order summary.', 15),
  ('A search results page with pagination and sorting.', 16),
  ('A feedback form with rating and comment sections.', 16),
  ('An image gallery with slideshow and download options.', 17),
  ('A subscription page with different pricing tiers.', 17),
  ('A blog post page with related articles and comments.', 18),
  ('A category page displaying related products.', 18),
  ('A settings page with customizable theme options.', 19),
  ('A newsletter signup form with confirmation email.', 19),
  ('A search results page with pagination and sorting.', 20),
  ('A feedback form with rating and comment sections.', 20);

  INSERT INTO options (content, question_id)
VALUES
  ('A 404 screen with customized error message.', 21),
  ('A 500 Internal Server Error screen with detailed error description.', 21),
  ('An animated login screen with social media integration.', 22),
  ('A dynamic homepage showcasing trending content.', 22),
  ('Welcome Aboard screen with personalized greeting.', 23),
  ('User Dashboard screen with real-time data visualization.', 23),
  ('A contact form with CAPTCHA for enhanced security.', 24),
  ('A product listing page with advanced filtering options.', 24),
  ('A mobile-responsive checkout screen for seamless purchases.', 25),
  ('An order confirmation screen with order summary.', 25),
  ('A search results page with pagination and sorting.', 26),
  ('A feedback form with rating and comment sections.', 26),
  ('An image gallery with slideshow and download options.', 27),
  ('A subscription page with different pricing tiers.', 27),
  ('A blog post page with related articles and comments.', 28),
  ('A category page displaying related products.', 28),
  ('A settings page with customizable theme options.', 29),
  ('A newsletter signup form with confirmation email.', 29),
  ('A search results page with pagination and sorting.', 30),
  ('A feedback form with rating and comment sections.', 30);

  INSERT INTO options (content, question_id)
VALUES
  ('A 404 screen with customized error message.', 31),
  ('A 500 Internal Server Error screen with detailed error description.', 31),
  ('An animated login screen with social media integration.', 32),
  ('A dynamic homepage showcasing trending content.', 32),
  ('Welcome Aboard screen with personalized greeting.', 33),
  ('User Dashboard screen with real-time data visualization.', 33),
  ('A contact form with CAPTCHA for enhanced security.', 34),
  ('A product listing page with advanced filtering options.', 34),
  ('A mobile-responsive checkout screen for seamless purchases.', 35),
  ('An order confirmation screen with order summary.', 35),
  ('A search results page with pagination and sorting.', 36),
  ('A feedback form with rating and comment sections.', 36),
  ('An image gallery with slideshow and download options.', 37),
  ('A subscription page with different pricing tiers.', 37),
  ('A blog post page with related articles and comments.', 38),
  ('A category page displaying related products.', 38),
  ('A settings page with customizable theme options.', 39),
  ('A newsletter signup form with confirmation email.', 39),
  ('A search results page with pagination and sorting.', 40),
  ('A feedback form with rating and comment sections.', 40);

-- -- Insert statements for the question answers
INSERT INTO answers (content, question_id)
VALUES
    ('User Dashboard screen.', 1),
    ('Product search functionality.', 2),
    ('Payment processing module.', 3),
    ('Account registration process.', 4),
    ('Order tracking feature.', 5),
    ('Customer support system.', 6),
    ('Inventory management tool.', 7),
    ('Data analytics dashboard.', 8),
    ('Email notification system.', 9),
    ('User profile customization options.', 10),
    ('Product recommendation engine.', 11),
    ('Multi-language support.', 12),
    ('Social media integration.', 13),
    ('Customer feedback collection.', 14),
    ('Secure payment gateway.', 15),
    ('Product rating and review system.', 16),
    ('Mobile app compatibility.', 17),
    ('Order cancellation and refund process.', 18),
    ('Sales and revenue reports.', 19),
    ('User activity tracking.', 20);

INSERT INTO answers (content, question_id)
VALUES
    ('User Dashboard screen.', 21),
    ('Product search functionality.', 22),
    ('Payment processing module.', 23),
    ('Account registration process.', 24),
    ('Order tracking feature.', 25),
    ('Customer support system.', 26),
    ('Inventory management tool.', 27),
    ('Data analytics dashboard.', 28),
    ('Email notification system.', 29),
    ('User profile customization options.', 30),
    ('Product recommendation engine.', 31),
    ('Multi-language support.', 32),
    ('Social media integration.', 33),
    ('Customer feedback collection.', 34),
    ('Secure payment gateway.', 35),
    ('Product rating and review system.', 36),
    ('Mobile app compatibility.', 37),
    ('Order cancellation and refund process.', 38),
    ('Sales and revenue reports.', 39),
    ('User activity tracking.', 40);