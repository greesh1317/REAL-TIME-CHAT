

# Real-Time Chat Application

**Company:** CODTECH IT SOLUTIONS  
**Name:** SOLASA GREESHMA DIVYA SREE  
**Intern ID:** CT04DN1334  
**Domain:** MERN Stack Web Development  
**Duration:** 4 weeks  
**Mentor:** NEELA SANTHOSH  


## Project Description

The **Real-Time Chat Application** is an interactive web-based platform designed to facilitate instant communication between users. Developed during my internship at **CODTECH IT SOLUTIONS**, this project focuses on delivering seamless real-time messaging by leveraging the powerful **MERN stack** — comprising **MongoDB**, **Express.js**, **React.js**, and **Node.js** — along with real-time communication enabled through **Socket.IO**.

The frontend is built with **React.js**, a dynamic JavaScript library known for its component-based architecture and efficient UI rendering. React enables the creation of reusable and modular components such as chat windows, message input forms, and user lists, enhancing the overall user experience. To improve interface usability and aesthetics, the project integrates libraries like `react-scroll-to-bottom` for smooth auto-scrolling of chat messages and `react-emoji` for emoji support, allowing users to express emotions naturally during conversations.

On the backend, the application uses **Node.js** with **Express.js** to establish a robust server environment. Express simplifies API route handling and serves static files efficiently. Real-time, bi-directional communication between clients and the server is powered by **Socket.IO**, a WebSocket-based library that supports instantaneous data exchange without the need for page refreshes. This technology ensures that messages sent by users are broadcast and received live, providing a fluid chat experience similar to popular messaging platforms.

To manage user sessions and chat rooms, the application employs the **query-string** package, which parses URL parameters such as usernames and room names. This facilitates the creation of organized chat rooms where multiple users can join specific conversations, supporting both private and group chat functionality.

The project structure maintains a clean separation of concerns, with the frontend React app housed in the `client/` directory and the backend API and WebSocket logic implemented within the `server/` directory. This modular architecture promotes maintainability and scalability.

During development, **npm (Node Package Manager)** was used extensively to manage dependencies across both client and server modules. Tools like **nodemon** were implemented to auto-restart the backend server upon code changes, improving development efficiency. Additionally, **concurrently** allowed simultaneous execution of frontend and backend servers during testing phases.

This real-time chat application highlights critical concepts in modern web development, including:

- Implementing WebSockets for live data transmission  
- Designing client-server architectures with RESTful API principles  
- Utilizing React hooks and functional components for state management  
- Structuring modular, maintainable codebases  
- Applying version control using Git and GitHub for collaborative workflows


## Features

- Real-time messaging using WebSockets  
- Multiple chat rooms support  
- Emoji support in messages  
- Smooth auto-scrolling chat window  
- User-friendly UI built with React.js  


## Technologies Used

- **Frontend:** React.js, react-scroll-to-bottom, react-emoji  
- **Backend:** Node.js, Express.js, Socket.IO  
- **Database:** MongoDB (if used)  
- **Others:** query-string, npm, nodemon, concurrently  


## Installation and Setup


# Clone the repository
git clone https://github.com/greesh1317/real-time-chat-app.git

# Navigate into the project directory
cd real-time-chat-app

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install


### Running the application


# Start the backend server
cd ../server
npm start

# In a new terminal, start the frontend React app
cd ../client
npm start


> Alternatively, if you have a script to run both servers concurrently (from the root folder):


npm run dev


## Screenshots



<img width="405" alt="4" src="https://github.com/user-attachments/assets/d385cff4-8781-4f1d-9bcb-c6dd41243889" />

*User entering username and room*


<img width="877" alt="2" src="https://github.com/user-attachments/assets/a2b23ef9-376f-431c-9e82-a18aa5432a11" />

*Active chat room with messages*


<img width="704" alt="3" src="https://github.com/user-attachments/assets/8f724252-9a09-4371-8a7f-fe7933be0e5e" />

*Instant message updates*








