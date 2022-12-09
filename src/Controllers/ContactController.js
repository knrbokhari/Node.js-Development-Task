const { findAllContactsServices, findSingleContactByIdServices, createContactServices, updateContactServices, deleteContactServices, findContactsByAnyFieldServices, createBulkContactsServices, findContactsByQueryMachingFieldServices } = require("../Services/ContactServices");
const { NotFound, BadRequest } = require("../utils/error");
const asyncHandler = require("../utils/async");

// get all contacts
exports.getAllContacts = asyncHandler( async (req, res) => {
    const  { pageNo, limit } = req.query;
    const skip = limit * (pageNo - 1)

    if(pageNo <= 0) throw new BadRequest("invalid page number, should start with 1")

    const contacts = await findAllContactsServices(skip, limit, pageNo)
    
    if(contacts.paging.total < skip) throw new BadRequest("invalid page number, Contact not found")
    
    res.status(200).json({...contacts, success: true,})
})

// get single contact
exports.getSingleContactById = asyncHandler ( async (req, res) => {
    const { id } = req.params
    const contact = await findSingleContactByIdServices(id)

    if(!contact) throw new NotFound("Contact not found");

    res.status(200).json({contact, success: true})
})

// get contacts By Query Maching Field
exports.getContactsByQueryMachingField = asyncHandler ( async (req, res) => {
    const {  search } = req.query;
    const contacts = await findContactsByQueryMachingFieldServices( search )

    if(!contacts.length) throw new NotFound("Contact not found");

    res.status(200).json({contacts, success: true})
})

// create contact
exports.createNewContact = asyncHandler ( async (req, res) => {
    const data = req.body
    const newContact = await createContactServices(data)
    res.status(201).json({
        success: true,
        newContact,
        msg: "New contact added successfully",
        })
})

// create bulk contact
exports.createMultipleContacts = asyncHandler ( async (req, res) => {
    const data = req.body
    const newContact = await createBulkContactsServices(data)
    res.status(201).json({
        success: true,
        newContact,
        msg: "New contacts added successfully",
        })
})

// update contact
exports.updateContact = asyncHandler ( async (req, res) => {
    const { id } = req.params
    const data = req.body
    const updateContact = await updateContactServices(id, data)
    res.status(200).json({ success: true, updateContact, msg: "Contact update successfully"})
})

// Delete contact
exports.deleteContact = asyncHandler ( async (req, res) => {
    const { id } = req.params 
    const contact = await findSingleContactByIdServices(id)
    if(!contact) throw new NotFound("Contact not found");

    await deleteContactServices(id)
    res.status(202).json({ success: true, msg: "Contact deleted successfully"});
})