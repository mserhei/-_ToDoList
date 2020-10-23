// create a new array

let allTasksRadio = document.querySelectorAll(`.all_tasks_radio`);
let allTasksRadioCheckedIndex;

for (let i = 0; i < allTasksRadio.length; i++) {
    if (allTasksRadio[i].checked) {
        allTasksRadioCheckedIndex = i;
    }
}

let allUrgentRadio = document.querySelectorAll(`.all_urgency_radio`);
let allUrgentRadioCheckedIndex;

for (let i = 0; i < allUrgentRadio.length; i++) {
    if (allUrgentRadio[i].checked) {
        allUrgentRadioCheckedIndex = i;
    }
}

// function for new array

let arrAfterTasksChecked = [];

for (let i = 0; i < initialData.length; i++) {
    if (allTasksRadioCheckedIndex === 0) {
        arrAfterTasksChecked = initialData;
    }
    if (allTasksRadioCheckedIndex === 1) {
        if (initialData[i].completed === true) {
            arrAfterTasksChecked.push(initialData[i]);
        }
    }
    if (allTasksRadioCheckedIndex === 2) {
        if (initialData[i].deleted === true) {
            arrAfterTasksChecked.push(initialData[i]);
        }
    }
}

console.log (arrAfterTasksChecked);



let arrAfterUrgencyChecked = [];

for(let i = 0; i < arrAfterTasksChecked.length; i++) {
    if (allUrgentRadioCheckedIndex === 0) {
        arrAfterUrgencyChecked = arrAfterTasksChecked;
    }
    if (allUrgentRadioCheckedIndex === 1) {
        if (arrAfterTasksChecked[i].urgency === 0) {
            arrAfterUrgencyChecked.push(arrAfterTasksChecked[i]);
        }
    }
    if (allUrgentRadioCheckedIndex === 2) {
        if (arrAfterTasksChecked[i].urgency === 1) {
            arrAfterUrgencyChecked.push(arrAfterTasksChecked[i]);
        }
    }
    if (allUrgentRadioCheckedIndex === 3) {
        if (arrAfterTasksChecked[i].urgency === 2) {
            arrAfterUrgencyChecked.push(arrAfterTasksChecked[i]);
        }
    }
}



console.log (arrAfterUrgencyChecked);

//////////////////////////////

const mainTable = document.querySelector(`.main_table`);
console.log(mainTable);

const createTable = function () {

    if (document.querySelector(`table`)) {
        document.querySelector(`table`).remove()
    }





    







    const tableTag = document.createElement('table');
    mainTable.append(tableTag);

    for (let i = 0; i < initialData.length; i++) {
        let trTag = document.createElement(`tr`);
        tableTag.prepend(trTag);

        // URGENCY

        let tdTagUrgency = document.createElement(`td`);
        if (initialData[i].urgency === 0) {
            tdTagUrgency.classList.add(`td_urgency`, `td_urgent`, 'td_center');
            tdTagUrgency.innerText = `urgent`;
        } else if (initialData[i].urgency === 1) {
            tdTagUrgency.classList.add(`td_urgency`, `td_not_urgent`, 'td_center');
            tdTagUrgency.innerText = `not urgent`;
        } else {
            tdTagUrgency.classList.add(`td_urgency`, `td_termless`, 'td_center');
            tdTagUrgency.innerText = `termless`;
        }

        trTag.append(tdTagUrgency);

        // NAME

        let tdTagName = document.createElement(`td`);
        tdTagName.classList.add(`td_name`);
        tdTagName.innerText = `${initialData[i].name}`;
        trTag.append(tdTagName);

        // COMPLETED

        let tdTagCompleted = document.createElement(`td`);
        if (initialData[i].completed === true) {
            tdTagCompleted.classList.add(`td_completed`, `green`, 'td_center');

        } else {
            tdTagCompleted.classList.add(`td_completed`, `silver`, 'td_center');
        }

        tdTagCompleted.innerText = `completed`;
        trTag.append(tdTagCompleted);

        // DELETED

        let tdTagDeleted = document.createElement(`td`);

        if (initialData[i].deleted === true) {
            tdTagDeleted.classList.add(`td_deleted`, `red`, 'td_center');

        } else {
            tdTagDeleted.classList.add(`td_deleted`, `silver`, 'td_center');
        }

        tdTagDeleted.innerText = `deleted`;
        trTag.append(tdTagDeleted);

        // DESCRIPTION

        let tdTagDescription = document.createElement(`td`);
        if (initialData[i].description) {
            tdTagDescription.classList.add(`black`, 'td_center');
            tdTagDescription.innerText = `description`;
            trTag.append(tdTagDescription);
        } else {
            tdTagDescription.classList.add(`silver`, 'td_center');
            tdTagDescription.innerText = `no description`;
            trTag.append(tdTagDescription);
        }


    }

    // ON COMPLETED CLICK

    const allTdCompleted = document.querySelectorAll(`.td_completed`);

    for (let i = 0; i < allTdCompleted.length; i++) {
        allTdCompleted[i].addEventListener(`click`, () => {
        allTdCompleted[i].classList.toggle(`green`);
        allTdCompleted[i].classList.toggle(`silver`);
    })}

    // ON DELETED CLICK

    const allTdDeleted = document.querySelectorAll(`.td_deleted`);

    for (let i = 0; i < allTdDeleted.length; i++) {
        allTdDeleted[i].addEventListener(`click`, () => {
        allTdDeleted[i].classList.toggle(`red`);
        allTdDeleted[i].classList.toggle(`silver`);
    })}

}

createTable();