# Nutrition Analytics

Nutrition Analytics is a web-based application that will allow users to track their daily macronutrients and their progress towards their nutritional goals.

## Tech Stack

- Javascript
- Node.js
- Express.js
- React.js
- MongoDB Atlas
- Redux
- Google Cloud Oauth 2.0

## Features

- Users can sign up with their email addresses, with their sessions being verified by JWT Authentication and their passwords being protected with Bcrypt hashing.
- Users can add create their own meals and add them to a collective database hosted on MongoDB Atlas for all users to share.
- Users can add different food items to meals sections on the webpage, tracking the macronutrients they consume during each meal and collectively throughout the day.
- Users only have access to modifying their own meals and track their own nutrition consumption, except for the food items created which are collectively shared.

## API Documentation

### Authentication Endpoints
- `POST /auth/register` - Registers a new user
    - Requires user registration details including email password and select fitness information
    - Returns the registered user's information

- `POST /auth/login` - Authenticates user and retrieves JWT token for new session
    - Requires email and password for authentication
    - Returns JWT with 24 expiration time

- `POST /auth/logout` - Invalidat4es JWT token
    - Blacklists current JWT token
