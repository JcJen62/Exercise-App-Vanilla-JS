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
        deleteCurrentExercises} 
    from "../controllers/api.controller.js";


const apiRouter = Router();

//API Key Route
apiRouter.get('/key', getKey)

// Past
apiRouter.get("/pastExercises", getAllPastExercises)
apiRouter.delete("/deletePast/:id", deletePastExercises)
apiRouter.post("/addPast", addPastExercise)

// Current
apiRouter.get("/currentExercises", getAllCurrentExercises)
apiRouter.post("/addCurrent", addCurrentExercise)
apiRouter.delete("/deleteCurrent/:id", deleteCurrentExercises)

// Future
apiRouter.get("/futureExercises", getAllFutureExercises)
apiRouter.post("/addFuture", addFutureExercise)
apiRouter.delete("/deleteFuture/:id", deleteFutureExercises)

export default apiRouter;