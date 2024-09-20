import mongoose from "mongoose";
import { Category } from "./category.models";

const productSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    productImage:{
        type:String, 
        required:true,
    },
    stock:{
        type:Number,
        required:true,
        default:0,
    },
    Category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Category,
        required:true,
    },
    seller:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true,
    },
    reviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
    }],
},{timestamps:true})

export const Product = mongoose.model('Product',productSchema);