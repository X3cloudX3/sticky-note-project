const task_DOM = {
    task_date: document.getElementById('Date'),
    task_description: document.getElementById('task_description'),
    main_container: document.getElementById("main_container"),
}

let arrayOfData = [];



function draw() {
    clear()

    for (let i = 0; i < arrayOfData.length; i++) {

        drawCard(arrayOfData[i])


    }
}

function clear() {
    task_DOM.main_container.innerHTML = ""
}


function drawCard(task) {
    const { main_container } = task_DOM;
    const taskCard = createNewCard(task);
    if (!taskCard) {
        return;
    }
    main_container.append(taskCard)


}

function createNewCard(task) {
    const { task_description, tast_date, } = task;
    if (!task_description || !tast_date) return;

    const cardMain = document.createElement("div");
    cardMain.className = "card mx-5 mt-5 d-inline-block";
    cardMain.style = "width: 18rem;"
    cardMain.id = task_date

    const cardBody1 = document.createElement("div");
    cardBody1.className = "card-body";

    const taskData = document.createElement("p");
    taskData.innerHTML = task_description

    cardBody1.append(taskData)

    const cardList = document.createElement("ul");
    cardList.className = "list-group list-group-flush";

    const li1 = document.createElement("li");
    const li2 = document.createElement("li");


    li1.innerHTML = "Date: " + task_date;
    li2.innerHTML = "Time: " + "this time";


    li1.className = "list-group-item";
    li2.className = "list-group-item";


    cardList.append(li1, li2);

    const cardBody2 = document.createElement("div");
    cardBody2.className = "card-body";
    cardBody2.id = "cardBody2"


    const deleteButton = document.createElement("Button")
    deleteButton.innerText = "X";

    deleteButton.className = "btn btn-danger float-right";
    deleteButton.addEventListener("click", deleteCarHandler)

    cardBody2.append(deleteButton)

    cardMain.append(cardBody1, cardList, cardBody2);


    cardMain.addEventListener("mouseover", function () {
        deleteButton.style.visibility = "visible";




    })
    cardMain.addEventListener("mouseout", function () {
        deleteButton.style.visibility = "hidden"

    })

    task_DOM.main_container.append(cardMain)
}

function saveTask() {
    const { task_date, task_description, } = task_DOM

    const index = findI(arrayOfData, task_date.value)
    if (index !== undefined) {
        draw()

        return;
    }
    arrayOfData.push(new TaskConst(task_date.value, task_description.value))

    draw()


}

function TaskConst(_description, _date, ) {
    this.task_description = _description;
    this.task_date = _date;

}

function findI(array, id) {
    let taskId = id
    for (let i = 0; i < array.length; i++) {
        let taskIndex = array[i].task_date
        if (taskId === taskIndex) {
            return i;
        }

    }
}