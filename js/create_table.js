const mainTable = document.querySelector(`.main_table`);
console.log (mainTable);

const createTable = function () {
    const tableTag = document.createElement('table');
    mainTable.append(tableTag);

    for (let i = 0; i < initialData.length; i++) {
        let trTag = document.createElement(`tr`);
        tableTag.prepend(trTag);

        let tdTagUrgency = document.createElement(`td`);
        if (initialData[i].urgency === `urgent`) {
            tdTagUrgency.classList.add(`td_urgency`,`td_urgent`,'td_center');
        }else if (initialData[i].urgency === `not urgent`) {
            tdTagUrgency.classList.add(`td_urgency`,`td_not_urgent`,'td_center');
        } else {
            tdTagUrgency.classList.add(`td_urgency`,`td_termless`,'td_center');
        }
        
        tdTagUrgency.innerText = `${initialData[i].urgency}`;
        trTag.append(tdTagUrgency);
    
        let tdTagName = document.createElement(`td`);
        tdTagName.classList.add(`td_name`);
        tdTagName.innerText = `${initialData[i].name}`;
        trTag.append(tdTagName);

        let tdTagCompleted = document.createElement(`td`);
        if (initialData[i].completed === `completed`) {
            tdTagCompleted.classList.add(`td_completed`,'td_center');
        } else {
            tdTagCompleted.classList.add(`td_silver`,'td_center');
        }
        tdTagCompleted.innerText = `${initialData[i].completed}`;
        trTag.append(tdTagCompleted);

        let tdTagDeleted = document.createElement(`td`);
        if (initialData[i].deleted === `deleted`) {
            tdTagDeleted.classList.add(`td_deleted`,'td_center');
        } else {
            tdTagDeleted.classList.add(`td_silver`,'td_center');
        }
        tdTagDeleted.innerText = `${initialData[i].deleted}`;
        trTag.append(tdTagDeleted);

        let tdTagDescription = document.createElement(`td`);
        if (initialData[i].description) {
            tdTagDescription.classList.add(`td_decription_exists`,'td_center');
            tdTagDescription.innerText = `description`;
            trTag.append(tdTagDescription);
        } else {
            tdTagDescription.classList.add(`td_silver`,'td_center');
            tdTagDescription.innerText = `no description`;
            trTag.append(tdTagDescription);
        }
        
        
    }

}

createTable();