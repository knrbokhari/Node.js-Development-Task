const Contact = require("../Models/Contact")

// find All Contacts Services
exports.findAllContactsServices = async (skip, limit, pageNo) => {
    const contacts = await Contact.find()
    .limit(limit)
    .skip(skip)
    const count = await Contact.count()
    return {
        data: contacts, 
        paging: {
        total: count,
        page:  parseInt(pageNo),
        pages: Math.ceil(count / limit),
    }};
};

// find Single Contact Services
exports.findSingleContactByIdServices = async (id) => {
    const contact = await Contact.findById(id);
    return contact;
};

// find Contacts By Query Maching Field
exports.findContactsByQueryMachingFieldServices = async ( search ) => {
    const contacts = await Contact.find({ $text: { $search : search } });
    return contacts;
};

// create bulk Contacts Services
exports.createBulkContactsServices = async (data) => {
    const contacts = await Contact.insertMany(data);
    return contacts;
};

// create Contact Services
exports.createContactServices = async (data) => {
    const contact = await Contact.create(data);
    return contact;
};

// update Contact Services
exports.updateContactServices = async (id, data) => {
    const contact = await Contact.findByIdAndUpdate(id, data, {new: true});
    return contact;
};

// delete Contact Services
exports.deleteContactServices = async (id) => {
    const contact = await Contact.findByIdAndDelete(id);
    return contact;
};