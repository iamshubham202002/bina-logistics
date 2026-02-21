import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true, 
        unique: true
    },
    customerName: String,
    email: String,
    status : {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    location: String,
    estimatedDelivery: Date,
}, { timestamps: true });
export default mongoose.model('Order', orderSchema);