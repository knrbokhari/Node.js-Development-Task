const Contact = require("../Models/Contact")

// find All Contacts Services
exports.findAllContactsServices = async (skip, limit) => {
    const contacts = await Contact.aggregate([
        {
            $facet: {
                data: [ { $skip: parseInt(skip) }, { $limit: parseInt(limit) } ],
                pageInfo: [
                    { $group: { _id: null, contactLength: { $sum: 1 } } },
                  ],
            },
        },
    ]);
    return contacts;
};

// find Single Contact Services
exports.findSingleContactByIdServices = async (id) => {
    const contact = await Contact.findById(id);
    return contact;
};

// find Contacts By Any Field Services
exports.findContactsByAnyFieldServices = async (any) => {
    const contacts = await Contact.find({$or:[{name: any}, {email: any}, {phone: any}, {address1: any}, {address2: any}]});
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