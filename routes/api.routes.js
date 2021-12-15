import { Router } from "express";
import { getAllPastExercises,
        deletePastExercises,  
        getAllCurrentExercises, 
        getAllFutureExercises,
        getKey,
        addPastExercise,
        addCurrentExercise,
        addFutureExercise,
        deleteFutureExercises,
        deleteCurrentExercises,
        editCurrentExercise,
        editPastExercise,
        editFutureExercise} 
    from "../controllers/api.controller.js";


const apiRouter = Router();

//API Key Route
apiRouter.get('/key', getKey)

// Past
apiRouter.get("/pastExercises", getAllPastExercises)
apiRouter.delete("/deletePast/:id", deletePastExercises)
apiRouter.post("/addPast", addPastExercise)
apiRouter.put('/editPast/:id', editPastExercise)

// Current
apiRouter.get("/currentExercises", getAllCurrentExercises)
apiRouter.post("/addCurrent", addCurrentExercise)
apiRouter.delete("/deleteCurrent/:id", deleteCurrentExercises)
apiRouter.put("/editCurrent/:id", editCurrentExercise)

// Future
apiRouter.get("/futureExercises", getAllFutureExercises)
apiRouter.post("/addFuture", addFutureExercise)
apiRouter.delete("/deleteFuture/:id", deleteFutureExercises)
apiRouter.put("/editFuture/:id", editFutureExercise)

export default apiRouter;