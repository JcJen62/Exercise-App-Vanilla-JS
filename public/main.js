
let key = ""

async function getAPIKey() {
    await fetch(`/api/key`)
        .then(response => response.json())
        .then(data => key = data.key)
}

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

async function FetchPastExercises() {
    let pastExercises = {}

    await fetch(`/api/pastExercises`)
        .then(res => res.json())
        .then(data => pastExercises = data)
    return pastExercises
}

async function search(terms) {
    let result = []
    await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${encodeURI(terms.toLowerCase())}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key": key
        }
    })
        .then(response => response.text())
        .then(res => {
            result = JSON.parse(res)
        })
        .catch(error => console.log('error', error));

    return result.slice(0, 10)
}

let searchButton = document.querySelector("#searchInput")
searchButton.addEventListener("click", async () => {
    let searchTerm = document.querySelector("#searchBar").value
    if (searchTerm === "") {
        return
    }
    let results = await search(searchTerm)
    if (results.length === 0) {
        return
    }
    updateList(results)
})

function updateList(arr) {
    let list = document.querySelector("#searchItems");
    list.innerHTML = ''
    arr.forEach(element => {
        const itemDiv = document.createElement("li");
        itemDiv.classList.add("item-div");

        // Creates input for checkmark and appends to item-div
        const itemCheckmark = document.createElement("input");
        itemCheckmark.classList.add("form-check-input");
        itemCheckmark.type = "checkbox";
        itemCheckmark.setAttribute("id", `${element.id}`);
        itemCheckmark.setAttribute("name", `${element.name}`)
        itemDiv.appendChild(itemCheckmark);

        // Creates p for item and appends to item-div
        const item = document.createElement("p");
        item.appendChild(document.createTextNode(`${element.name}`));
        itemDiv.appendChild(item);

        // Append itemDiv to list
        list.appendChild(itemDiv);
    });
}

