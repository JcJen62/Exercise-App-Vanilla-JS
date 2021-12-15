import { PastExercises} from "../models/past.model.js"
import { CurrentExercises } from "../models/current.model.js";
import { FutureExercises } from "../models/future.model.js";
import dotenv from 'dotenv'
import { v4 as uuidv4 } from 'uuid';

// Search Exercises
export const getKey = async (req, res) => {
    try {
        let response = {"key": process.env.API_KEY}
        res.status(200).json(response)
    }
    catch (err) {
        console.log(err)
    }
}

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

// Add Past Exercise
export const addPastExercise = (req, res) => {
    console.log(req)
    const newPastExercise = new PastExercises({
        name: req.body.name,
        notes: "",
        id: uuidv4()
    })
    try{
        console.log(req.body)
        newPastExercise.save();
        res.status(200).json({Message: "Exercise added successfully!"})
    }
    catch (err){
        res.status(400).json({Message: "Exercise not added"})
    }
}

// Delete Past Exercise
export const deletePastExercises = async (req, res) => {
    try{
        PastExercises.findOneAndDelete({id: req.params.id}, (err, exercise) => {
            console.log(exercise)
            if (err) {
                res.status(400).json({Message: `Could not find exercise to delete: ${err}`})
            }
            res.status(200).json({ Message: "Successfully deleted past exercise"})
        })
    }
    catch (err){
        res.status(400).json({ Message: `Could not delete exercise: ${err}`})
    }
}

// Edit Past Exercise
export const editPastExercise = async (req, res) => {
    let exercise = {
        name: req.body.name,
        id: req.body.id,
        notes: req.body.notes
    }
    console.log(exercise)
    try {
        console.log(req.body)
        const edit = await PastExercises.findOneAndUpdate({ id: req.body.id }, exercise)
        res.status(200).json({ Message: "Updated exercise"})
    }
    catch (err){
        console.log(err)
        res.status(400).json({ Message: "Couldn't update exercise"})
    }
}

// Start Current Exercises
// Get All
export const getAllCurrentExercises = async (req, res) => {
    try {
        const currentExercises = await CurrentExercises.find().lean().exec()
        res.status(200).json(currentExercises)
    }
    catch (err) {
        console.log(err)
    }
    
}

// Add Current Exercise
export const addCurrentExercise = (req, res) => {
    const newCurrentExercise = new CurrentExercises({
        name: req.body.name,
        notes: "",
        id: uuidv4()
    })
    try{
        console.log(req.body)
        newCurrentExercise.save();
        res.status(200).json({Message: "Exercise added successfully!"})
    }
    catch (err){
        res.status(400).json({Message: "Exercise not added"})
    }
}

// Delete Current Exercise
export const deleteCurrentExercises = async (req, res) => {
    try{
        CurrentExercises.findOneAndDelete({id: req.params.id}, (err, exercise) => {
            console.log(exercise)
            if (err) {
                res.status(400).json({Message: `Could not find exercise to delete: ${err}`})
            }
            res.status(200).json({ Message: "Successfully deleted past exercise"})
        })
    }
    catch (err){
        res.status(400).json({ Message: `Could not delete exercise: ${err}`})
    }
}

// Edit Current Exercises
export const editCurrentExercise = async (req, res) => {
    let exercise = {
        name: req.body.name,
        id: req.body.id,
        notes: req.body.notes
    }
    console.log(exercise)
    try {
        console.log(req.body)
        const edit = await CurrentExercises.findOneAndUpdate({ id: req.body.id }, exercise)
        res.status(200).json({ Message: "Updated exercise"})
    }
    catch (err){
        console.log(err)
        res.status(400).json({ Message: "Couldn't update exercise"})
    }
}

// Start Future Exericise
// Get All
export const getAllFutureExercises = async (req, res) => {
    try {
        const futureExercises = await FutureExercises.find().lean().exec()
        res.status(200).json(futureExercises)
    }
    catch (err) {
        console.log(err)
    }
    
}

// Add Future Exercise
export const addFutureExercise = (req, res) => {
    const newFutureExercise = new FutureExercises({
        name: req.body.name,
        notes: "",
        id: uuidv4()
    })
    try{
        newFutureExercise.save();
        res.status(200).json({Message: "Exercise added successfully!"})
    }
    catch (err){
        res.status(400).json({Message: "Exercise not added"})
    }
}

// Delete Future Exercise
export const deleteFutureExercises = async (req, res) => {
    try{
        FutureExercises.findOneAndDelete({id: req.params.id}, (err, exercise) => {
            if (err) {
                res.status(400).json({Message: `Could not find exercise to delete: ${err}`})
            }
            res.status(200).json({ Message: "Successfully deleted past exercise"})
        })
    }
    catch (err){
        res.status(400).json({ Message: `Could not delete exercise: ${err}`})
    }
}

// Edit Future Exercises
export const editFutureExercise = async (req, res) => {
    let exercise = {
        name: req.body.name,
        id: req.body.id,
        notes: req.body.notes
    }
    try {
        const edit = await FutureExercises.findOneAndUpdate({ id: req.body.id }, exercise)
        res.status(200).json({ Message: "Updated exercise"})
    }
    catch (err){
        console.log(err)
        res.status(400).json({ Message: "Couldn't update exercise"})
    }
}