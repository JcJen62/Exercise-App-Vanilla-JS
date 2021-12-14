import mongoose from "mongoose";

const Schema = mongoose.Schema
const futureExercisesSchema = new Schema({
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

export const FutureExercises = mongoose.model('futureExercises', futureExercisesSchema, "Future")