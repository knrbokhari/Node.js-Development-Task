const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "is required"]
        },
        email: {
            type: String,
            required: [true, "is required"],
            validate: {
                validator: function (str) {
                    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(str);
                },
                message: (props) => `${props.value} is not a valid email`,
            },
        },
        phone: {
            type: String,
            required: [true, "is required"]
        },
        address1: {
            type: String,
            required: [true, "is required"]
        },
        address2: {
            type: String,
        }
    },
    {timestamps: true }
)
// 
ContactSchema.index( { name: "text", email: "text", phone: "text", address1: "text" } )

const Address = mongoose.model("Contact", ContactSchema);

module.exports = Address;