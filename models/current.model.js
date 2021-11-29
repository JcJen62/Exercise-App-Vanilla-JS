import mongoose from "mongoose";

const Schema = mongoose.Schema
const currentExercisesSchema = new Schema({
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

export const Todos = mongoose.model('currentExercises', currentExercisesSchema, "Current")