const { findAllContactsServices, findSingleContactByIdServices, createContactServices, updateContactServices, deleteContactServices, findContactsByAnyFieldServices } = require("../Services/ContactServices");
const { NotFound, BadRequest } = require("../utils/error");

// get all contacts
exports.getAllContacts = async (req, res) => {
    const  {pageNo, limit} = req.query;
    try {
        if(pageNo <= 0) throw new BadRequest("invalid page number, should start with 1")

        const skip = limit * (pageNo - 1)

        const contacts = await findAllContactsServices(skip, limit)

        if(contacts[0]?.pageInfo[0]?.contactLength < skip) throw new BadRequest("invalid page number, Contact not found")

        res.status(200).json({contacts, success: true,})
    } catch (e) {
        res.status(400).send(e.message);
    }
}

// get single contact
exports.getSingleContact = async (req, res) => {
    const { id } = req.params
    try {
        const contact = await findSingleContactByIdServices(id)

        if(!contact) throw new NotFound("Contact not found");

        res.status(200).json({contact, success: true})
    } catch (e) {
        res.status(400).send(e.message);
    }
}

// get matching contact
exports.getMatchingContact = async (req, res) => {
    const { any } = req.params
    try {
        const contacts = await findContactsByAnyFieldServices(any)

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