let addFuture = document.querySelector(".addFuture")
addFuture.addEventListener("click", () => {
    let checked = document.querySelectorAll(".form-check-input")

    checked.forEach(element => {
        if (element.checked) {
            const addFutureExer = async (data) => {
                const response = await fetch(`api/addFuture`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            }
            addFutureExer({ "id": element.id, "name": element.name, "notes": "" })
        }

    })

    document.querySelector(".future-card").innerHTML = ""
    displayFutureExercises()
})

let addCurrent = document.querySelector(".addCurrent")
addCurrent.addEventListener("click", () => {
    let checked = document.querySelectorAll(".form-check-input")

    checked.forEach(element => {
        if (element.checked) {
            const addCurrentExer = async (data) => {
                const response = await fetch(`api/addCurrent`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            }
            addCurrentExer({ "id": element.id, "name": element.name, "notes": "" })
        }
    })

    document.querySelector(".current-card").innerHTML = ""
    displayCurrentExercises()
})

let addPast = document.querySelector(".addPast")
addPast.addEventListener("click", () => {
    let checked = document.querySelectorAll(".form-check-input")

    checked.forEach(element => {
        if (element.checked) {
            const addPastExer = async (data) => {
                const response = await fetch(`api/addPast`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            }
            addPastExer({ "id": element.id, "name": element.name, "notes": "" })
        }
    })

    document.querySelector(".past-card").innerHTML = ""
    displayPastExercises()
})

async function displayFutureExercises() {
    let futureExercises = await FetchFutureExercises();
    let futureDiv = document.querySelector('.future-card')

    futureExercises?.forEach(element => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.setAttribute("style", "width: 18rem;")

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.appendChild(document.createTextNode(`${element.name}`))
        cardBody.appendChild(cardTitle)

        const cardNote = document.createElement('p')
        cardNote.classList.add('card-text')
        cardNote.appendChild(document.createTextNode(`${element.notes}`))
        cardBody.appendChild(cardNote)

        const addToCurrent = document.createElement('a')
        addToCurrent.classList.add('card-link')
        addToCurrent.setAttribute('href', '#')
        addToCurrent.setAttribute('id', `${element.id}`)
        addToCurrent.setAttribute('data-name', element.name)
        addToCurrent.setAttribute('data-notes', element.notes)
        addToCurrent.innerHTML = 'Add To Past'
        cardBody.appendChild(addToCurrent)

        addToCurrent.addEventListener('click', (event) => {
            const addCurrentExer = async (data) => {
                const response = await fetch(`api/addCurrent`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            }
            const deleteFuture = async (data) => {
                const response = await fetch(`api/deleteFuture/${event.currentTarget.id}`, {
                    method: 'DELETE'
                })
            }
            addCurrentExer({ "id": event.currentTarget.id, "name": event.currentTarget.dataset.name, "notes": event.currentTarget.dataset.notes })
            deleteFuture()

            document.querySelector(".future-card").innerHTML = ""
            document.querySelector(".current-card").innerHTML = ""
            displayPastExercises()
            displayCurrentExercises()
        })

        const deleteItem = document.createElement('a')
        deleteItem.classList.add('card-link')
        deleteItem.classList.add('delete-card')
        deleteItem.setAttribute('href', '#')
        deleteItem.setAttribute('id', `${element.id}`)
        deleteItem.innerHTML = 'Delete Exercise'
        cardBody.appendChild(deleteItem)

        deleteItem.addEventListener('click', (event) => {
            const deleteExer = async () => {
                const response = await fetch(`api/deleteFuture/${event.currentTarget.id}`, {
                    method: 'DELETE'
                })
            }
            deleteExer()

            document.querySelector(".future-card").innerHTML = ""
            displayFutureExercises()
        })

        cardDiv.appendChild(cardBody)
        futureDiv.appendChild(cardDiv)
    })
}

async function displayPastExercises() {
    let pastExercises = await FetchPastExercises();
    let pastDiv = document.querySelector('.past-card')

    pastExercises?.forEach(element => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.setAttribute("style", "width: 18rem;")

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.appendChild(document.createTextNode(`${element.name}`))
        cardBody.appendChild(cardTitle)

        const cardNote = document.createElement('p')
        cardNote.classList.add('card-text')
        cardNote.appendChild(document.createTextNode(`${element.notes}`))
        cardBody.appendChild(cardNote)

        const addNotes = document.createElement('a')
        addNotes.classList.add('card-link')
        addNotes.setAttribute('href', '#')
        addNotes.innerHTML = 'Alter Notes'
        cardBody.appendChild(addNotes)

        const deleteItem = document.createElement('a')
        deleteItem.classList.add('card-link')
        deleteItem.classList.add('delete-card')
        deleteItem.setAttribute('href', '#')
        deleteItem.setAttribute('id', `${element.id}`)
        deleteItem.innerHTML = 'Delete Exercise'
        cardBody.appendChild(deleteItem)

        deleteItem.addEventListener('click', (event) => {
            const deleteExer = async () => {
                const response = await fetch(`api/deletePast/${event.currentTarget.id}`, {
                    method: 'DELETE'
                })
            }
            deleteExer()

            document.querySelector(".past-card").innerHTML = ""
            displayPastExercises()
        })

        cardDiv.appendChild(cardBody)
        pastDiv.appendChild(cardDiv)
    })
}

async function displayCurrentExercises() {
    let currentExercises = await FetchCurrentExercises();
    let currentDiv = document.querySelector('.current-card')

    currentExercises?.forEach(element => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.setAttribute("style", "width: 18rem;")

        const cardBody = document.createElement('div')
        cardBody.classList.add('card-body')

        const cardTitle = document.createElement('h5')
        cardTitle.classList.add('card-title')
        cardTitle.appendChild(document.createTextNode(`${element.name}`))
        cardBody.appendChild(cardTitle)

        const cardNote = document.createElement('p')
        cardNote.classList.add('card-text')
        cardNote.appendChild(document.createTextNode(`${element.notes}`))
        cardBody.appendChild(cardNote)

        const deleteNotes = document.createElement('a')
        deleteNotes.classList.add('card-link')
        deleteNotes.setAttribute('href', '#')
        deleteNotes.innerHTML = 'Delete Notes'
        cardBody.appendChild(deleteNotes)

        const addNotes = document.createElement('a')
        addNotes.classList.add('card-link')
        addNotes.setAttribute('href', '#')
        addNotes.innerHTML = 'Alter Notes'
        cardBody.appendChild(addNotes)

        const addToPast = document.createElement('a')
        addToPast.classList.add('card-link')
        addToPast.setAttribute('href', '#')
        addToPast.setAttribute('id', `${element.id}`)
        addToPast.setAttribute('data-name', element.name)
        addToPast.setAttribute('data-notes', element.notes)
        addToPast.innerHTML = 'Add To Past'
        cardBody.appendChild(addToPast)

        addToPast.addEventListener('click', (event) => {
            const addPastExer = async (data) => {
                const response = await fetch(`api/addPast`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            }
            const deleteCurrent = async (data) => {
                const response = await fetch(`api/deleteCurrent/${event.currentTarget.id}`, {
                    method: 'DELETE'
                })
            }
            addPastExer({ "id": event.currentTarget.id, "name": event.currentTarget.dataset.name, "notes": event.currentTarget.dataset.notes })
            deleteCurrent()

            document.querySelector(".past-card").innerHTML = ""
            document.querySelector(".current-card").innerHTML = ""
            displayPastExercises()
            displayCurrentExercises()
        })

        cardDiv.appendChild(cardBody)
        currentDiv.appendChild(cardDiv)
    })
}

getAPIKey()
displayPastExercises()
displayCurrentExercises()
displayFutureExercises()