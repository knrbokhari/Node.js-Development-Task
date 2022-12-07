const Contact = require("../Models/Contact")

// find All Contacts Services
exports.findAllContactsServices = async () => {
    const contacts = await Contact.find();
    return contacts;
};

// find Single Contact Services
exports.findSingleContactServices = async (data) => {
    const contact = await Contact.findOne({name: data});
    return contact;
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