# Web Development Learning Platform

## Objective Statement:

To create a comprehensive, user-friendly learning platform that enables users to learn web development skills through interactive lessons, quizzes, and projects. The platform will include features such as content management, progress tracking, and assessment, as well as user authentication and authorization to ensure secure access.

## Table of Contents:

-	Jira Board 
    - Contact bobbygrdn777@gmail.com to get added as a viewer to the project board
-	[Documentation](https://bobbygrdn.atlassian.net/wiki/spaces/VA/pages/7012354/Documentation?atlOrigin=eyJpIjoiMDA5YjhhN2QwOWNhNDIxZGEwYTU3NmZhZjJmN2NjOTgiLCJwIjoiaiJ9)
- [Run Locally](#run-locally)
-	[Daily Progress](#daily-progress)
-	[Technical Architecture](#technical-architecture)
-	[Technical Challenges](#technical-challenges)
-	[Future Improvements](#future-improvements)

### Run Locally

Clone the project

```bash
  git clone https://github.com/bobbygrdn/robert_gordon_learning_platform_capstone.git
```

Go to the server directory

```bash
  cd server
```

Install MySQL if you do not have this program

[MySQL Download](https://dev.mysql.com/downloads/mysql/)

Update the application.properties file for your specific setup

```application.properties
  # MySQL properties (database name, username and password should be specific to your environment)
  spring.datasource.url=jdbc:mysql://localhost:3306/vams?useSSL=false
  spring.datasource.username=root
  spring.datasource.password=password

  # Hibernate properties (MySQL dialect should be the version you downloaded and use)
  spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

Create a clean jar file for the Spring Application

```bash
  mvn clean package
```

Run the Spring Boot REST API using your newly created jar file

```bash
  java -jar target/valoracademy-0.0.1-SNAPSHOT.jar
```

Run the data.sql source file to inject data into the MySQL database using MySQL workbench or CLI

```bash
  # CLI command for running sql file once you login to MySQL and you are connected to your database
  source seed.sql
```

**You should now have the Spring REST API/database setup and running**

Open a new terminal and go to the client directory

```bash
  cd ../client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

**Now the Client should be running, and the application should be ready for you to use**

### Daily Progress

| Date | Tasks | Remarks | Project Completion |
|---|---|---|---|
| 06/16/2023 | - Restructured project to follow the Business Model structure <br> - Added fields and methods in backend to handle user progression tracking <br> - Added constant variables to clean up repetitive code in backend | - Project was perviously in project structure <br> - User progression system was implemented in backend only <br> - Constant variables were added to meet requirements | 80% |
| 06/20/20323 | - Created the editContent component that allows admins to edit the content of the platform <br> - Cleaned up the logic for editing content and component rerendering <br> - Removed the frontend test suite <br> - Updated the state management stores to accomodate the new necessary editContent state | - This includes Courses, Lessons, Quizzes and Questions <br> - State refresh now rerenders the necessary components and refetches their data <br> - Test suite was outdated and therefore needed to be removed <br> - Options and Answers for each question created or edited is now being stored in state for rendering and fetching purposes | 82% |
| 06/21/2023 - 06/23/2023 | - Created the Publisher view that allows admin personnel to preview and publish content <br> - Created the patch request handlers in the model controllers to update the published status of the content  | - Created the UI necessary for admins to be able to preview the content in its entirety and publish the content to the platform <br> - Updated the database data types to store boolean values properly and handle the changes of those values  | 85% |
| 06/26/2023 - 06/27/2023 | - Updated the logic in the publisher view of the admin dashboard to reflect the real time preview of the user <br> - Changed the dummy data for the courses to reflect the real time data <br> - Adds business logic for the progression system to handle requests from the client | - The content now gets rendered as html tags instead of plain text. <br> - The Courses now reflect the correct structure of the platform. There are 4 courses total. <br> - Progression system has full CRUD funtioality in the business and database layers | 90% |

### Technical Architecture

The learning platform is a web-based application built using a 2-tier architecture with a React.js frontend and a Spring Boot backend. The frontend is responsible for rendering the user interface and handling user interactions, while the backend provides the business logic and data storage.

The React.js frontend uses client-side rendering for improved performance and SEO. It communicates with the backend via RESTful API calls, which are handled by the Spring Boot backend.

The Spring Boot backend is built with Java and uses Spring Framework to provide a modular and scalable architecture. It is responsible for handling authentication and authorization, managing user profiles, and serving course content. The backend also integrates with a MySQL database to store user data, course information, and other application data.

Overall, the technical architecture of the learning platform is designed for performance, scalability, and reliability, with a modular and extensible architecture that can support future growth and expansion.

### Technical Challenges

| Challenge | Resolution |
|---|---|
| **Authentication**/**Authorization** | I used JWT tokens (JSON Web Tokens) created upon login and passed to client to be passed with all requests to backend. This ensures that each request will be authenticated from an authorized user and only fulfilled for those users.
| **User Data Encryption** | For storing user passwords I used BCrypt to hash passwords to be stored into the database. Backend handles encryption/verification of passwords to store and authenticate users.

### Future Improvements

- Content Creator Account/Dashboard
  - The content creator account feature would allow approved users to create and add new courses to the platform. Upon logging in, content creators would be taken to their dashboard where they can create new courses, edit existing ones, and view the status of their submissions.

  - To create a new course, content creators would need to provide information such as the course name, description, target audience, and learning objectives. They would also be able to upload any relevant course materials such as videos, documents, and images. Once the course is complete, the content creator can submit it for approval by the admin.

  - Admins would have access to a separate dashboard where they can view and approve pending course submissions. They can review the course details and materials to ensure that they meet the platform's standards and guidelines. Admins can also provide feedback to the content creator if any changes are necessary.

  - Once approved, the new course would be added to the platform's course catalog and become available for users to enroll in. The content creator would also receive a notification that their course has been approved and is now live on the platform.

  - This feature would not only expand the platform's course offerings but also give users the opportunity to contribute to the community and share their knowledge and expertise. Additionally, it would provide a streamlined process for content creators to create and submit courses, and for admins to review and approve them.

- Mobile App
  - Creating a mobile app version of the platform would involve designing and developing a separate mobile application for iOS and Android devices that would allow users to access the platform's courses and features from their smartphones and tablets. This would require adapting the user interface and user experience to fit smaller screen sizes and optimizing performance for mobile networks.

  - The mobile app could include features such as push notifications to remind users about upcoming courses and deadlines, offline course access, and mobile-specific social features such as in-app messaging and mobile video conferencing. This would enhance the user experience and enable users to stay connected to the platform even when they are not at their computer.

  - Additionally, creating a mobile app version of the platform would expand its reach and accessibility, as users would be able to access courses from anywhere at any time. This could help attract a wider audience and increase user engagement and retention.

- Social Features
  - Social features are a great way to create a sense of community among learners on the platform. By implementing features like discussion forums, learners can ask questions, share ideas and knowledge, and engage with other learners in a more collaborative way. This can help to create a more dynamic learning environment, where users can support each other and share their experiences and insights.

  - Another social feature that could be added is the ability for learners to connect with each other. This could be achieved through a messaging system or a "friend" system that allows users to add each other to their network of connections. This would enable learners to form study groups, connect with peers who have similar interests, and share resources and tips with each other.

  - In addition, social features can help to increase engagement on the platform by creating opportunities for learners to interact with the content and each other in a more meaningful way. This could lead to more active participation, higher completion rates, and a better overall user experience. Overall, adding social features to the platform could help to create a stronger sense of community among learners and enhance the learning experience for all users.

- Integration with external services
  - Integration with external services could involve using APIs to connect the platform with other services or applications, such as LinkedIn or other job-search platforms. Allowing users to import their LinkedIn profile to automatically populate their user profile on the platform, or adding a feature that allows users to search for job openings on external job sites directly from within the platform. We could look into integrating with external services for additional learning resources, such as online textbooks or educational video platforms, to supplement the courses offered on the platform. This could provide users with a more comprehensive learning experience and make the platform more valuable to users. Overall, the goal of integrating with external services would be to enhance the user experience and provide more value to users through additional features and functionality.

- Advanced analytics
  - Advanced analytics can provide deeper insights into user behavior and engagement on the platform. For example, analytics can help identify which courses are most popular, which ones have low completion rates, and which ones are most effective in terms of student learning outcomes. This information can help instructors and administrators make data-driven decisions about course offerings and improvements.

  - Analytics can also provide insights into user demographics, such as age, gender, location, and educational background. This information can help instructors and administrators better understand their user base and tailor their courses to meet the needs of different groups.

  - In addition to course-specific analytics, advanced analytics can provide insights into overall platform usage and engagement. For example, analytics can track user activity, such as logins, course enrollments, and completion rates, and provide insights into user engagement over time. This information can help instructors and administrators identify areas for improvement and optimize the platform for better user engagement.

  - Overall, advanced analytics can provide valuable insights into user behavior and engagement on the platform, enabling instructors and administrators to make data-driven decisions that improve course offerings, optimize the platform for better engagement, and ultimately help students achieve better learning outcomes.

- Language Localization
  - Language localization refers to the process of adapting a product or service to meet the language and cultural needs of a specific region or country. In the context of a learning platform, this would involve providing translations of the platform's user interface and content into multiple languages, allowing users to access the platform in their native language.

  - By providing language localization features, the learning platform can reach a wider audience and make the platform more accessible to non-English speakers. This can be particularly important for educational content, as students are likely to have a better understanding of the material if it is presented in their native language.

  - Localization involves more than just translating text - it also involves adapting content to account for cultural differences, such as using appropriate examples or avoiding cultural references that may not be familiar to the target audience.

  - Implementing language localization features can be a complex task, requiring the platform to support multiple languages and providing tools for content creators to create and manage translated content. However, the benefits of providing a more accessible and inclusive platform can be well worth the effort.
