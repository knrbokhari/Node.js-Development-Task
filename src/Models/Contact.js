const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "is required"]
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
            type: Number,
            require: [true, "is required"]
        },
        address1: {
            type: String,
            require: [true, "is required"]
        },
        address2: {
            type: String,
        }
    },
    {timestamps: true }
)

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;