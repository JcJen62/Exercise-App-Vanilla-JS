import * as dotenv from "dotenv";

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

async function search(term) {
    var options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
          'x-rapidapi-host': process.env.RAPIDAPI_HOST,
          'x-rapidapi-key': process.env.RAPIDAPI_KEY
        }
      };


    let result = []
    await fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${encodeURI(term)}`, options)
        .then(response => response.text())
        .then(res => {
            result = JSON.parse(res)
        })
        .catch(error => console.log('error', error));

    return result
}

