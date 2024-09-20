import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
});

const orderSchema = new mongoose.Schema({
    customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Customer',
        required:true
    },
    orderItems:{
        type: [orderItemSchema],
        required:true
    },
    totalPrice:{
        type:Number,
        required:true
    },
    orderDate:{
        type: Date,
        default: Date.now
    },
    status:{
        type:String,
        enum:['Pending','Shipped','Delivered'],
        default:'Pending'
    },
    trackingNumber:{
        type: String
    },
    deliveryAddress:{
        type: String,
        required:true
    },
    paymentMethod:{
        type: String,
        required:true
    },
    paymentStatus:{
        type: String,
        enum:['Unpaid','Paid','Refunded'],
        default:'Unpaid'
    },
    paymentDetails:{
        type: mongoose.Schema.Types.Mixed
    },
    shippingDetails:{
        type: mongoose.Schema.Types.Mixed
    },
    comments:{
        type: String
    },
    cancelledBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    cancelledReason:{
        type: String
    },
    cancelledDate:{
        type: Date
    },
    returnedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    returnedReason:{
        type: String
    },
    returnedDate:{
        type: Date
    }},

{timestamps:true}
);

export const Order = mongoose.model('Order', orderSchema);