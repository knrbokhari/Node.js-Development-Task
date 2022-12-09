const request = require('supertest')
const { app } = require('../src/app')

jest.mock("../src/Services/ContactServices");
jest.mock("../src/Middleware/verifyJWT");

describe('GET /api/contuct?pageNo=1&limit=3', () => { 
    test('responds with an array of contact', async () => { 
        await request(app)
            .get("/api/contuct?pageNo=1&limit=3")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((res) => {
                expect(res.body.success).toEqual(true);
                expect(res.body.data.length).toBeGreaterThanOrEqual(0);
            });
    })
})

describe('GET /api/contuct/:id', () => { 
    test('responds with a single contact', async () => { 
        await request(app)
            .get("/api/contuct/0091da46dc7f88bd3fa3e300")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((res) => {
                expect(res.body.success).toEqual(true);
                expect(res.body.contact).toEqual(expect.any(Object));
                const {_id, name, email, phone, address1} = res.body.contact;
                expect(_id).toEqual(expect.any(String));
                expect(name).toEqual(expect.any(String));
                expect(email).toEqual(expect.any(String));
                expect(phone).toEqual(expect.any(String));
                expect(address1).toEqual(expect.any(String));
            });
    })
})

describe('GET api/contuct/query/field?search=naeem', () => { 
    test('responds with an array of contact', async () => { 
        await request(app)
            .get("/api/contuct/query/field?search=naeem")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(200)
            .then((res) => {
                expect(res.body.success).toEqual(true);
                expect(res.body.contacts.length).toBeGreaterThanOrEqual(0);
            });
    })
})

describe('POST /api/contuct', () => { 
    const newContact = {
        "name": "kazi naeem",
        "email": "newContact@gmail.com",
        "phone": "01700005000",
        "address1": "Dhaka, Bangladesh",
    }

    test('responds with a new contact', async () => { 
        await request(app)
            .post("/api/contuct")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .send(newContact)
            .expect(201)
            .then((res) => {
                expect(res.body.success).toEqual(true);
                expect(res.body.msg).toEqual('New contact added successfully');
                const {_id, name, email, phone, address1} = res.body.newContact;
                expect(_id.length).toEqual(24);
                expect(name).toEqual(newContact.name);
                expect(email).toEqual(newContact.email);
                expect(phone).toEqual(newContact.phone);
                expect(address1).toEqual(newContact.address1);
            });
    })
})

describe('POST /api/contuct/multiple', () => { 
    const newContact = [
        {
            "name": "kazi naeem",
            "email": "contact01@gmail.com",
            "phone": "01701005000",
            "address1": "Bangladesh",
        },
        {
            "name": "naeem",
            "email": "contact02@gmail.com",
            "phone": "01709005000",
            "address1": "Dhaka, Bangladesh",
        }
    ]

    test('responds with a new array of contact', async () => { 
        await request(app)
            .post("/api/contuct/multiple")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .send(newContact)
            .expect(201)
            .then((res) => {
                expect(res.body.success).toEqual(true);
                expect(res.body.msg).toEqual('New contacts added successfully');
                const {_id, name, email, phone, address1} = res.body.newContact[0];
                expect(_id.length).toEqual(24);
                expect(name).toEqual(newContact[0].name);
                expect(email).toEqual(newContact[0].email);
                expect(phone).toEqual(newContact[0].phone);
                expect(address1).toEqual(newContact[0].address1);
            });
    })
})

describe('PATCH /api/contuct/:id', () => { 
    const updateContact = {
        "_id": "0091da46dc7f88bd3fa3e300",
        "name": "kazi naeem rayhan",
        "email": "updateContact@gmail.com",
        "phone": "01705005000",
        "address1": "Dhaka, Bangladesh",
    }
    test('responds with a updated contact', async () => { 
        await request(app)
            .patch("/api/contuct/0091da46dc7f88bd3fa3e300")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .send(updateContact)
            .expect(200)
            .then((res) => {
                expect(res.body.success).toEqual(true);
                expect(res.body.msg).toEqual('Contact update successfully');
                const {_id, name, email, phone, address1} = res.body.updateContact;
                expect(_id.length).toEqual(24);
                expect(name).toEqual(updateContact.name);
                expect(email).toEqual(updateContact.email);
                expect(phone).toEqual(updateContact.phone);
                expect(address1).toEqual(updateContact.address1);
            });
    })
})


describe('DELETE /api/contuct', () => { 
    test('responds with an array of contact', async () => { 
        await request(app)
            .delete("/api/contuct/0091da46dc7f88bd3fa3e300")
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(202)
            .then((res) => {
                expect(res.body.success).toEqual(true);
                expect(res.body.msg).toEqual('Contact deleted successfully');
            });
    })
})


// describe('GET /api/contuct', () => { 
//     test('responds with an array of contact', async () => { 
//         await request(app)
//             .get("/api/contuct")
//             .set("Accept", "application/json")
//             .expect("Content-Type", /json/)
//             .expect(200)
//             .then((res) => {
//                 expect(res.body.success).toEqual(true);
//                 expect(res.body.contacts.length).toBeGreaterThanOrEqual(0);
//             });
//     })
// })