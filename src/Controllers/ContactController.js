const { findAllContactsServices, findSingleContactByIdServices, createContactServices, updateContactServices, deleteContactServices } = require("../Services/ContactServices");
const { NotFound } = require("../utils/error");

// get all contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await findAllContactsServices()
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