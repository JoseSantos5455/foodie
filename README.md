# Ecommerce App built with MERN Stack

This is a full-stack ecommerce application built using the MERN (MongoDB, Express.js, React, Node.js) technology stack. It allows users to browse and purchase products, manage their cart and orders, and leave reviews on products.

## Installation

To get started with the application, you will need to:

1.  Clone this repository to your local machine:

```
git clone https://github.com/ZinoChan/lapino.git
```

2.  Install dependencies:

```
yarn install
cd server && yarn install
cd client && yarn install
```

3.  Create a `.env` file in the `server` directory and add the necessary environment variables:

```
NODE_ENV<development/production..>
PORT<YOUR_PORT_HERE>
MONGO_URI<YOUR_MONGO_URI>
JWT_SECRET<YOUR_JWT_SECRET>
ORIGIN<*>
PROJECT_ID<YOUR_FIREBASE_ADMIN_PROJECT_ID>
CLIENT_EMAIL<YOUR_FIREBASE_ADMIN_CLIENT_ID>
PRIVATE_KEY<YOUR_FIREBASE_ADMIN_PRIVATE_KEY>
```

4. Create a `.env` file in the `client` directory and add the necessary environment variables:

```
VITE_BASE_URL<YOUR_BACKEND_API_URL>
```

5.  Start the application:

```
yarn start
```

The application should now be running at `http://localhost:3000`.

## Usage

To use the application, you can:

- Browse the available products on the homepage.
- Click on a product to view its details, add it to your cart, and purchase it.
- Manage your cart and checkout your items.
- Leave reviews on products.
- Manage your profile
- SignUp/Login

## Features

This application includes the following features:

- User authentication and authorization
- Product browsing and searching
- Product filtering by category and price range and ratings
- Product details with images, description, price, and reviews
- Shopping cart management
- Checkout and payment processing
- Order history and management
- User profile management
- Admin product management with CRUD operations

## Technologies Used

This application was built using the following technologies:

- MongoDB
- Express.js
- React 18
- Node.js
- Vite
- JWT
- Bcrypt
- TailwindCss
- Typescript
- Axios
- React Router 6
- Firebase Admin
- Redux Saga
