import mongoose from "mongoose";

const Schema = mongoose.Schema
const futureExercisesSchema = new Schema({
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

export const FutureExercisses = mongoose.model('futureExercises', futureExercisesSchema, "Current")