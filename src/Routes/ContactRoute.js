const { deleteContact, updateContact, createNewContact, getAllContacts, getSingleContactById, getMatchingContact, createMultipleContacts, getContactsByQueryMachingField } = require("../Controllers/ContactController");
const handleValidation = require("../Middleware/handleValidation");
const verifyJWT = require("../Middleware/verifyJWT");
const validators = require("../Validation");

const router = require("express").Router();

// get all contacts
router.get('/', verifyJWT, getAllContacts)

// get single contact
router.get('/:id', verifyJWT, getSingleContactById)

// get data by query maching field
router.get('/query/field', verifyJWT, getContactsByQueryMachingField)

// create contact
router.post('/', verifyJWT, handleValidation(validators.contactValidation), createNewContact)

// create bulk contact
router.post('/multiple', verifyJWT, createMultipleContacts)

// Update contact
router.patch('/:id', verifyJWT, handleValidation(validators.contactValidationWithId), updateContact)

// Delete contact
router.delete('/:id', verifyJWT, deleteContact)

const configureContactRoutes = (app) => {
    app.use("/api/contuct", router);
};
  
module.exports = configureContactRoutes;