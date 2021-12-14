import mongoose from "mongoose";

const Schema = mongoose.Schema
const currentExercisesSchema = new Schema({
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

export const CurrentExercisses = mongoose.model('currentExercises', currentExercisesSchema, "Current")