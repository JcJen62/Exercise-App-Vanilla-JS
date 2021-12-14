import { PastExercises} from "../models/past.model.js"
import { CurrentExercisses } from "../models/current.model.js";
import { FutureExercisses } from "../models/future.model.js";

// Start Past Exercises
// Get All
export const getAllPastExercises = async (req, res) => {
    try {
        const pastExercises = await PastExercises.find().lean().exec()
        console.log(pastExercises)
        res.status(200).json(pastExercises)
    }
    catch (err) {
        console.log(err)
    }
    
}

// Delete Past Exercise
export const deletePastExercises = async (req, res) => {
    try{
        PastExercises.findOneAndDelete({title: req.params.title}, (err, exercise) => {
            console.log(exercise)
            if (err) {
                res.status(400).json({Message: `Could not find exercise to delete: ${err}`})
            }
            res.status(200).json({ Message: "Successfully deleted past exercise"})
        })
    }
    catch (err){
        res.status(400).json({ Message: `Could not delete todo: ${err}`})
    }
}

// Start Current Exercises
// Get All
export const getAllCurrentExercises = async (req, res) => {
    try {
        const currentExercises = await CurrentExercisses.find().lean().exec()
        res.status(200).json(currentExercises)
    }
    catch (err) {
        console.log(err)
    }
    
}



// Start Future Exericise
// Get All
export const getAllFutureExercises = async (req, res) => {
    try {
        const futureExercises = await FutureExercisses.find().lean().exec()
        res.status(200).json(futureExercises)
    }
    catch (err) {
        console.log(err)
    }
    
}