const Contact = require("../../Models/Contact")

const contacts = [
    {
        "_id": "0091da46dc7f88bd3fa3e300",
        "name": "naeem",
        "email": "naeem@gmail.com",
        "phone": "01700000000",
        "address1": "dhaka, Bangladesh",
        "createdAt": "2022-12-08T12:36:22.495Z",
        "updatedAt": "2022-12-08T12:36:22.495Z",
        "__v": 0
    },
]

const pageInfo = [
    {
        "_id": null,
        "contactLength": contacts.length
    }
]

// find All Contacts
exports.findAllContactsServices = (skip, limit) => {
    return [{contacts, pageInfo}];
};

// find Single Contact Services
exports.findSingleContactByIdServices = async (id) => {
    const contact = await contacts.find((contact => contact._id === id));
    return contact;
};

// find Contacts By Any Field Services
exports.findContactsByAnyFieldServices = async (any) => {
    const result = await contacts.filter((i => i.name === any || i.email === any || i.phone  === any || i.address1 === any || i.address2 === any ))
    return result;
};

// create Contact Services
exports.createContactServices = async (data) => {
    const contact = new Contact(data);
    contacts.push(contact)
    return contact;
};

// update Contact Services
exports.updateContactServices = async (id, data) => {
    let contact = await contacts.find((contact => contact._id === id));
    contact = data
    return contact;
};

// delete Contact Services
exports.deleteContactServices = async (id) => {
    return [];
};