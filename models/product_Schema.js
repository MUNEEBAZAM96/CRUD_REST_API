
import mongoose from 'mongoose';

const Product_Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter the name, without name product does not exist']
    },
    Quantity: {
        type: Number,
        required: [true, 'please enter the quantity, without quantity product does not exist'],
        default: 0
    },
    price: {
        type: Number,
        required: [true, 'please enter the price, without price product does not exist'],
        default: 0
    },
    image: {
        type: String,
        required: false,
        default: ''
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', Product_Schema);

export default Product;
