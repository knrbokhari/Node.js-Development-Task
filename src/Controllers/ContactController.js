const { findAllContactsServices, findSingleContactByIdServices, createContactServices, updateContactServices, deleteContactServices, findContactsByAnyFieldServices, createBulkContactsServices, findContactsByQueryMachingFieldServices } = require("../Services/ContactServices");
const { NotFound, BadRequest } = require("../utils/error");

// get all contacts
exports.getAllContacts = async (req, res) => {
    const  { pageNo, limit } = req.query;
    try {
        if(pageNo <= 0) throw new BadRequest("invalid page number, should start with 1")

        const skip = limit * (pageNo - 1)

        const contacts = await findAllContactsServices(skip, limit, pageNo)
        
        if(contacts.paging.total < skip) throw new BadRequest("invalid page number, Contact not found")
        
        res.status(200).json({...contacts, success: true,})
    } catch (e) {
        res.status(400).send(e.message);
    }
}

// get single contact
exports.getSingleContactById = async (req, res) => {
    const { id } = req.params
    try {
        const contact = await findSingleContactByIdServices(id)

        if(!contact) throw new NotFound("Contact not found");

        res.status(200).json({contact, success: true})
    } catch (e) {
        res.status(400).send(e.message);
    }
}

// get contacts By Query Maching Field
exports.getContactsByQueryMachingField = async (req, res) => {
    const {  search } = req.query;
    try {
        const contacts = await findContactsByQueryMachingFieldServices( search )

        if(!contacts.length) throw new NotFound("Contact not found");

        res.status(200).json({contacts, success: true})
    } catch (e) {
        res.status(400).send(e.message);
    }
}

// create contact
exports.createNewContact = async (req, res) => {
    const data = req.body
    try {
        const newContact = await createContactServices(data)
        res.status(201).json({
            success: true,
            newContact,
            msg: "New contact added successfully",
          })
    } catch (e) {
        res.status(400).send(e.message);
    }
}

// create bulk contact
exports.createMultipleContacts = async (req, res) => {
    const data = req.body
    try {
        const newContact = await createBulkContactsServices(data)
        res.status(201).json({
            success: true,
            newContact,
            msg: "New contacts added successfully",
          })
    } catch (e) {
        res.status(400).send(e.message);
    }
}

// update contact
exports.updateContact = async (req, res) => {
    const { id } = req.params
    const data = req.body
    try {
        const updateContact = await updateContactServices(id, data)
        res.status(200).json({ success: true, updateContact, msg: "Contact update successfully"})
    } catch (e) {
        res.status(400).send(e.message);
    }
}

// Delete contact
exports.deleteContact = async (req, res) => {
    const { id } = req.params 
    try {
        const contact = await findSingleContactByIdServices(id)
        if(!contact) throw new NotFound("Contact not found");

        await deleteContactServices(id)
        res.status(202).json({ success: true, msg: "Contact deleted successfully"});
    } catch (e) {
        res.status(400).send(e.message);
    }
}