//username: anirban  password: 7735

import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://anirban:7735@cluster0.k9cpdpy.mongodb.net/food-del').then(()=>console.log("DB connected"));
}