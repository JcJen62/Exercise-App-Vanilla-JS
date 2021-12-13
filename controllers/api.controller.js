import { PastExercisses } from "../models/past.model";
import { CurrentExercisses } from "../models/current.model";
import { FutureExercisses } from "../models/future.model";
import { Exercises } from '../models/exercises.model';
import { v4 as uuidv4 } from 'uuid';

// Get Exercises Search
export const getExercises = async (req, res) => {
    
}


// Start Past Exercises
// Get All
export const getAllPastExercise = async (req, res) => {
    try {
        const pastExercises = await PastExercisses.find().lean().exec()
        res.status(200).json(pastExercises)
    }
    catch (err) {
        console.log(err)
    }
    
}

// Delete Past Exercise
export const deletePastExercise = async (req, res) => {
    try{
        PastExercisses.findOneAndDelete({title: req.params.title}, (err, exercise) => {
            console.log(exericse)
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
export const getAllCurrentExercise = async (req, res) => {
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
export const getAllFutureExercise = async (req, res) => {
    try {
        const futureExercises = await FutureExercisses.find().lean().exec()
        res.status(200).json(futureExercises)
    }
    catch (err) {
        console.log(err)
    }
    
}