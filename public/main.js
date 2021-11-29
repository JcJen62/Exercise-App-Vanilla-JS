async function FetchCurrentExercises() {
    let currentExercises = {}

    await fetch(`/api/currentExercises`)
        .then(response => response.json())
        .then(data => currentExercises = data);
    return currentExercises
}

async function FetchFutureExercises() {
    let futureExercises = {}

    await fetch(`/api/futureExercises`)
        .then(response => response.json())
        .then(data => futureExercises = data);
    return futureExercises
}

async function FetchPreviousExercises() {
    let previousExercises = {}

    await fetch(`/api/previousExercises`)
        .then(response => response.json())
        .then(data => previousExercises = data);
    return previousExercises
}