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
Create `.env` file.
Open `Node.js-Development-Task/.env` then You will need:

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

### File Structure
Node.js-Development-Task (root)

- src
  - Controllers
    - ContactController.js
    - JwtControllers.js
  
  - Middleware
    - __mocks__
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
    - __mocks__
      - ContactServices.js
    - ContactServices.js

  - utils
    - async.js
    - error.js

  - Validation
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