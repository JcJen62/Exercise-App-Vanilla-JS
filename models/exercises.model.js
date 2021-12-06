import mongoose from "mongoose";

const Schema = mongoose.Schema
const exercisesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
    }
})

export const Exercisses = mongoose.model('exercises', exercisesSchema, "Exercises")