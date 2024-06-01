# Meal Tracker Application

This Meal Tracker application allows users to log meals, calculate nutritional values, and manage meal-related reviews. It features user authentication, meal management, and a review system.

## Features

- **User Authentication**: Secure user authentication system including login and registration functionalities.
- **Error Handling**: Robust error handling across the entire application to ensure reliability and ease of debugging.
- **Meal Management**: Users can add, view, and manage their meals directly from the main page.
- **Nutritional Calculations**: Automatic calculation of total nutritional values (calories, proteins, fats, and carbs) as meals are added.
- **Review System**: Users can add and view reviews on different meals for community-driven insights.

## Setup Instructions

### Backend Setup

1. **Install Dependencies**:

   ```bash
   cd backend
   npm install
   ```

2. **Environment Variables**:

   ```bash
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   CORS_ORIGIN=http://localhost:3001
   ```

3. **Start the Server**:

   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Install Dependencies**:

   ```bash
   cd frontend
   npm install
   ```

2. **Start the Application**:

   ```bash
   npm run dev
   ```

### Usage

- Once the setup is complete, navigate to http://localhost:5173 in your browser to start using the application.
