import mongoose from "mongoose";

const Schema = mongoose.Schema
const pastExercisesSchema = new Schema({
    title: {
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

export const PastExercisses = mongoose.model('pastExercises', pastExercisesSchema, "Past")