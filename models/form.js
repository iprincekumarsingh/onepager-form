const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    }
}, { timestamps: true });

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
