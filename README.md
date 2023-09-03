# cow/cat_hat_with_auth(backend)

## Live Link
[cat_hut Live Demo](https://book-catalog-server-woad.vercel.app/)

This repository contains the code for a robust authentication system for the "Cow Hut Admin" application. The system introduces an admin model with various attributes, custom authentication using bcrypt and JWT, and user profiles. Below, we provide an overview of the key tasks and features implemented in this system.

# Admin Model

The system introduces an admin model with the following attributes:

- **role**: Specifies the role of the admin (e.g., "superadmin," "manager," "staff").
- **password**: Stores the hashed password of the admin.
- **name**: Admin's full name.
- **address**: Admin's address.
- **createdAt**: Timestamp indicating when the admin account was created.
- **updatedAt**: Timestamp indicating the last update to the admin account.

# Authentication

We have implemented custom authentication using bcrypt and JSON Web Tokens (JWT) for both admins and users. Here's how the authentication process works:

- Admins and users must log in using their phone number and password.
- A successful login results in the generation of an access token.
- A refresh token is stored in the browser's cookie for later use.
- Access tokens contain the following information:
  - **_id**: Unique identifier of the admin or user.
  - **role**: Role of the admin or user, which is used for permission control.

# Application Routes

We have defined a set of API routes for admins and users, including the following functionalities:

- **Creating admins**: Register new admin accounts.
- **Logging in**: Authenticate admins and users and generate access tokens.
- **Getting user profiles**: Retrieve user profiles using the access token.
- **Updating profiles**: Allow admins and users to update their profile information.
- **Managing cows and orders**: Implement routes to manage cows and orders based on user roles.

# Authentication Middleware

To ensure security and permission control, we have implemented authentication middleware. This middleware verifies tokens and checks user roles before granting access to specific routes. Admins and users can only access routes for which they have the appropriate permissions.

## Live Link

[https://cow-hat-with-auth-alpha.vercel.app/api/v1/]

## Application Routes

### Auth(User)
- `POST`  https://cow-hat-with-auth-alpha.vercel.app/api/v1/auth/login
- `POST`  https://cow-hat-with-auth-alpha.vercel.app/api/v1/auth/signup
- `POST`  https://cow-hat-with-auth-alpha.vercel.app/api/v1/auth/refresh-toke


### Auth(Admin)
- `POST`  https://cow-hat-with-auth-alpha.vercel.app/api/v1/admins/create-admin
- `POST`  https://cow-hat-with-auth-alpha.vercel.app/api/v1/admins/login

### User

- `GET` https://cow-hat-with-auth-alpha.vercel.app/api/v1/users
- `PATCH` https://cow-hat-with-auth-alpha.vercel.app/api/v1/users/64a2668bf66f680d36e8282f 
- `DELETE` https://cow-hat-with-auth-alpha.vercel.app/api/v1/users/64a2362cc137393f7160130a 

### Cows

- `POST` https://cow-hat-with-auth-alpha.vercel.app/api/v1/cows
- `GET` https://cow-hat-with-auth-alpha.vercel.app/api/v1/cows
- `GET` https://cow-hat-with-auth-alpha.vercel.app/api/v1/cows/6495ba7ac960573243f7e551 
- `PATCH` https://cow-hat-with-auth-alpha.vercel.app/api/v1/cows/609c17fc1281bb001f523456 
- `DELETE` https://cow-hat-with-auth-alpha.vercel.app/api/v1/cows/6496e38f32cb4ddc26f9abaf 

### Pagination and Filtering routes of Cows

- `GET` https://cow-hat-with-auth-alpha.vercel.app/api/v1/cows?pag=1&limit=10
- `GET` https://cow-hat-with-auth-alpha.vercel.app/api/v1/cows?sortBy=price&sortOrder=asc
- `GET` https://cow-hat-with-auth-alpha.vercel.app/api/v1/cows?minPrice=1000&maxPrice=70000
- `GET` https://cow-hat-with-auth-alpha.vercel.app/api/v1/cows?location=Chattogram
- `GET` https://cow-hat-with-auth-alpha.vercel.app/api/v1/cows?searchTerm=Cha

### Orders

- `POST` https://cow-hat-with-auth-alpha.vercel.app/api/v1/orders
- `GET` https://cow-hat-with-auth-alpha.vercel.app/api/v1/orders

### My profile

- `GET` https://cow-hat-with-auth-alpha.vercel.app/api/v1/users/my-profile
- `PATCH` https://cow-hat-with-auth-alpha.vercel.app/api/v1/users/my-profile

### Order

- `GET` https://cow-hat-with-auth-alpha.vercel.app/api/v1/orders/64b8f2dece91135b64b43c5b

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install this project.

```bash
npm install
