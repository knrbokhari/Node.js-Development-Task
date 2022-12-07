const { deleteContact, updateContact, createNewContact, getAllContacts, getSingleContact } = require("../Controllers/ContactController");

const router = require("express").Router();

// get all contacts
router.get('/', getAllContacts)

// get single contact
router.get('/:name', getSingleContact)

// 
// router.get('/', "Fetch phase matching results")

// create contact
router.post('/', createNewContact)

// create contact
// router.post('/', "bulk contacts")

// Update contact
router.patch('/:id', updateContact)

// Delete contact
router.delete('/:id', deleteContact)

const configureContactRoutes = (app) => {
    app.use("/address", router);
};
  
module.exports = configureContactRoutes;