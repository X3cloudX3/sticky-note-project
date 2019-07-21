//dom conection to object
const movie_DOM = {
    create_card_form: document.getElementById("myform"),
    movie_name: document.getElementById("movie_name"),
    movie_year: document.getElementById("task_Date"),
    task_description: document.getElementById("task_description"),
    main_container: document.getElementById("main_container"),
}
//my array
let arrayOfData = [


];


//drawing in the dom
function draw() {
    clear()
    //running throgh the array(that gets extra values when i press the savebtn )
    for (let i = 0; i < arrayOfData.length; i++) {

        drawCard(arrayOfData[i])


    }
    // clearForm()
}
function clear() {
    movie_DOM.main_container.innerHTML = ""
}
// function clear() {
//     movie_DOM.main_container.innerHTML = ""
// }

function drawCard(movie) {
    const { main_container } = movie_DOM;
    const movieCard = createNewCard(movie);
    if (!movieCard) {
        return;
    }
    main_container.append(movieCard)


}

function createNewCard(movie) {
    const { movie_name, movie_year, task_description } = movie;
    if (!movie_name || !movie_year || !task_description) return;
    const stickyNoteDiv = document.createElement("div");
    stickyNoteDiv.className = "cardBgImage p-5"
    // stickyNoteDiv.style = "width: 50px"
    // stickyNoteDiv.style = "height: 150px"
    // stickyNoteDiv.style.border = "black solid 3px"
    stickyNoteDiv.id = movie_name

    const cardMain = document.createElement("div");
    cardMain.className = "card mx-5 mt-5 d-inline-block ";
    cardMain.style = "width: 25rem;"
    cardMain.style = "height: 10rem;"
    cardMain.style.backgroundColor = "rgba(255, 255, 255, 0)"
    // cardMain.id = movie_name

    const cardBody1 = document.createElement("div");
    cardBody1.className = "card-body";

    const cardHeader = document.createElement("h4");
    cardHeader.innerHTML = movie_name

    cardBody1.append(cardHeader)

    const cardDescription = document.createElement("p");
    cardDescription.innerHTML = task_description

    cardBody1.append(cardDescription)

    const cardList = document.createElement("ul");
    cardList.className = "list-group list-group-flush";

    const li1 = document.createElement("li");


    li1.innerHTML = movie_year;

    li1.className = "list-group-item";


    cardList.append(li1);

    const deleteButton = document.createElement("Button")
    deleteButton.innerText = "X";

    deleteButton.className = "btn btn-danger float-right glyphicon glyphicon-remove";
    deleteButton.addEventListener("click", deleteCarHandler)


    // cardBody2.append(deleteButton)

    cardMain.append(deleteButton, cardBody1, cardList);
    stickyNoteDiv.append(cardMain)

    cardMain.addEventListener("mouseover", function () {
        deleteButton.style.visibility = "visible";




    })
    cardMain.addEventListener("mouseout", function () {
        deleteButton.style.visibility = "hidden"


    })

    movie_DOM.main_container.append(stickyNoteDiv)
}


function saveMovie() {
    const { movie_name, movie_year, task_description } = movie_DOM

    const index = findI(arrayOfData, movie_name.value)
    if (index !== undefined) {
        draw()

        return;
    }
    arrayOfData.push(new MoviesConst(movie_name.value, movie_year.value, task_description.value))

    draw()


}

function deleteCard(id) {
    const i = findI(arrayOfData, id);
    if (!id) return;
    arrayOfData.splice(i, 1);
    draw()
}


function MoviesConst(_name, _year, _description) {
    this.movie_name = _name;
    this.movie_year = _year;
    this.task_description = _description;
}

function findI(array, id) {
    let movieId = id.toLowerCase()
    for (let i = 0; i < array.length; i++) {
        let movieIndex = array[i].movie_name
        if (movieId === movieIndex) {
            return i;
        }

    }
}


function clearForm() {
    const { movie_name, movie_year, task_description } = movie_DOM;
    task_description.value = ""
    movie_year.value = ""
    movie_name.value = ""
}



function initSaveButtons(data, indexToSkip) {
    for (let index = 0; index < data.length; index++) {
        if (index !== indexToSkip) data[index].editMode = false;
    }
}


function deleteCarHandler() {
    deleteCard(this.parentElement.parentElement.id);
}


