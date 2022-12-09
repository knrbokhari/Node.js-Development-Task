const { deleteContact, updateContact, createNewContact, getAllContacts, getSingleContact, getMatchingContact, createMultipleContacts } = require("../Controllers/ContactController");
const handleValidation = require("../Middleware/handleValidation");
const verifyJWT = require("../Middleware/verifyJWT");
const validators = require("../Validation");

const router = require("express").Router();

// get all contacts
router.get('/', verifyJWT, getAllContacts)

// get single contact
router.get('/:id', verifyJWT, getSingleContact)

// 
router.get('/matching/:any', getMatchingContact)

// create contact
router.post('/', verifyJWT, handleValidation(validators.contactValidation), createNewContact)

// create bulk contact
router.post('/multiple', createMultipleContacts)

// Update contact
router.patch('/:id', verifyJWT, updateContact)

// Delete contact
router.delete('/:id', verifyJWT, deleteContact)

const configureContactRoutes = (app) => {
    app.use("/api/contuct", router);
};
  
module.exports = configureContactRoutes;