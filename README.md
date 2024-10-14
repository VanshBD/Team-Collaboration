
# Project Title: Event Management System

## Overview
This project is an **Event Management System** that allows users to register, log in, and manage events efficiently. The application features user role management, task assignment, and a chat functionality. It is built using React for the frontend and Node.js, Express, and MongoDB for the backend.

## Features

- **User Authentication**: Secure login and registration with JWT token authentication.
- **Role-Based Access Control**: Different user roles (admin, teacher, student) with specific permissions.
- **Task Management**: Admins can assign tasks to users and manage user roles.
- **Chat Functionality**: Real-time chat feature for users.
- **Responsive Design**: Clean and responsive UI using Tailwind CSS for styling.

## Technologies Used

- **Frontend**: React, Axios, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Real-time Communication**: Socket.io

## File Structure

```
src
├── components
│   ├── Auth
│   │   └── Login.js
│   ├── Chat
│   │   └── Chat.js
│   ├── Dashboard
│   │   ├── AdminDashboard.js
│   │   └── UserDashboard.js
│   ├── Tasks
│   │   ├── TaskForm.js
│   │   └── TaskList.js
└── App.js
```
`

## Usage

- Access the application in your browser at `http://localhost:3000`.
- Register a new account or log in with existing credentials.
- Admins can manage users and tasks, while regular users can view their tasks and chat with others.

## Contributing

Contributions are welcome! Please create a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
