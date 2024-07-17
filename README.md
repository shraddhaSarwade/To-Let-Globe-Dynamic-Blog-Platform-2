# Dynamic Blog Platform

## Project Description

This project aims to develop a user-friendly blog platform with the following functionalities:

### 1. Blog Listing:

- The homepage or a dedicated "Blog" page displays a list of recently uploaded blogs by content creators. There is an option to also view Trending BLogs
- Initially, only a limited number of blogs (e.g., 6) will be shown on the page.
- Include a pagination system that allows users to load additional blogs progressively.

### 2. Blog Details Page:

- Clicking on a specific blog card redirects the user to a dedicated blog details page.
- This page displays the full content of the selected blog, including the author's name,role, date of publication, title, intro, content, likes and views.

### 3. Content Creation (Limited Access):

- A dedicated "Add Blog" button is available on the Blog Listing Page.
- Clicking this button triggers a user authentication check.
  - If the user is not logged in as a content creator or admin, the application displays a message prompting them to log in as a content creator before proceeding.
  - If the user is already logged in as a content creator, the applications redirects them directly to the blog creation page.

### 4. Blog Creation Page (Content Creator Only):

- This page provides a user-friendly interface for content creators to add new blog posts.
- Includes essential fields for:
  - Blog title
  - Blog Intro
  - Blog content (rich text editor or WYSIWYG editor for easy formatting)
  - Ability to add images
  - Option to categorise the blog
- Functionality to save the created blog post to the database.

### 5. Login and Register Page:

- This page provides a user-friendly interface for Login and Registration of User.
- Features include:
  - Hashed Password Storage using bcrypt
  - Role Based Registration
  - Auto Redirects once user autheticates

## Tech Stack

### Frontend:

- React.js to create a dynamic and responsive blog listing and blog details page. These frameworks offer:
- Component-based development for clean and maintainable code
- Rich state management for handling user interactions and blog data display
- API integration for fetching and submitting blog data
- HTML, CSS, and CSS framework like Bootstrap for styling and layout.

### Backend:

- Node.js (with Express) suitable for handling user authentication, database interactions, and API endpoints for:
  - Retrieving blog data for display
  - Saving newly created blog posts
  - Checking User Authentication and Authorization

### Database:

- MongoDB to store blog data (title, content, author, date, etc.) and user information (authentication).

### Authentication:

- Implemented user authentication and authorization mechanisms using express-session and hashing algorithms like bcrypt.
