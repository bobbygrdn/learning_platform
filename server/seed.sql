-- Insert statement for the course
INSERT INTO courses (title, description, topics, difficulty, time_needed, user_id)
VALUES
  ('Course 1', 'This is the first course on our platform.', 'Learning the User Interface, Learning the flow of the Platform', 'Beginner', '3 Days', 1),
  ('Course 2', 'In this course, you will learn advanced techniques.', 'Learning the Advanced Techniques, Learning to implement these techniques', 'Intermediate', '2 Weeks', 1),
  ('Course 3', 'Discover the secrets of effective communication.', 'Learn how people communicate, Learn how to be an active listener', 'Beginner', '2 Days', 1),
  ('Course 4', 'Learn how to build your own website from scratch.', 'Learn basic web development, Learn webpage structure and flow', 'Beginner', '1 week', 1),
  ('Course 5', 'Master the art of digital photography.', 'Learnhow to utilize different camera setttings, Learn how to bring life to photos', 'Beginner', '1 week', 1),
  ('Course 6', 'Explore the world of data analysis and visualization.', 'Learn the basics of data analysis, Learn how to best visualize your data', 'Intermediate', '3 Weeks', 1),
  ('Course 7', 'Unleash your creativity with this art course.', 'Learn best practices for art design, Learn how to bring out your inner creativity', 'Beginner', '1 Day', 1),
  ('Course 8', 'Learn the basics of programming with Python.', 'Learn the fundamentals of Python, Learn how to build basic programs', 'Beginner', '2 Weeks', 1),
  ('Course 9', 'Enhance your leadership skills with this course.', 'Learn what leadership styles are used worldwide, Learn what leadership style best suites you', 'Intermediate', '5 Days', 1),
  ('Course 10', 'Discover the wonders of astronomy.', 'Learn how to recognize star patterns, Learn positioning of astrological signs', 'Beginner', '4 Days', 1);

-- Insert statements for the lessons
INSERT INTO lessons (title, description, content, course_id)
VALUES ('Your First Lesson', 'This introductory lesson will walk you through our User Interface for our platform and how to navigate through it.', 'These are the steps you will need to be successful in using our platform.', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 2', 'In this lesson, you will learn about the main features of our platform.', 'Explore the various tools and functionalities available to you.', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 3', 'This lesson focuses on creating and managing your user profile.', 'Learn how to set up your profile, add a profile picture, and update your personal information.', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 4', 'Discover how to navigate through different sections of our platform.', 'Find your way around the dashboard, menu options, and other important areas.', 1);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Introduction to Programming', 'Learn the basics of programming and get familiar with key concepts.', 'Explore fundamental programming principles and problem-solving techniques.', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Variables and Data Types', 'Understand how to declare variables and work with different data types.', 'Learn about integers, strings, booleans, and other data types used in programming.', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Conditional Statements', 'Discover how to use if-else statements and make decisions in your code.', 'Learn how to control the flow of your program based on certain conditions.', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Loops and Iteration', 'Explore different types of loops and iterate over data structures.', 'Understand how to repeat certain actions in your code and process collections of data.', 2);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Introduction to Programming', 'Learn the basics of programming and get familiar with key concepts.', 'Explore fundamental programming principles and problem-solving techniques.', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Variables and Data Types', 'Understand how to declare variables and work with different data types.', 'Learn about integers, strings, booleans, and other data types used in programming.', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Conditional Statements', 'Discover how to use if-else statements and make decisions in your code.', 'Learn how to control the flow of your program based on certain conditions.', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Loops and Iteration', 'Explore different types of loops and iterate over data structures.', 'Understand how to repeat certain actions in your code and process collections of data.', 3);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Your First Lesson', 'This introductory lesson will walk you through our User Interface for our platform and how to navigate through it.', 'These are the steps you will need to be successful in using our platform.', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 2', 'In this lesson, you will learn about the main features of our platform.', 'Explore the various tools and functionalities available to you.', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 3', 'This lesson focuses on creating and managing your user profile.', 'Learn how to set up your profile, add a profile picture, and update your personal information.', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 4', 'Discover how to navigate through different sections of our platform.', 'Find your way around the dashboard, menu options, and other important areas.', 4);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Your First Lesson', 'This introductory lesson will walk you through our User Interface for our platform and how to navigate through it.', 'These are the steps you will need to be successful in using our platform.', 5);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 2', 'In this lesson, you will learn about the main features of our platform.', 'Explore the various tools and functionalities available to you.', 5);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 3', 'This lesson focuses on creating and managing your user profile.', 'Learn how to set up your profile, add a profile picture, and update your personal information.', 5);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 4', 'Discover how to navigate through different sections of our platform.', 'Find your way around the dashboard, menu options, and other important areas.', 5);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Introduction to Programming', 'Learn the basics of programming and get familiar with key concepts.', 'Explore fundamental programming principles and problem-solving techniques.', 6);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Variables and Data Types', 'Understand how to declare variables and work with different data types.', 'Learn about integers, strings, booleans, and other data types used in programming.', 6);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Conditional Statements', 'Discover how to use if-else statements and make decisions in your code.', 'Learn how to control the flow of your program based on certain conditions.', 6);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Loops and Iteration', 'Explore different types of loops and iterate over data structures.', 'Understand how to repeat certain actions in your code and process collections of data.', 6);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Introduction to Programming', 'Learn the basics of programming and get familiar with key concepts.', 'Explore fundamental programming principles and problem-solving techniques.', 7);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Variables and Data Types', 'Understand how to declare variables and work with different data types.', 'Learn about integers, strings, booleans, and other data types used in programming.', 7);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Conditional Statements', 'Discover how to use if-else statements and make decisions in your code.', 'Learn how to control the flow of your program based on certain conditions.', 7);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Loops and Iteration', 'Explore different types of loops and iterate over data structures.', 'Understand how to repeat certain actions in your code and process collections of data.', 7);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Your First Lesson', 'This introductory lesson will walk you through our User Interface for our platform and how to navigate through it.', 'These are the steps you will need to be successful in using our platform.', 8);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 2', 'In this lesson, you will learn about the main features of our platform.', 'Explore the various tools and functionalities available to you.', 8);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 3', 'This lesson focuses on creating and managing your user profile.', 'Learn how to set up your profile, add a profile picture, and update your personal information.', 8);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 4', 'Discover how to navigate through different sections of our platform.', 'Find your way around the dashboard, menu options, and other important areas.', 8);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Your First Lesson', 'This introductory lesson will walk you through our User Interface for our platform and how to navigate through it.', 'These are the steps you will need to be successful in using our platform.', 9);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 2', 'In this lesson, you will learn about the main features of our platform.', 'Explore the various tools and functionalities available to you.', 9);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 3', 'This lesson focuses on creating and managing your user profile.', 'Learn how to set up your profile, add a profile picture, and update your personal information.', 9);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Lesson 4', 'Discover how to navigate through different sections of our platform.', 'Find your way around the dashboard, menu options, and other important areas.', 9);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Introduction to Programming', 'Learn the basics of programming and get familiar with key concepts.', 'Explore fundamental programming principles and problem-solving techniques.', 10);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Variables and Data Types', 'Understand how to declare variables and work with different data types.', 'Learn about integers, strings, booleans, and other data types used in programming.', 10);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Conditional Statements', 'Discover how to use if-else statements and make decisions in your code.', 'Learn how to control the flow of your program based on certain conditions.', 10);

INSERT INTO lessons (title, description, content, course_id)
VALUES ('Loops and Iteration', 'Explore different types of loops and iterate over data structures.', 'Understand how to repeat certain actions in your code and process collections of data.', 10);

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