import mongoose from "mongoose";

const Schema = mongoose.Schema
const pastExercisesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
    },
    notes: {
        type: String,
    }
})

export const PastExercises = mongoose.model('pastExercises', pastExercisesSchema, "Past")