# Project Title

Fetch Rewards Backend Assessment

## Description

A backend REST API web service that accepts HTTP requests and returns responses based on the request. This is used to manage transactions in a users account. Web service provide routes to complete the following tasks:
1. Create a new transaction
2. Fetch all existing transactions
3. Fetch points balance per payer
4. Spend points from users transactions

## Getting Started

### Built With

* JavaScript
* Node.js
* MongoDB database
* Mongoose ORM

### Dependencies

* express
* mongoose
* nodemon

### Before Installing
* MongoDB is required and need to be on local machine.
* Go to the [MongoDB](https://docs.mongodb.com/guides/server/install/#what-you-ll-need) site.
* Here is [Guide](https://docs.mongodb.com/guides/server/install/#what-you-ll-need) for setup.
* A generic connection url is provided in the setup.js file in the database folder.
* Also Node.js is required.
* Go to the .[Node.js](https://nodejs.org/en/) site.
* Once MongoDB and Node.js are installed you start cloning the respository.

### Installing

* Clone repository git clone 

```
git@github.com:whitneyharper/fetch-rewards-assessment.git
```

* To install dependencies type [npm install] in the terminal 

```
npm install
```

### Executing program

* To start server type [npm start] or [nodemon] in the terminal.

```
npm start
```
```
nodemon
```

## Testing the API
Use POSTMAN to test routes.

* Go to the [Postman](https://www.postman.com/) site.
* Create an account or log in.
* From your account's home screen, create or use an existing `Workspace` by clicking on `Workspace` in the top left menu bar.
* Once you're in a workspace, click on `Create a request` on the right under `Getting started`.
* I provided an image to show what your workspace should look like. Please view (postman dashboard.png).
* I provided a transactions.json file with data to test routes.

### Create a new transaction
- API <br> POST/ <localhost:3000/transactions/add>
    * This route will allow user to created one transaction at a time.

- **Input** <br> 
  `{ "payer": "DANNON", "points": 1000, "timestamp": "2020-11-02T14:00:00Z" }` <br>
  
- **Expected response** <br>
    ```
    {
        "message": "new transaction created",
        "newTransaction": {
            "payer": "miller coors",
            "points": 10000,
            "timestamp": "2020-11-01T14:00:00.000Z",
            "_id": "613961ade9d575fcb5742ed7",
            "__v": 0
        }
    }

### Get list of transactions
- API <br> GET/ <localhost:3000/transactions/view>

- **Expected response** <br>
    ```
    {
    "transactions": [
            {
                "_id": "6139604ee5819295fdc1b4e4",
                "payer": "unilever",
                "points": 200,
                "timestamp": "2020-10-31T11:00:00.000Z",
                "__v": 0
            },
            {
                "_id": "613961ade9d575fcb5742ed7",
                "payer": "miller coors",
                "points": 10000,
                "timestamp": "2020-11-01T14:00:00.000Z",
                "__v": 0
            }
        ]
    }
    
### Get Balance
- API <br> GET/ <localhost:3000/transactions/balances>

- **Expected response** <br>
   ```
   {
        "balances": [
            {
                "_id": "dannon",
                "points": 1300
            },
            {
                "_id": "unilever",
                "points": 200
            }
        ]
    }

### Spend Points
- API <br> POST/ <localhost:3000/transactions/spend>
- **Input** <br>
  `{"points": 5000}` <br>
  
- **Expected response** <br>
    ```
    {
        [
            {
                "payer": "DANNON",
                "points": -100
            },
            {
                "payer": "UNILEVER",
                "points": -200
            },
            {
                "payer": "MILLER COORS",
                "points": -4700
            }
        ]
    }
 
## Authors

Contributors names and contact info

ex. Whitney Harper  

