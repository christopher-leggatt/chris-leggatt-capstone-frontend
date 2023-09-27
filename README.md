******************************************
CAPSTONE PROJECT: E-COMMERCE CANNABIS SITE
******************************************


My capstone project for Brainstation's SE 2023 cohort. An example website for a friend's cannabis dispensary business in Alberta, with the intention for his use in the future.


-----------------
Table of Contents
Features
Tech Stack
Getting Started
Prerequisites
Installation
Usage
---------------


## Features

- home page, about page, shop section 
-site navbar with hamburger bars for page navigation and sign-in/register for user, admin login pages (TBD)
-shop section includes a shop navbar with navigation to main, category, and a cart dropdown menu
-checkout page includes stepper with billing/shipping form, Stripe payment (TBD) and confirmation screen
-products can be clicked on navigate to a product details page


## Tech Stack

Frontend

-HTML5, CSS3, SASS, JS
-React
-Redux/ Toolkit
-Axios
-react-router-dom
-Material UI, react-material-iu-carousel
-Formik/Yup
-Stripe

Backend

-Axios
-Node.js, Express
-MySQL
-knex
-passport
-uuid
-Node.js
-express
-cors
-dotenv


## Getting Started

## Prerequisites

-create-react-app
-node
-npm
-git/ gitbash

## Installation

1. Clone project to local machine

```bash
git clone git@github.com:christopher-leggatt/chris-leggatt-capstone-frontend.git
```

2. Move to repo root directory

```bash
cd chris-leggatt-capstone-frontend
```

3. Install node modules

```bash
npm i 
```
4. Rename .env.sample file

```bash
mv .env.sample .env
```

5. Update environment variable to local client

- `REACT_APP_BASE_URL=<your localhost>`
- `REACT_APP_BACKEND_URL= <your server localhost>`

6. Run application

```bash
npm start
```

## Usage

Free use for developers