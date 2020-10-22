const mainTable = document.querySelector(`.main_table`);
console.log(mainTable);

const createTable = function () {
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
            tdTagCompleted.classList.add(`td_completed`, 'td_center');
            tdTagCompleted.innerText = `completed`;
        } else {
            tdTagCompleted.classList.add(`td_silver`, 'td_center');
            tdTagCompleted.innerText = `not completed`;
        }

        trTag.append(tdTagCompleted);

        // DELETED

        let tdTagDeleted = document.createElement(`td`);
        if (initialData[i].deleted === true) {
            tdTagDeleted.classList.add(`td_deleted`, 'td_center');
            tdTagDeleted.innerText = `deleted`;
        } else {
            tdTagDeleted.classList.add(`td_silver`, 'td_center');
            tdTagDeleted.innerText = `not deleted`;
        }

        trTag.append(tdTagDeleted);

        // DESCRIPTION

        let tdTagDescription = document.createElement(`td`);
        if (initialData[i].description) {
            tdTagDescription.classList.add(`td_decription_exists`, 'td_center');
            tdTagDescription.innerText = `description`;
            trTag.append(tdTagDescription);
        } else {
            tdTagDescription.classList.add(`td_silver`, 'td_center');
            tdTagDescription.innerText = `no description`;
            trTag.append(tdTagDescription);
        }


    }

}

createTable();