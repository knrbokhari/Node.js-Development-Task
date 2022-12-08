const { deleteContact, updateContact, createNewContact, getAllContacts, getSingleContact } = require("../Controllers/ContactController");
const handleValidation = require("../Middleware/handleValidation");
const validators = require("../Validation");

const router = require("express").Router();

// get all contacts
router.get('/', getAllContacts)

// get single contact
router.get('/:id', getSingleContact)

// 
// router.get('/', "Fetch phase matching results")

// create contact
router.post('/', handleValidation(validators.contactValidation), createNewContact)

// create contact
// router.post('/', "bulk contacts")

// Update contact
router.patch('/:id', updateContact)

// Delete contact
router.delete('/:id', deleteContact)

const configureContactRoutes = (app) => {
    app.use("/api/contuct", router);
};
  
module.exports = configureContactRoutes;