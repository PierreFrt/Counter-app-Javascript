// document.getElementById("count").textContent=5

let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");
let entries = saveEl.textContent;

function increment(){
    count++;
    countEl.textContent=count;
}

function decrement(){
    if (count >0){
    count--;}
    else {
        count=0;
    }
    countEl.textContent=count;
    }

function reset(){
    count = 0;
    countEl.textContent=count;
}

function save(){
    if (saveEl.innerText==""){
    entries = count;
    saveEl.textContent=entries;
    }
    else{
    entries += " - " + count;
    saveEl.textContent=entries; 
    }
}
function save_reset(){
    if (saveEl.innerText==""){
        entries = count;
        saveEl.textContent=entries;
        }
    else{
        entries += " - " + count;
        saveEl.textContent=entries; 
        }
    count=0;
    countEl.textContent=count;
}
function reset_entries(){
    saveEl.textContent=""; 
}


