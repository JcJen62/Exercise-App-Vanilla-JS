import mongoose from "mongoose";

const Schema = mongoose.Schema
const presentExercisesSchema = new Schema({
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

export const PresentExercisses = mongoose.model('presentExercises', presentExercisesSchema, "Current")