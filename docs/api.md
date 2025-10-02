# Quick_T API Documentation

## Overview

Quick_T is a comprehensive transport management system that provides APIs for managing vehicles, routes, trips, and users.

## Base URL

```text
http://localhost:5000/api
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```text
Authorization: Bearer <your-token>
```

## Endpoints

### User Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/me` - Get current user profile
- `POST /auth/logout` - Logout user

### Transport Management

- `GET /transport` - Get all transports
- `POST /transport` - Create new transport
- `GET /transport/:id` - Get transport by ID
- `PUT /transport/:id` - Update transport
- `DELETE /transport/:id` - Delete transport

### Route Management

- `GET /routes` - Get all routes
- `POST /routes` - Create new route
- `GET /routes/:id` - Get route by ID
- `PUT /routes/:id` - Update route
- `DELETE /routes/:id` - Delete route

### Trip Management

- `GET /trips` - Get all trips
- `POST /trips` - Create new trip
- `GET /trips/:id` - Get trip by ID
- `PUT /trips/:id` - Update trip
- `DELETE /trips/:id` - Delete trip

### User Management

- `GET /users` - Get all users (Admin only)
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

## Response Format

All API responses follow this format:

```json
{
  "success": true,
  "data": {},
  "message": "Success message"
}
```

Error responses:

```json
{
  "success": false,
  "error": "Error message",
  "errors": {}
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error
