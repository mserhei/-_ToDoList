const addNewTask = document.querySelector(`.add_new_task`)
const modalBlock = document.querySelector(`.modal_block`)
const modalButtonCancel = document.querySelector(`.modal_button_cancel`)
const modalButtonSave = document.querySelector(`.modal_button_save`)

const modalName = document.querySelector(`.modal_name`)
const modalDescription = document.querySelector(`.modal_description`)

// MODAL WINDOW APPEARS AND DISAPPEARS (WITHOUT SAVING)

addNewTask.addEventListener(`click`, () => {
    modalBlock.style.display = `block`;
})

modalButtonCancel.addEventListener(`click`, () => {
    modalBlock.style.display = `none`;
})

// MODAL WINDOW SAVE NEW TASK

const newTaskObject = {};

modalButtonSave.addEventListener(`click`, () => {

    // newTaskObject.id = initialData.length;
    // newTaskObject.name = modalName.value;
    // newTaskObject.description = modalDescription.value;
    // newTaskObject.urgency = 0;
    // newTaskObject.completed = false;
    // newTaskObject.deleted = false;
})

