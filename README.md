# Ecommerce - REST API's using NODEJS


## Installation
- Clone repo from: `https://github.com/amanazm/ecommerce-rest-api-nodejs-assignment`
- Create `.env` file.
- Add the following: 

       
    
        MONGO_URI =  
        JWT_SECRET_KEY = "Aman"
        JWT_KEY ="YOURKEY"

## Install modules
> npm i

## Start Server
> npm start


## Details

Auth APIs
POST /api/auth/register
● Register a user (accept username, password, type of user - buyer/seller)

POST /api/auth/login
● Let a previously registered user log in (e.g. retrieve authentication token)

## APIs for buyers

GET /api/buyer/list-of-sellers
● Get a list of all sellers

GET /api/buyer/seller-catalog/:seller_id
● Get the catalog of a seller by seller_id

POST /api/buyer/create-order/:seller_id
● Send a list of items to create an order for seller with id = seller_id

## APIs for sellers

POST /api/seller/create-catalog
● Send a list of items to create a catalog for a seller

GET /api/seller/orders
● Retrieve the list of orders received by a seller
