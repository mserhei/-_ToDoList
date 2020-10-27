let lsDataIn;
let lsDataOut;

if (localStorage.getItem(`lsData`) === null) {
    lsDataIn = localStorage.setItem(`lsData`, JSON.stringify(data));
}

lsDataOut = JSON.parse(localStorage.getItem(`lsData`));


function updateLocalStorage () {
    lsDataIn = localStorage.setItem(`lsData`, JSON.stringify(lsDataOut));
}
