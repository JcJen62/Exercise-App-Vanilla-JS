import mongoose from "mongoose";

const Schema = mongoose.Schema
const currentExercisesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
    },
    notes: {
        type: String,
    }
})

export const CurrentExercises = mongoose.model('currentExercises', currentExercisesSchema, "Current")