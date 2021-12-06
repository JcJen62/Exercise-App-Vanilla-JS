import { PastExercisses } from "../models/past.model";
import { CurrentExercisses } from "../models/current.model";
import { FutureExercisses } from "../models/future.model";

// Start Past
export const getAllPastExercise = async (req, res) => {
    try {
        const pastExercises = await PastExercisses.find().lean().exec()
        res.status(200).json(pastExercises)
    }
    catch (err) {
        console.log(err)
    }
    
}