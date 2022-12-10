## Simple Library REST Full API (Address Book)

## Built With
* Node.js
* Express.js
* MongoDB


## Requirements

For development, you will only need Node.js v16.15.1 installed in your environnement.


## Install 
    using SSH:
    $ git clone git@github.com:knrbokhari/Node.js-Development-Task.git
    or using HTTPS:
    $ git clone https://github.com/knrbokhari/Node.js-Development-Task.git
    $ cd Node.js-Development-Task
    $ npm install


## Configure app
Create a `.env` file. Open `Node.js-Development-Task/.env` then You will need to give your mongo_DB URL and JWTKEY:

```
MONGO_DB = 
JWTKEY = 
```
### Run the server with nodemon
    $ npm run dev
### Run the server 
    $ npm start
### Run the test 
    $ npm run test

### API Documentation
Check out the API documentation by visiting this [Link](https://documenter.getpostman.com/view/21641752/2s8YzS1j4s).

### Live server link
Check out the API by visiting this [Link](https://nodejs-development-task-production.up.railway.app/).

### File Structure
Node.js-Development-Task/ (root)

- src
  - Controllers
    - ContactController.js
    - JwtControllers.js
  
  - Middleware
    - mocks
      - verifyJWT.js
    - handleError.js
    - handleValidation.js
    - verifyJWT.js

  - Models
    - Contact.js

  - Routes
    - ContactRoute.js
    - index.js
    - JwtRoute.js
  - Services
    - mocks
      - ContactServices.js
    - ContactServices.js

  - utils
    - async.js
    - error.js

  - Validation
      - ContactValidationWithId.js
      - ContactValidation.js
      - index.js
  - app.js
  - Connection.js
  - server.js
- test
  - contact.test.js
- .env
- .gitignore
- package-lock.json
- package.json
- README.md
