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

const paging = {
    total: contacts.length,
    page: 1,
    pages: 1,
}

// find All Contacts
exports.findAllContactsServices = (skip, limit, pageNo) => {
    return {data: contacts, paging};
};

// find Single Contact Services
exports.findSingleContactByIdServices = async (id) => {
    const contact = await contacts.find((contact => contact._id === id));
    return contact;
};

// find Contacts By Query Maching Field
exports.findContactsByQueryMachingFieldServices = async ( search ) => {
    const result = await contacts.filter(i => i.name.includes(search) || i.email.includes(search) || i.phone.includes(search) || i.address1.includes(search) || i.address2.includes(search));
    return result;
};

// create Contact Services
exports.createContactServices = async (data) => {
    const contact = new Contact(data);
    contacts.push(contact)
    return contact;
};

// create bulk Contacts Services
exports.createBulkContactsServices = async (data) => {
    const contacts = data.map(i => new Contact(i))
    return contacts;
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